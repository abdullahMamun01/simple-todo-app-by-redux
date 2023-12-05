import React, { useRef, useState } from 'react'
import plusImage from '../assets/plus.png'

import Todo from './Todo'
import TodoList from './TodoList'
import { addToDoData } from '../redux/thunk/addToDoData'
import { useDispatch } from 'react-redux'
export default function Card() {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submited...')
        dispatch(addToDoData(todo))
        setTodo(" ")
    }
    return (
        <div className='min-w-full min-h-screen flex justify-center items-center '>
            <div className='w-full max-w-3xl bg-white shadow-md rounded-lg p-5'>
                <form onSubmit={handleSubmit} className='grid grid-cols-12  px-4 py-2 rounded-[4px] bg-gray-300'>
                    <input  onChange={(e) => setTodo(e.target.value)} value={todo} className="w-full col-span-11 rounded-md outline-none p-3 bg-gray-300 py-[5px] " type="text" placeholder='Type your tod' />
                    <button type='submit' className={`col-span-auto w-8 h-8 ml-6  rounded-full border-2 border-gray-700 bg-[url('${plusImage}')]`}>
                        +
                    </button>

                </form>
                <hr className='mt-4' />
                <TodoList/>
                


            </div>
        </div >

    )
}
