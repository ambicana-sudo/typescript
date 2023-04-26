import React, {useRef, useEffect} from 'react'

interface Props{
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  addTodo: (e: React.FormEvent )=>void
}

const InputField = ({todo, setTodo, addTodo}:Props) => {  
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus()
  }, [])
  return (
    <form className='task__form' onSubmit={addTodo}>
      <input placeholder="Enter New Task" ref={inputRef} value={todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default InputField