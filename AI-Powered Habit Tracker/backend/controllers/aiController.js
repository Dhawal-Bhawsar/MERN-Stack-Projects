import Habit from "../models/Habit.js";
import HabitLog from "../models/HabitLog.js";
import AIInsight from "../models/AlInsight.js";
import {
    chatCompletion,
    parseJSON,
    SystemPrompts,
} from "../utils/aiService.js";
import { lastNDays } from "../utils/dateHelpers.js";

const buildHabitContext = async (userId, dayCount = 7) => {
    const habits = await Habit.find({ userId, isArchived: false });
    const days = lastNDays(dayCount);
    const logs = await HabitLog.find({
        userId,
        completedDate: { $gte: days[0], $lte: days[days.length - 1] },
    });

    const perHabit = habits.map((habit) => ({
        name: habit.name,
        category: habit.category,
        frequency: habit.frequency,
        targetDays: habit.targetDays,
        completedDays: logs.filter(
            (log) => String(log.habitId) === String(habit._id)
        ).length,
    }));

    return { days, perHabit };
};

const saveInsight = (userId, type, content, meta = {}) =>
    AIInsight.create({ userId, type, content, meta });

export const weeklyReport = async (req, res) => {
    try {
        const context = await buildHabitContext(req.user._id);
        if (!context.perHabit.length) {
            return res.json({
                content:
                    "You do not have any active habits yet. Create a habit to receive a personalized weekly report.",
            });
        }

        const habitSummary = context.perHabit
            .map(
                (habit) =>
                    `- ${habit.name} (${habit.category}, ${habit.frequency}): completed ${habit.completedDays} times; target ${habit.targetDays} days`
            )
            .join("\n");
        const userPrompt = `Here is the user's habit data for the past ${context.days.length} days (${context.days[0]} to ${context.days[context.days.length - 1]}):\n${habitSummary}\n\nWrite a personalized weekly report with progress, patterns, and actionable next steps.`;
        const result = await chatCompletion({
            system: SystemPrompts.weekly,
            user: userPrompt,
        });

        await saveInsight(req.user._id, "weekly", result.content);
        res.json({ content: result.content });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const suggestHabits = async (req, res) => {
    try {
        const context = await buildHabitContext(req.user._id, 30);
        const result = await chatCompletion({
            system: SystemPrompts.suggestion,
            user: `Suggest habits based on this data:\n${JSON.stringify(context.perHabit)}`,
        });
        let suggestions;
        try {
            suggestions = parseJSON(result.content);
        } catch {
            suggestions = result.content;
        }
        await saveInsight(req.user._id, "suggestion", result.content);
        res.json({ suggestions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const recoveryPlan = async (req, res) => {
    try {
        const context = await buildHabitContext(req.user._id, 30);
        const result = await chatCompletion({
            system: SystemPrompts.recovery,
            user: `Create a recovery plan from this habit data:\n${JSON.stringify(context.perHabit)}`,
        });
        await saveInsight(req.user._id, "recovery", result.content);
        res.json({ content: result.content });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const chat = async (req, res) => {
    try {
        const { question } = req.body || {};
        if (!question?.trim()) {
            return res.status(400).json({ message: "Question is required" });
        }
        const context = await buildHabitContext(req.user._id, 30);
        const result = await chatCompletion({
            system: SystemPrompts.chat,
            user: `Habit data:\n${JSON.stringify(context.perHabit)}\n\nQuestion: ${question.trim()}`,
        });
        await saveInsight(req.user._id, "chat", result.content, { question });
        res.json({ content: result.content });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const morning = async (req, res) => {
    try {
        const result = await chatCompletion({
            system: SystemPrompts.morning,
            user: "Give the user a short motivational morning message for staying consistent with habits.",
        });
        await saveInsight(req.user._id, "morning", result.content);
        res.json({ content: result.content });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
