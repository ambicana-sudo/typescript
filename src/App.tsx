import React, { useState } from 'react';
import './App.css';
import InputField from './component/todoList/addTask';
// import { Todo } from './model';
import TodoList from './component/todoList/taskList';
import Users from './pages/users/users';

interface Todo {
  id:number;
  todo:string;
  isDone:boolean;
}

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
