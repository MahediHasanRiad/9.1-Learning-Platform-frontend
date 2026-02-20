import InfoItem from '@/components/feature/Teacher-Profile/info-item'
import React from 'react'

function Info() {
  return (
     <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Basic Info */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl font-semibold mt-2">
            RST Coaching Center
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Trusted coaching for academic excellence
          </p>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 p-5 space-y-3">
          <InfoItem name="Address" description="Uttora, Dhaka" />
          <InfoItem name="Contact" description="+8801518949131" />
          <InfoItem name="Website" description="https://rstcoaching.com" />
          <InfoItem name="Rating" description="4.5" />
        </div>
      </section>
  )
}

export default Info
