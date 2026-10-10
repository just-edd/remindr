import Sidebar from "./components/Sidebar";
import type { Category, Reminder } from './types/reminder';
import { reminders as remindersData, categories as categoriesData } from './data/mock';
import { useState } from "react";
import CategoryModal from "./components/CategoryModal";

const App: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>(remindersData);
  const [categories, setCategories] = useState<Category[]>(categoriesData);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);

  const createCategory = (category: Category) => {
    if(!category.name.trim())
      return;

    setCategories(prev => [...prev, category]);
    setIsCategoryModalOpen(false);
  };

  return (
    <div className="container">
      <Sidebar 
      reminders={reminders}
      categories={categories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      onAddCategory={() => setIsCategoryModalOpen(true)}
      />

      {isCategoryModalOpen && 
        <CategoryModal 
        onClose={() => setIsCategoryModalOpen(false)}
        onCreate={createCategory}
        />
      }
    </div>
  )
};

export default App;