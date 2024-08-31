import React from "react";
/* import Button from "./Button.jsx" */
/* import { useState } from "react"; */
/* import List from "./Components/List"; */
/* import Form from "./Components/Form";
import { FaApple } from "react-icons/fa"; */
// import Render from "./Components/Render";
// import Conditional from './Components/Conditional'
import Header from "./Components/Header";
import { createContext } from "react";

function App() {

  /* const firstName = 'Garv Bakliwal';
  const style = {color:'red',backgroundColor:'blue'} */

  /* let [firstName, setFirstName] = useState('Garv'); */


  /* const handleClick = () => {
    // console.log('Button Is Clicked');
    setFirstName('Mahipal');
    console.log(firstName);
  } */
  console.log(createContext());
  return (
    <div >
      {/* 
      <Button text='Click'/>
      <Button text='Submit'/>
      <Button text='Apply'/>
      <Button text='Remove'/> 
      */}

      {/* <p><FaApple />{firstName}</p>

      <button onClick={handleClick} className = 'bg-blue-500 py-2 px-6 rounded-md m-2'>
        click
      </button> */}

      {/* <List/> */}

      {/* <h1
      style={style}
      >React</h1>
      <p>Hello {firstName}</p> */}
      {/* <input maxLength={5} /> */}
      {/*  <Form/> */}


      {/* <Render /> */}

      {/* <Conditional /> */}


      <Header />

    </div>
  )
}

export default App;

{/* ' flex flex-col items-center' */ }
// useState is used when you want to change or update data on the screen 