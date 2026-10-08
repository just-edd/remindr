import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="w-1/3">
        <Sidebar />
      </div>

      <main className="flex-1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti labore sapiente sequi laudantium harum quam enim nihil dolore odit, fuga eveniet reiciendis ipsum reprehenderit optio, nesciunt voluptas officiis. Excepturi, ipsam.</p>
      </main>
    </div>
  )
};

export default App;