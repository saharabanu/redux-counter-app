import { DECREMENT, INCREMENT } from "./actionTypes"

const initialState= {
    value:0
}

export const dynamicCounterReducer=(state=initialState, action)=>{
  switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            value:state.value + action.payload
        }
    case DECREMENT:
        if(state.value <= 0){
            return {value:0}
        }
        else{
            return{
                ...state,
                value:state.value - action.payload
            }
        }
        
       
  
    default:
        return state
  }
}

