import React from 'react'
import { Link } from 'react-router'

function ConnectedCenterCard({coachingName, role, img}) {
  return (
    <Link to={'/user/profile'} >
      <section className='w-full flex items-center justify-between p-4 border border-gray-400 rounded-md bg-transparent space-x-3'>
      <div>
        <h1 className='font-semibold'>{coachingName}</h1>
        <p className='text-sm'>Role: {role}</p>
      </div>
      <div>
        <img src={img} alt="" className='w-17 h-17 rounded-full border object-cover' />
      </div>
    </section>
    </Link>
  )
}

export default ConnectedCenterCard
