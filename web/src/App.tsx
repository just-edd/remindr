import Sidebar from "./components/Sidebar";
import type { Category, Reminder } from './types/reminder';
import { reminders as remindersData, categories as categoriesData } from './data/mock';
import { useState } from "react";
import type { Page } from "./types/pages";
import CategoryPage from "./pages/CategoryPage";

const App: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>(remindersData);
  const [categories, setCategories] = useState<Category[]>(categoriesData);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('category');

  return (
    <div className="container">
      <Sidebar 
      reminders={reminders}
      categories={categories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      />

      {currentPage == 'category' && <CategoryPage />}
    </div>
  )
};

export default App;