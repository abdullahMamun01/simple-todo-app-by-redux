import React, { useState } from 'react'
import ColorList from './ColorList'
import { useDispatch } from 'react-redux'
import { updateCheckboxStatus } from '../redux/thunk/updateCheckboxStatus'

export default function Todo({todo : {id,text ,completed,color,colors,isSelected}}) {
    const dispatch = useDispatch()

    return (
        <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-1'>
                <input onClick={() => dispatch(updateCheckboxStatus(id))} className={`w-5 h-5 absolute border-2 ${completed ? 'border-green-700' : 'border-gray-400'} rounded-full appearance-none`} type="checkbox" name="" id="" />
                {
                    completed && <svg
                        className="fill-current animation relative top-[15%] left-[7%]  w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                }
            </div>

            <div className='col-span-9'>
                <span className={`${completed && 'line-through text-gray-600'}`}>{text}</span>
            </div>
            <div className='col-span-2'>
                <ColorList  id={id} colors={colors} isSelected={isSelected} selectedColor={color}  />
            </div>
        </div>
    )
}
