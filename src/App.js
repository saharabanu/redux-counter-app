import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Stats from "./components/Counter/Stats";
import Counter1 from "./components/Counter1";
import Home from "./components/Home/Home";
import { store } from "./redux/store";




const initialState= [
  {id:1,
  count:0},

  {id:2,
  count:0}

  
]
function App() {
const [state, setState]= useState(initialState);

  const totalCount =()=>{
    return state.reduce((total,counter)=>total + counter.count, 0)

  }


    const increment = (id)=>{
      const updatedCounter = state.map(count =>{
         if(count.id === id){
          return{
            ...count,
            count: count.count + 1
          }
         }
         return{
           ...count
         }
      })
      setState(updatedCounter)
        
    }
    const decrement = (id)=>{
      const updatedCounter = state.map(count =>{
        if(count.id === id){
         return{
           ...count,
           count: count.count - 1
         }
        }
        return{
          ...count
        }
     })
     setState(updatedCounter)
       
    }
  return (
    <>
{/* state manage counter   */}
      {/* <div className=" p-10 bg-gray-100 text-slate-700 ">
       
    <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
    </h1>  

  
   {state.map((count)=>(
    <Counter key={count.id}
    id={count.id} 
    count={count.count}
    increment={increment} 
    decrement={decrement}/>
   ))}
  
   <Stats count={totalCount()}/>
    </div>  */}




    <Provider store={store}>

    <BrowserRouter>
    <Routes>
    
   
     

        <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        </Provider>
    
        </>
  );
}

export default App;
