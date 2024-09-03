import React from 'react'

const StatusMessage = (props) => {
  return (
    <div>
      <h3>{props.status?'Operation was Succesful':'There was an Error'}</h3>
    </div>
  )
}

export default StatusMessage