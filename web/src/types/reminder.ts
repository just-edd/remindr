export type Reminder = {
    id: string;
    title: string;
    description?: string;

    dueDate: string;
    dueTime?: string;

    completed: boolean;

    category?: string;
};