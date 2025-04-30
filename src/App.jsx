import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = { id: Date.now(), text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="app">
      <Header />
      <div className="input-section">
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;