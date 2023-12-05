import axios from "axios"
import { toggleSelectedColor } from "../todo/action"


export const toggleColorSelect = (id, color) => {
    return async (dispatch,getState) => {
        dispatch(toggleSelectedColor(id,color))
        try {
            const state = getState().todos
            const todo  = state.find(todo => todo.id === id)
            await axios.patch("http://localhost:3000/todos/" + id, {
                color: todo.color,
                isSelected : todo.isSelected
            })
    
            
        } catch (e) {
            console.log(e.message)
        }
    }

}


