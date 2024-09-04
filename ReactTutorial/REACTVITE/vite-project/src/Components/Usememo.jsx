import React from 'react'
import { useState,useMemo } from 'react'
const Usememo = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
    const handleClick = () => {
        setNumbers([...numbers, numbers.length + 1]);
    }
    
    const sum = useMemo(()=>{
        return numbers.reduce((accu,num)=>accu+num,0)
    },[numbers])
    return (
        <div>
            <p>{sum}</p>
            <div className='flex gap-2'>
                {numbers?.map((el) => (
                    <div>{el}</div>
                ))}
            </div>
            <button className='btn' onClick={handleClick}>Add</button>
        </div>
    )
}

export default Usememo