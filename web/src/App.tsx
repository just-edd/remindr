import Sidebar from "./components/Sidebar";
import type { NewCategory } from './types/reminder';
import { useState } from "react";
import CategoryModal from "./components/CategoryModal";
import { useReminders } from "./hooks/useReminder";

const App: React.FC = () => {
  const { reminders, categories, loading, addCategory, removeCategory } = useReminders();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);

  const createCategory = async (category: NewCategory) => {
    const name = category.name.trim();
    if (!name) return;

    // Check if category already exists
    if (categories.some((c) => c.name.toLowerCase() === name.toLowerCase())) return;

    await addCategory({ ...category, name });
    setIsCategoryModalOpen(false);
  };

  const deleteCategory = async (id: string) => {
    await removeCategory(id);
    if (activeCategory === id)
      setActiveCategory(null);
  };

  return (
    <div className="container">
      <Sidebar 
      reminders={reminders}
      categories={categories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      onAddCategory={() => setIsCategoryModalOpen(true)}
      onRemoveCategory={deleteCategory}
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