import Sidebar from "./components/Sidebar";
import type { Category, Reminder } from './types/reminder';
import { reminders as remindersData, categories as categoriesData } from './data/mock';
import { useState } from "react";

const App: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>(remindersData);
  const [categories, setCategories] = useState<Category[]>(categoriesData);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="container">
      <Sidebar 
      reminders={reminders}
      categories={categories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      />
    </div>
  )
};

export default App;