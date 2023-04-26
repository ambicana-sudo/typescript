import React from 'react'
import { Todo } from '../../model';
import Item from './singleTaskItem';

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  const deleteTodo = (value: number)=>{
    const newList = todos.filter((item)=>{
      return item.id !== value
    })
    setTodos(newList)
  }

  const editTodo = (value: number)=>{

  }

  return (
    <div className='task-list'>
        <ul>
          {todos.length > 0 && todos.map((task) => {
            console.log(task)
            return (
              <Item task={task} deleteTodo={deleteTodo} editTodo={editTodo}/>
            )
          })}
        </ul>
      </div>
  )
}

export default TodoList