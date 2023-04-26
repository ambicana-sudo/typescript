import React, { useState } from 'react';
import './App.css';
import InputField from './component/inputField';
import { Todo } from './model';
import TodoList from './component/todoList';
import Users from './pages/users/users';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }
  return (
    <div className="App">
      <h2>Todo List</h2>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos}/>
      <Users/>
    </div>
  )
}

export default App;
