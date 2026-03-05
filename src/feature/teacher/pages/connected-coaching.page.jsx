import MainLayout from '@/layout/Main-Layout'
import React from 'react'
import ConnectedCenterCard from '../components/connected-coaching-card'

function ConnectedCoaching() {
  return (
    <MainLayout>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <ConnectedCenterCard coachingName={'RST Coaching Center'} role={'teacher'} img={'/public/cover-image.jpg'} />
      </section>
    </MainLayout>
  )
}

export default ConnectedCoaching
