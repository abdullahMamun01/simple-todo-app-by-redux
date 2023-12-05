import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSelectedColor } from '../redux/todo/action';
import { toggleColorSelect } from '../redux/thunk/toggleSelected';

export default function ColorList({ id, selectedColor, colors, isSelected }) {
  const setBgColor = (color) =>{
    switch (color) {
      case 'green':
        return 'bg-green-800'
      case 'yellow' : return 'bg-yellow-800'

      case 'red' : return 'bg-red-800'
      default : return 
    }
  }
  const dispatch = useDispatch()
  return (
    <ul className='flex justify-between list-none'>
      {colors.map((clr, i) => (
        <li
        onClick={() => dispatch(toggleColorSelect(id ,clr))}
        key={i}
         
          className={`w-4 h-4 border-2 ${clr === 'green' && 'border-green-800' || clr === 'red' && 'border-red-800' || clr === 'yellow' && 'border-yellow-800'}
           cursor-pointer rounded-full ${isSelected && selectedColor === clr && setBgColor(selectedColor)}`}
          aria-label={`${clr} color`}
        ></li>
      ))}
    </ul>
  );
}
