import '../styles/sidebar.css';
import SidebarFilterCard from './SidebarFilterCard';
import { useMemo } from 'react';
import { formatDate, isToday } from '../utils/dates';
import type { Category, Reminder } from '../types/reminder';

interface SidebarProps {
    reminders: Reminder[];
    categories: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({ reminders, categories }) => {
    const counts = useMemo(() => {
        const active = reminders.filter(r => !r.done);
        
        return {
            today: active.filter(r => r.dueAt && isToday(r.dueAt)).length,
            scheduled: active.filter(r => r.dueAt).length,
            all: reminders.length,
            flagged: active.filter(r => r.flagged).length
        };
    }, [reminders]);

    const categoryCount = useMemo(() => {
        const map = new Map<string, number>();

        reminders.forEach(r => {
            if (!r.category) return;
            map.set(r.category, (map.get(r.category) ?? 0) + 1);
        });

        return map;
    }, [reminders, categories]);

    return (
        <aside>
            <header>
                <div className="controls">
                    <button className='close'><i className="fa-solid fa-xmark"></i></button>
                    <button className='maximize'><i className="fa-regular fa-window-minimize"></i></button>
                    <button className='minimize'><i className="fa-regular fa-window-maximize"></i></button>
                </div>

                <div className='headline'>
                    <h1>Reminder App</h1>
                    <p>v0.0.0</p>
                </div>
            </header>

            <form onSubmit={e => e.preventDefault()}>
                <i className="hgi hgi-stroke hgi-rounded hgi-search-01"></i>
                <input type="text" placeholder='Search' />
            </form>

            <div className='filter-cards'>
                <SidebarFilterCard icon='calendar-01' label='Today' number={counts.today} color='var(--color-today)' />
                <SidebarFilterCard icon='calendar-03' label='Scheduled' number={counts.scheduled} color='var(--color-scheduled)' />
                <SidebarFilterCard icon='archive-02' label='All' number={counts.all} color='var(--color-all)' />
                <SidebarFilterCard icon='flag-02' label='Flagged' number={counts.flagged} color='var(--color-flagged)' />
            </div>

            <p className='my-reminders'>My reminders</p>

            <div className="categories">
                {categories.map((cat, index) => (
                    <div className="category" key={index} style={{ '--card-color': cat.color || "var(--color-category-default)" } as React.CSSProperties}>
                        <div className="left-side">
                            {cat.icon && 
                                <div className="icon-box">
                                    <i className={cat.icon}></i>
                                </div>
                            }

                            <div className="description">
                                <p>{cat.name}</p>
                                <span>Created at {formatDate(cat.createdAt)}</span>
                            </div>
                        </div>

                        <p>{categoryCount.get(cat.name)}</p>
                    </div>
                ))}
            </div>
        </aside>
    )
};

export default Sidebar;