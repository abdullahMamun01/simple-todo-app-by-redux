import React, { useEffect } from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../redux/thunk/fetchTodo'

export default function TodoList() {
    const todoState = useSelector((state) =>  state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchTodo)
    },[])

  return (
    <div>
        {
           todoState.map((todo,i) => (
            <Todo key={i} todo={todo}/>
          ))
          
        }
        
    </div>
  )
}
