import { ADD_TO_DO, LOADED_TODOS, REMOVE_FROM_TODO, TOGGLE_CHECKBOX, TOGGLE_SELECTED } from "./actionType"
import uId from 'uniqid'



const initialState = []
// const toggleSelectColor = (id,color) =>{
//     return {

//         [color] : !colorFlags[color],
//         isSelected : ![]
//     }
// }

const toggleSelected = (isSelected ) =>{

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED_TODOS : {
            return action.payload
        }
        case ADD_TO_DO:
            return {
                ...state ,
                tasks : [...state.tasks, action.payload]
            }
        case REMOVE_FROM_TODO:
            return state.filter(todo => todo.id != action.payload)
        case TOGGLE_SELECTED : {
            return state.map((todo) =>( todo.id === action.payload.id ) ?
             ({
                ...todo , 
                color :  action.payload.color ,
                isSelected : action.payload.color === todo.color  ?  !todo.isSelected  : true,
            })  : todo)
        }
        case TOGGLE_CHECKBOX : {
            return state.map(todo => todo.id === action.payload ? ({
                ...todo ,
                completed : !todo.completed
            }) : todo)
        }
        default: return state
    }
}


export default reducer