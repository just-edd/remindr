export type ID = string;

export type Priority = 'low' | 'medium' | 'high';

export type NewCategory = Omit<Category, 'id' | 'createdAt'>;
export type NewReminder = Omit<Reminder, 'id' | 'createdAt' | 'updatedAt' | 'done'>;

export interface Category {
    id: string;
    name: string;
    color?: string;
    icon?: string;
    createdAt: Date;
};

export interface Reminder {
    id: ID;
    title: string;
    note?: string;
    priority: Priority;
    categoryId?: ID;
    dueAt?: Date;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
    flagged?: boolean;
};

export interface ReminderFilter {
    categoryId?: ID;
    done?: boolean;
    priority?: Priority;
    dueBefore?: Date;
};

export const DEFAULT_CATEGORY_ID: ID = "general";