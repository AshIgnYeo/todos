import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import Navbar from "./components/navbar/Navbar";
import Container from "./components/shared/Container";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      {
        id: 1,
        title: "Walk the dog",
        status: "doing",
      },
      {
        id: 2,
        title: "Drink some beer",
        status: "pending",
      },
    ]);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Container>
        <Home tasks={tasks} setTasks={setTasks} />
      </Container>
    </div>
  );
}

export default App;
