import Sidebar from "./components/Sidebar";
import { useState } from "react";
import CategoryModal from "./components/CategoryModal";
import { useRemindersContext } from "./context/RemindersContext";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const { reminders, categories } = useRemindersContext();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);

  return (
    <div className="container">
      <Sidebar 
      reminders={reminders}
      categories={categories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      onAddCategory={() => setIsCategoryModalOpen(true)}
      />

      <Dashboard />

      {isCategoryModalOpen && 
        <CategoryModal 
        onClose={() => setIsCategoryModalOpen(false)}
        />
      }
    </div>
  )
};

export default App;