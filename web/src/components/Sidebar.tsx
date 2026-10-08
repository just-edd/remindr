import '../styles/sidebar.css';
import '../index.css';
import Category from './Category';

const Sidebar: React.FC = () => {
    return (
        <aside>
            <header className='flex gap-1.5'>
                <button className='bg-[#FD4F48] hover:bg-[#b15048]'></button>
                <button className='bg-[#FFB825] hover:bg-[#b8923b]'></button>
                <button className='bg-[#1FC230] hover:bg-[#4a9741]'></button>
            </header>

            <form className='search'>
                <i className="hgi hgi-stroke hgi-rounded hgi-search-01 text-sm"></i>
                <input type="text" placeholder='Search' />
            </form>

            <div className="categories grid grid-cols-2 gap-2">
                <Category number={17} color='--color-today' label='Today' icon='hgi hgi-stroke hgi-rounded hgi-calendar-01' />
                <Category number={17} color='--color-scheduled' label='Scheduled' icon='hgi hgi-stroke hgi-rounded hgi-calendar-03' />
                <Category number={0} color='--color-all' label='All' icon='hgi hgi-stroke hgi-rounded hgi-archive-02' />
                <Category number={12} color='--color-flagged' label='Flagged' icon='hgi hgi-stroke hgi-rounded hgi-flag-02' />
            </div>
        </aside>
    )
};

export default Sidebar;