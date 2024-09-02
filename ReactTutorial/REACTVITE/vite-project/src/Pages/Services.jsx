import React from 'react'
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/');
    // navigate(-1);
  }
  return (
    <div>Services <br />
      <button onClick={handleClick} className='bg-blue-500 py-2 px-6 rounded-md m-2'>
          Back
      </button>
    </div>
  )
}

export default Services