import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header/index";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddNewTask = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: 1,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <Header />
      <AddTask handleAddNewTask={handleAddNewTask} />
    </div>
  );
}

export default App;
