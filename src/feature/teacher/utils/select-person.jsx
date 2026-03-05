import React from 'react'

function SelectPerson({img, name}) {
  return (
    <div className='flex items-center space-x-2'>
      <img src={img} alt="" className='w-6 h-6 rounded-full object-cover border' />
      <span>{name}</span>
    </div>
  )
}

export default SelectPerson
