import CoverImage from '@/components/feature/Coaching-Profile/cover-img'
import ProfileImage from '@/components/feature/Coaching-Profile/profile-img'
import React from 'react'

function TopImagees() {
  return (
    <section className="relative">
        <CoverImage image="/public/cover-image.jpg" />

        {/* Profile Image (overlay) */}
        <div className="absolute -bottom-12 left-6">
          <ProfileImage image="/riad.png" />
        </div>
      </section>
  )
}

export default TopImagees
