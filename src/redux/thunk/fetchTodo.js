import axios from "axios"
import { loadedToDos } from "../todo/action"

export const fetchTodo = async (dispatch) =>{
    const response = await axios.get("http://localhost:3000/todos")
    const toDos = response.data

    dispatch(loadedToDos(toDos))
}