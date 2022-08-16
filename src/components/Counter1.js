import React from 'react'
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';



const Counter1 = ({count,increment,decrement}) => {
  return (
    <div className=" p-10 bg-gray-100 text-slate-700 ">
       
    <h1 className="max-w-md mx-auto text-center text-2xl font-bold pb-10">
        Simple Counter Application using old class method
    </h1>
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
    <div className="text-2xl font-semibold">{count}</div>
    <div className="flex space-x-3">
        <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={increment}
        >
            Increment
        </button>
        <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={decrement}
        >
            Decrement
        </button>
    </div>
</div>
</div>
  )
}
const mapStateToProps = (state)=>{
    return{
        count: state.counter.value,
    }

}


const mapDispatchToProps = (dispatch)=>{
    return{
        increment:(value)=>dispatch(increment(value)),
        decrement:(value)=>dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);


