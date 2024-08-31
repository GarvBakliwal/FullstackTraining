import React from 'react'
import { useState } from 'react'


const Conditional = () => {

    const [isLogin,setIsLogin] = useState(true);
  return (
    <div>
        <p>{isLogin?'Welcome User ':'Please Login'}</p>
        <button onClick={()=>(setIsLogin(!isLogin))} className='bg-blue-500 py-2 px-6 rounded-md m-2'>
            {isLogin?'Logout':'Login'}
        </button>
    </div>
  )
}

export default Conditional

// PROP DRILLING