export function isToday(date: string): boolean {
    const today = new Date();
    const targetDate = new Date(date);

    return (
        today.getFullYear() === targetDate.getFullYear() &&
        today.getMonth() === targetDate.getMonth() &&
        today.getDay() === targetDate.getDay()
    );
};

export function isTomorrow(date: string): boolean {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const targetDate = new Date(date);

    return (
        tomorrow.getFullYear() === targetDate.getFullYear() &&
        tomorrow.getMonth() === targetDate.getMonth() &&
        tomorrow.getDay() === targetDate.getDay()
    );
};