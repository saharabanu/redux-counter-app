import React from 'react'

const Button = ({children,handler}) => {
  return (
    <button onClick={handler}
                className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                id="increment"
            >
               {children}
            </button>
  )
}

export default Button