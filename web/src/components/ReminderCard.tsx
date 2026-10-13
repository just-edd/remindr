import { useRemindersContext } from "../context/RemindersContext";
import type { Reminder } from "../types/reminder";
import { isToday, isTomorrow, isYesterday } from "../utils/dates";

const PRIORITY_MARKS: Record<string, string> = {
    low: "!",
    medium: "!!",
    high: "!!!",
};

const formatDue = (date: Date) => {
    const time = new Intl.DateTimeFormat('en-EN', {
        hour: 'numeric',
        minute: '2-digit',
    }).format(date);

    if (isToday(date)) return `Today, ${time}`;
    if (isTomorrow(date)) return `Tomorrow, ${time}`;
    if (isYesterday(date)) return `Yesterday, ${time}`;

    return new Intl.DateTimeFormat('en-EN', {
        day: 'numeric',
        month: 'short',
    }).format(date) + `, ${time}`;
}

const ReminderCard: React.FC<{ data: Reminder }> = ({ data }) => {
    const { toggleDone, toggleFlag, categories } = useRemindersContext();

    const category = categories.find(c => c.id === data.categoryId);
    const dueDate = data.dueAt ? new Date(data.dueAt) : null;
    const overdue = !data.done && !!dueDate && dueDate < new Date();
    const mark = PRIORITY_MARKS[data.priority];

    return (
        <div className={`reminder ${data.done ? 'done' : ''}`}>
            <div className="left-side">
                <i className={!data.done ? `hgi hgi-stroke hgi-rounded hgi-circle` : `hgi hgi-stroke hgi-rounded hgi-checkmark-circle-02`}
                onClick={() => toggleDone(data)}
                />
                <div className="description">
                    <p>{data.title}</p>
                    {data.note && <span className="note">{data.note}</span>}

                    {(category || data.dueAt) && (
                        <div className="meta">
                            {category && (
                                <div className="chip">
                                    {category.icon && <i className={category.icon} style={{ backgroundImage: category.color ?? 'var(--color-category-default)' }}></i>}
                                    <p>{category.name}</p>
                                </div>
                            )}
                            {data.dueAt && (
                                <div className={`chip due ${overdue ? 'overdue' : ''}`}>
                                    <i className="hgi hgi-stroke hgi-rounded hgi-calendar-03"></i>
                                    <p>{formatDue(data.dueAt)}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            <div className={`right-side ${data.flagged ? 'flagged' : ''}`}>
                <i className="hgi hgi-stroke hgi-rounded hgi-flag-02" onClick={() => toggleFlag(data)}></i>
                <p className={`priority ${data.priority}`}>{mark}</p>
            </div>
        </div>
    )
};

export default ReminderCard;