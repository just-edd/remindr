import ReminderCard from '../components/ReminderCard';
import { useRemindersContext } from '../context/RemindersContext';
import '../styles/dashboard.css';

const Dashboard: React.FC = () => {
    const { reminders } = useRemindersContext();

    return (
        <section>
            <header>
                <button>
                    <i className="hgi hgi-stroke hgi-rounded hgi-add-square"></i>
                    <p>Add reminder</p>
                </button>
            </header>

            <main>
                {reminders.map(reminder => (
                    <ReminderCard key={reminder.id} data={reminder} />
                ))}
            </main>
        </section>
    )
};

export default Dashboard;