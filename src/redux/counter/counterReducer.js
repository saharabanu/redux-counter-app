import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState= {
    value:2
}

export const counterReducer =(state=initialState, action)=>{
  switch (action.type ) {
    case INCREMENT:
        if(state.value === 20){
return {value:20}
        }
        else{
            return{
                ...state,
                value:state.value + 1
            }
        }
        
    case DECREMENT:
        if(state.value <= 0){
            return {value:0}
        }
        else{
            return{
                ...state,
                value:state.value - 1
            }
        }
        
       
  
    default:
        return state
  }
}

// export default counterReducer;