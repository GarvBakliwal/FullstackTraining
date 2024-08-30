import React, { useState } from 'react'

const Form = () => {

    const [username, setUsername] = useState('');
    const handleUsernameChange = (event) => {
        /* console.log(event.target.value); */
        setUsername(event.target.value);
    }
    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        /* console.log(event.target.value); */
        setPassword(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        console.log(data);
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className='flex flex-col w-72 border-solid border-2 border-slate-950'>
                <input type="text" placeholder='Username' onChange={handleUsernameChange} className='border-solid border-2 border-blue-300 m-1'/>
                <input type="password" placeholder='Password' onChange={handlePasswordChange} className='border-solid border-2  border-blue-300 m-1'/>
                <button type="submit" className='bg-blue-500 py-2 px-6 rounded-md m-2'>Submit</button>
                <p>{username}</p>
                <p>{password}</p>
            </form>
        </div>
    )
}

export default Form