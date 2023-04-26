import React, {useState} from 'react'
import InputField from '../../component/todoList/addTask';
import { Todo } from '../../component/todoList/todo';
import TodoList from '../../component/todoList/taskList';

const TodoTask = () => {
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
    </div>
  )
}

export default TodoTask