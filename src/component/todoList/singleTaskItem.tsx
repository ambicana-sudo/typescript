import React from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Todo } from '../../model';

interface Props{
  task: Todo;
  deleteTodo: (value: number )=>void;
  editTodo: (value: number )=>void;
}

const Item = ({task, deleteTodo}:Props)=>{
  console.log(task)
  return(
    <>
    <li key={task.id}>
        <span>{task.todo}</span>
        <div>
          <span className='icon'><BorderColorOutlinedIcon/> </span>
          <span className='icon' onClick={()=> deleteTodo(task.id)}><DeleteOutlineIcon/> </span>
          <span className='icon'><CheckCircleOutlineIcon/> </span>
        </div>
      </li>
    </>
  )
}
export default Item