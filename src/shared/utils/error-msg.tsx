import React from 'react'

interface textType {
  text: string;
}

function ErrorMsg({text}: textType) {
  return (
    <div>
      <span className='text-red-400 text-sm'>{text}</span>
    </div>
  )
}

export default ErrorMsg
