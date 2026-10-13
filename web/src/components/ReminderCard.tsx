import { useRemindersContext } from "../context/RemindersContext";
import type { Priority, Reminder } from "../types/reminder";

const PRIORITY_MARKS: Record<string, string> = {
    low: '!',
    medium: '!!',
    high: '!!!'
};

export const PRIORITY_GRADIENTS: Record<Priority, [string, string]> = {
    low:    ['#34c759', '#30b0c7'],
    medium: ['#ff9500', '#ffcc00'],
    high:   ['#ff3b30', '#ff2d92'],
};

const formatDue = (date: Date) =>
    new Intl.DateTimeFormat("en-EN", {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);

const ReminderCard: React.FC<{ data: Reminder }> = ({ data }) => {
    const { toggleDone, categories } = useRemindersContext();

    const category = categories.find(c => c.id === data.categoryId);
    const overdue = !data.done && !!data.dueAt && data.dueAt < new Date();

    const mark = PRIORITY_MARKS[data.priority];
    const [color1, color2] = PRIORITY_GRADIENTS[data.priority];

    return (
        <div className="reminder" style={{ '--cat-color': category?.color } as React.CSSProperties }>
            <div className="left-side">
                <i className="hgi hgi-stroke hgi-rounded hgi-circle"></i>
                <div className="description">
                    <p>{data.title}</p>
                    {data.note && <span>{data.note}</span>}

                    {(category || data.dueAt) && (
                        <div className="meta">
                            {category && (
                                <div className="chip">
                                    {category.icon && <i className={category.icon}></i>}
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

            <div className="right-side">
                {data.flagged && <i className="hgi hgi-stroke hgi-rounded hgi-flag-02"></i>}
                <p className="priority-level" style={{ '--color1': color1, '--color2': color2 } as React.CSSProperties } >{mark}</p>
            </div>
        </div>
    )
};

export default ReminderCard;