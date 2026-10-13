const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

const addDays = (d: Date, days: number) => {
    const copy = new Date(d);
    copy.setDate(copy.getDate() + days);
    return copy;
};

export const isSameDay = (a: Date, b: Date) => startOfDay(a) === startOfDay(b);

export const isToday = (date: Date) => isSameDay(date, new Date());
export const isTomorrow = (date: Date) => isSameDay(date, addDays(new Date(), 1));
export const isYesterday = (date: Date) => isSameDay(date, addDays(new Date(), -1));