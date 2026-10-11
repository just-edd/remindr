import type { Storage } from "./types";
import { categories as seedCategories, reminders as seedReminders } from "../data/mock";
import type { Category, Reminder } from "../types/reminder";

const CATEGORIES_KEYS = 'reminder-app:categories';
const REMINDERS_KEYS = 'reminder-app:reminders';
const DATE_FIELDS = new Set(['createdAt', 'updatedAt', 'dueAt']);

const reviveDates = (key: string, value: unknown) =>
    DATE_FIELDS.has(key) && typeof value === 'string' ? new Date(value) : value;

function read<T>(key: string): T[] | null {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw, reviveDates) as T[]) : null;
}

function write<T>(key: string, value: T[]) {
    localStorage.setItem(key, JSON.stringify(value));
}

export class LocalStorageStorage implements Storage {
    constructor(seedOnFirstRun = false) {
        // Seed only if nothing has ever been saved
        if (seedOnFirstRun && read(CATEGORIES_KEYS) === null)
            this.seed();
    }

    private seed() {
        write(CATEGORIES_KEYS, seedCategories);
        write(REMINDERS_KEYS, seedReminders);
    }

    async getCategories() {
        return read<Category>(CATEGORIES_KEYS) ?? [];
    }

    async saveCategory(category: Category) {
        const all = await this.getCategories();
        const i = all.findIndex((c) => c.id === category.id);
        if (i >= 0) all[i] = category;
        else all.push(category);
        write(CATEGORIES_KEYS, all);
    }

    async deleteCategory(id: string) {
        const all = await this.getCategories();
        write(CATEGORIES_KEYS, all.filter((c) => c.id !== id));
    }

    async getReminders() {
        return read<Reminder>(REMINDERS_KEYS) ?? [];
    }

    async saveReminder(reminder: Reminder) {
        const all = await this.getReminders();
        const i = all.findIndex((r) => r.id === reminder.id);
        if (i >= 0) all[i] = reminder;
        else all.push(reminder);
        write(REMINDERS_KEYS, all);
    }

    async deleteReminder(id: string) {
        const all = await this.getReminders();
        write(REMINDERS_KEYS, all.filter((r) => r.id !== id));
    }

    async resetToSeed() {
        this.seed();
    }
}