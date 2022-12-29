import "./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header/index";

function App() {
  return (
    <div className="app-container">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
