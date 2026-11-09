const today = new Date();
const key = (offset = 0) => {
  const date = new Date(today);
  date.setDate(date.getDate() - offset);
  return date.toISOString().slice(0, 10);
};

export const mockUser = {
  _id: "mock-user",
  name: "Alex Rivera",
  email: "alex@example.com",
  avatar: "A",
  morningMotivation: true,
};

export const mockHabits = [
  {
    _id: "habit-water",
    userId: mockUser._id,
    name: "Drink water",
    description: "Stay hydrated throughout the day.",
    category: "Health",
    frequency: "daily",
    targetDays: 7,
    color: "#0ea5e9",
    icon: "💧",
    isArchived: false,
    order: 0,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "habit-reading",
    userId: mockUser._id,
    name: "Read",
    description: "Read for twenty minutes.",
    category: "Learning",
    frequency: "daily",
    targetDays: 5,
    color: "#8b5cf6",
    icon: "📚",
    isArchived: false,
    order: 1,
    createdAt: new Date().toISOString(),
  },
];

export const mockLogs = [
  ...Array.from({ length: 5 }, (_, index) => ({
    _id: `log-water-${index}`,
    userId: mockUser._id,
    habitId: "habit-water",
    completedDate: key(index),
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    _id: `log-reading-${index}`,
    userId: mockUser._id,
    habitId: "habit-reading",
    completedDate: key(index),
  })),
];

export const mockAI = {
  weeklyReport: "You are building good momentum. Keep your routines small and consistent this week.",
  suggestions: ["Take a short walk", "Plan tomorrow each evening", "Practice five minutes of mindfulness"],
  recovery: "Restart with one small action today, then rebuild your routine gradually.",
  morning: "A fresh day is a fresh opportunity to keep your habits moving forward.",
  chat: {},
};

export const mockAi = mockAI;
