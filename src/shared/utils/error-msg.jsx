import React from 'react'

function ErrorMsg({text}) {
  return (
    <div>
      <span className='text-red-400 text-sm'>{text}</span>
    </div>
  )
}

export default ErrorMsg
