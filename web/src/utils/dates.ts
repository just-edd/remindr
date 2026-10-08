export const isToday = (date: Date): boolean => {
    const today = new Date();

    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
};

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}-${month}-${day}`;
}