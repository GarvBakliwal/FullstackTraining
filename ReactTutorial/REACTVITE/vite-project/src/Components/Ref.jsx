import React, { useEffect, useRef } from 'react'

const Ref = () => {
    const inputRef = useRef(null);
    console.log(inputRef);
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input ref={inputRef} type="text" placeholder='Username' className='border-solid border-2 border-blue-300 m-1'/>
        <button className = 'bg-blue-500 py-2 px-6 rounded-md m-2'>Submit</button>
        </form>
    </div>
  )
}

export default Ref