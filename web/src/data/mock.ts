import type { Category, Reminder } from "../types/reminder";
import { DEFAULT_CATEGORY_ID } from "../types/reminder";

// Helper functions to mock data
const inDays = (days: number, hours: number = 9): Date => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(hours, 0, 0, 0);

    return date;
};

const ago = (days: number): Date => inDays(-days);

export const categories: Category[] = [
    { id: DEFAULT_CATEGORY_ID, name: "General", createdAt: ago(30) },
    { id: "work", name: "Work", createdAt: ago(50) },
    { id: "home", name: "Home", createdAt: ago(21) },
    { id: "health", name: "Health", createdAt: ago(10) },
];

export const reminders: Reminder[] = [
    {
        id: "r1",
        title: "Send weekly report",
        note: "Include progress and blockers",
        categoryId: "work",
        priority: "high",
        done: false,
        dueAt: inDays(0, 16),
        createdAt: ago(3),
        updatedAt: ago(1)
    },
    {
    id: "r2",
    title: "Code review for PR #142",
    categoryId: "work",
    priority: "medium",
    dueAt: inDays(1, 11),
    done: false,
    createdAt: ago(2),
    updatedAt: ago(2),
  },
  {
    id: "r3",
    title: "Pay bills",
    categoryId: "home",
    priority: "high",
    dueAt: inDays(-1, 12),
    done: false,
    createdAt: ago(7),
    updatedAt: ago(7),
  },
  {
    id: "r4",
    title: "Clean house",
    categoryId: "home",
    priority: "low",
    dueAt: inDays(0, 19),
    done: true,
    createdAt: ago(1),
    updatedAt: ago(0),
  },
  {
    id: "r5",
    title: "Call a dentist",
    note: "Make an appointment",
    categoryId: "health",
    priority: "medium",
    dueAt: inDays(5, 10),
    done: false,
    createdAt: ago(6),
    updatedAt: ago(6),
  },
];