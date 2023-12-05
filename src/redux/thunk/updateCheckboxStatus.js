import axios from "axios"
import { toggleCheckBox } from "../todo/action"


export const updateCheckboxStatus = (id) => {
    return async (dispatch,getState) => {
        dispatch(toggleCheckBox(id))
        const state  = getState().todos.find(todo => todo.id === id)

        try {
             await axios.patch("http://localhost:3000/todos/" + id, {
                completed: state.completed,
            })
        } catch (e) {
            console.log(e)
        }
    }
}