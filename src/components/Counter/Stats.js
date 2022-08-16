import React from 'react'

const Stats = ({count}) => {
  return (
    <div className=" max-w-md mx-auto mx-auto p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mt-5">
            <div className="text-2xl font-semibold">Total count: {count} </div>
        </div>
  )
}

export default Stats