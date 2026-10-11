import type { Category, Reminder } from "../types/reminder";

export interface Storage {
    getCategories(): Promise<Category[]>;
    saveCategory(category: Category): Promise<void>;
    deleteCategory(id: string): Promise<void>;

    getReminders(): Promise<Reminder[]>;
    saveReminder(reminder: Reminder): Promise<void>;
    deleteReminder(id: string): Promise<void>;

    // Dev only: wipe everything and reload the mock data.
    resetToSeed(): Promise<void>;
};