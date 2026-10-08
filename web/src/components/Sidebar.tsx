import '../styles/sidebar.css';
import SidebarFilterCard from './SidebarFilterCard';

const Sidebar: React.FC = () => {
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

            <form>
                <i className="hgi hgi-stroke hgi-rounded hgi-search-01"></i>
                <input type="text" placeholder='Search' />
            </form>

            <div className='filter-cards'>
                <SidebarFilterCard icon='calendar-01' label='Today' number={17} color='var(--color-today)' />
                <SidebarFilterCard icon='calendar-03' label='Scheduled' number={17} color='var(--color-scheduled)' />
                <SidebarFilterCard icon='archive-02' label='All' number={34} color='var(--color-all)' />
                <SidebarFilterCard icon='flag-02' label='Flagged' number={0} color='var(--color-flagged)' />
            </div>

            <p className='my-reminders'>My reminders</p>

            
        </aside>
    )
};

export default Sidebar;