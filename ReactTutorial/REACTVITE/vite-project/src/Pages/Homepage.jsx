import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

  const navigate = useNavigate();
  const handleClick = ()=>{
    // navigate('/Services');
    navigate(-1);
  }
  return (
    <div>
      Homepage <br/>
      <button onClick={handleClick} className='bg-blue-500 py-2 px-6 rounded-md m-2'>
          Back
      </button>
    </div>
  )
}

export default Homepage