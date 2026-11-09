import mongoose from "mongoose";

const CATEGORY = [
    "Health", 
    "Productivity", 
    "Learning", 
    "Fitness", 
    "Finance", 
    "Social",
    "Mindfulness",
    "Social",
    "Creativity",
    "Other"
];

const habitSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
        index: true, 
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: "",
    },
    category: {
        type: String,
        enum: CATEGORY,
        default:"Other",
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly"],
        default: "daily",
    },
    targetDays: {
        type: Number,
        default: 7,
        min: 1,
        max: 7,
    },
    color: {
        type: String,
        default: "#6366f1",
    },
    icon: {
        type: String,
        default: "🎯",
    },
    isArchived: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        default: 0,
    },
}, { timestamps: true }
);

export const HABIT_CATEGORIES = CATEGORY;
export default mongoose.model("Habit", habitSchema);
