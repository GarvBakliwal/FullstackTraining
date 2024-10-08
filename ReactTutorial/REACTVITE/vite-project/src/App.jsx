import React, { lazy , Suspense } from "react";
/* import Button from "./Button.jsx" */
/* import { useState } from "react"; */
/* import List from "./Components/List"; */
/* import Form from "./Components/Form";
import { FaApple } from "react-icons/fa"; */
// import Render from "./Components/Render";
// import Conditional from './Components/Conditional'
// import Header from "./Components/Header";
// import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
const Homepage = lazy(()=>import('./Pages/Homepage'));
// import Services from "./Pages/Services";
const Services = lazy(()=>import('./Pages/Services'));
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import Usememo from "./Components/Usememo";
// import Ref from "./Components/Ref";
// import Reducer from "./Components/Reducer";
const Reducer = lazy(()=>import('./Components/Reducer'));

function App() {

  /* const firstName = 'Garv Bakliwal';
  const style = {color:'red',backgroundColor:'blue'} */

  /* let [firstName, setFirstName] = useState('Garv'); */


  /* const handleClick = () => {
    // console.log('Button Is Clicked');
    setFirstName('Mahipal');
    console.log(firstName);
  } */
  // console.log(createContext());

  lazy

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


      {/* <Header /> */}
      {/* <Ref /> */}
      <Navbar />
      <Suspense fallback={<div>Loading</div>}>
      <Usememo/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Reducer" element={<Reducer />} />
      </Routes>
      </Suspense>

    </div>
  )
}

export default App;

{/* ' flex flex-col items-center' */ }
// useState is used when you want to change or update data on the screen 