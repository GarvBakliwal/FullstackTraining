import React from 'react'

function Bloglayout({children}) {
  return (
    <div>
        <h1><h1 className="bg-blue-300">Latest Blogs</h1></h1>
      {children}
    </div>
  )
}

export default Bloglayout

// npx create-next-app@latest .