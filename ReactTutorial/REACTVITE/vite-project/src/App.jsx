import React from "react";
import Button from "./Button.jsx"
function App() {

  const firstName = 'Garv Bakliwal';
  const style = {color:'red',backgroundColor:'blue'}
  return (
    <div>
      <Button text='Click'/>
      <Button text='Submit'/>
      <Button text='Apply'/>
      <Button text='Remove'/>
      <h1
      style={style}
      >React</h1>
      <p>Hello {firstName}</p>
      {/* <input maxLength={5} /> */}
    </div>
  )
}

export default App;

{/* ' flex flex-col items-center' */}