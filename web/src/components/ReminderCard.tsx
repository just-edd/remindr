import { useRemindersContext } from "../context/RemindersContext";
import type { Reminder } from "../types/reminder";

const PRIORITY_MARKS: Record<string, string> = {
    low: '!',
    medium: '!!',
    high: '!!!'
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

    return (
        <div className={`reminder ${data.done ? 'done' : ''}`}>
            <div className="left-side">
                <button type="button" onClick={() => toggleDone(data)}>
                    { !data.done 
                        ? <i className="hgi hgi-stroke hgi-rounded hgi-circle"></i>
                        : <i className="hgi hgi-stroke hgi-rounded hgi-checkmark-circle-02"></i>
                    }
                </button>

                <div className="description">
                    <p>{data.title}</p>
                    {data.note && <span className="note">{data.note}</span>}

                    {(category || data.dueAt) && (
                        <div className="meta">
                            {category && (
                                <span className="chip">
                                    <i className={`${category.icon}`} style={{ backgroundImage: category.color }} />
                                    {category.name}
                                </span>
                            )}
                            {data.dueAt && (
                                <span className={overdue ? 'due overdue' : 'due'}>
                                    <i className="hgi hgi-stroke hgi-rounded hgi-calendar-03" />
                                    {formatDue(data.dueAt)}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="right-side">
                {mark && <span className={`priority ${data.priority}`}>{mark}</span>}
                {data.flagged && <i className="hgi hgi-stroke hgi-rounded hgi-flag-01 flag" />}
            </div>
        </div>
    )
};

export default ReminderCard;