import React from 'react'

function Bloglayout({children}) {
  return (
    <div>
        <h1>this is blog layout</h1>
      {children}
    </div>
  )
}

export default Bloglayout

// npx create-next-app@latest .