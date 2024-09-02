import React from 'react'

const ProfileCard = (props) => {
  return (
    <div style={{boxSizing:"border-box",padding:"",width:"250px", border:'2px solid black',borderRadius:'5px' }}>
        <h2>Profile</h2>
        <h3>Name : {props.name}</h3>
        <h3>Age : {props.age}</h3>
        <h3>Location : {props.location}</h3>
    </div>
  )
}

export default ProfileCard