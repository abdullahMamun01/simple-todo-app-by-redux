import axios from "axios"
import { ADD_TO_DO } from "../todo/actionType"
import { addToDo } from "../todo/action"

export const addToDoData =  (text) => async (dispatch) =>{
    try{
        const response = await axios.post('http://localhost:3000/todos' , {
            text ,
            completed : false,
            colors : ["green" , "yellow" , "red"],
            isSelected : false
        })
   
        dispatch(addToDo(response.data))
    }catch(e){
        console.log(e.message)
    }
    
}

/* 
"text" : "React js basic" ,
        "completed" : false ,
        "color" : "green",
        "colors" : ["green" , "yellow" , "red"],
        "isSelected" : true


*/