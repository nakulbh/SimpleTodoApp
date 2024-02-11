import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";

function App() {
  const [todos, setTodo] = useState([]);

  return (
    <div>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
