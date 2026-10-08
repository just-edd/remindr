export type ID = string;

export type Priority = 'low' | 'medium' | 'high';

export interface Category {
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
    category?: string;
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