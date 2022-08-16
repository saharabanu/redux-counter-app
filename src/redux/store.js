import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";


// middle ware  
const myLogger = (store)=> (next) =>(action)=>{
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Before: ${JSON.stringify(store.getState())}`)

    // pass next 

    return next(action)

}

export const store = createStore(rootReducer,applyMiddleware(myLogger));


// export default store;