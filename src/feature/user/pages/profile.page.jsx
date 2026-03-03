import React from 'react'

function Profile() {
  return (
    <section className='w-2/3 mx-auto'>
      {/* cover-image  */}
      <section>
        <img src="/public/cover-image.jpg" alt="coverImage" className='w-full object-full rounded-md h-55' />
      </section>
      {/* profile & info  */}
      <section className='grid md:grid-cols-2 lg:grid-cols-3'>
        <div>
          <img src='/public/riad.png' alt="profile" className='rounded-full object-cover w-40 h-40 ring mt-4' />
          <h4 className='text-sm my-2'>Bio..</h4>
        </div>
        <div className='space-y-2 mt-4'>
          <p><b>Name: </b> Mahedi Hasan Riad</p>
          <p><b>Email: </b>riad@gmail.com</p>
          <p><b>Mobile: </b>01518949131</p>
          <p><b>Education: </b>Class 12</p>
          <p><b>Subject of Interest: </b>English, Math, ICT</p>
        </div>
      </section>
    </section>
  )
}

export default Profile
