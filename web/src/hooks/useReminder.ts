import { useCallback, useEffect, useState } from "react";
import type { Reminder, Category, NewCategory, NewReminder } from "../types/reminder";
import { storage } from "../storage";

export function useReminders() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [loading, setLoading] = useState(true);

    const reload = useCallback(async () => {
        const [c, r] = await Promise.all([
            storage.getCategories(),
            storage.getReminders()
        ]);

        setCategories(c);
        setReminders(r);
        setLoading(false);
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    const addCategory = async (data: NewCategory) => {
        const now = new Date();
        await storage.saveCategory({ 
            ...data,
            id: crypto.randomUUID(),
            createdAt: now,
        });
        await reload();
    };

    const addReminder = async (data: NewReminder) => {
        const now = new Date();
        await storage.saveReminder({
            ...data,
            id: crypto.randomUUID(),
            done: false,
            createdAt: now,
            updatedAt: now,
        });
        await reload();
    };

    const toggleDone = async (reminder: Reminder) => {
        await storage.saveReminder({ ...reminder, done: !reminder.done, updatedAt: new Date() });
        await reload();
    };

    const toggleFlag = async (reminder: Reminder) => {
        await storage.saveReminder({ ...reminder, flagged: !reminder.flagged, updatedAt: new Date() });
        await reload();
    }

    const removeCategory = async (id: string) => {
        await storage.deleteCategory(id);
        await reload();
    };

    const removeReminder = async (id: string) => {
        await storage.deleteReminder(id);
        await reload();
    };

    const resetDevData = async () => {
        await storage.resetToSeed();
        await reload();
    };

    return {
        categories, reminders, loading,
        addCategory, addReminder, toggleDone, toggleFlag, removeCategory, removeReminder, resetDevData,
    };
}