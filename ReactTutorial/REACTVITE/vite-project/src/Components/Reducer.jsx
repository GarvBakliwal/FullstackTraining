import React, { useReducer, useState } from 'react'

function Reducer() {

    const initialState = {
        count : 0
    }
    const reducer = (state,action) =>{
        console.log();
        
        if (action.type === 'INCREMENT') {
            return {count: state.count+1}
        } else if (action.type === 'DECREMENT') {
            return {count: state.count-1}
        }
        else if (action.type==='INCREMENTBY10'){
            return {count: state.count + action.payload}
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    // const [count,setCount] = useState(0);
    // const handleIncrement = ()=>{
    //     setCount(count+1)
    // }
    // const handleDecrement = ()=>{
    //     setCount(count-1)
    // }
    return (
        <div>
            <h1 className='text-center m-5 font-semibold text-3xl'>
                Use Reducer Hook
            </h1>
            <p className='font-semibold text-2xl mx-7'> count : {state.count}</p>
            <button /* onClick={handleIncrement} */ onClick={()=>dispatch({type:'INCREMENT'})} className="btn">Increment</button>
            <button /* onClick = {handleDecrement} */ onClick={()=>dispatch({type:'DECREMENT'})} className="btn">Decrement</button>
            <button onClick={()=>dispatch({type:'INCREMENTBY10',payload:10})} className="btn">Increment by 10</button>
        </div>
    )
}

export default Reducer

// Reducer Function => (state,action) => 
    // {
    // }

// Action => {
//     type:'',
//     payload:''
// }

// dispatch = {
// always accepts
// }
