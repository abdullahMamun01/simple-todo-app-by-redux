import { ADD_TO_DO, LOADED_TODOS, REMOVE_FROM_TODO, TOGGLE_CHECKBOX, TOGGLE_SELECTED } from "./actionType"

export const addToDo = (todo) =>{
    return {
        type : ADD_TO_DO ,
        payload : todo
    }
}

export const removeFromTodo = (id) =>{
    return {
        type : REMOVE_FROM_TODO ,
        payload : id
    }
}

export const toggleSelectedColor = (id,color) =>{
    return{
        type: TOGGLE_SELECTED ,
        payload: {id,color}
    }
}

export const loadedToDos = (toDos) =>{
    return {
        type : LOADED_TODOS ,
        payload : toDos
    }
}

export const toggleCheckBox = (id) =>{
    return {
        type : TOGGLE_CHECKBOX ,
        payload : id
    }
}