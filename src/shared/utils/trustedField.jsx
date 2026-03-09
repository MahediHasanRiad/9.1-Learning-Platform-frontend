import React from 'react'

function TrustedField({name, value}) {
  return (
    <div className="p-6 rounded-2xl">
        <h2 className="text-lg font-medium text-gray-600 mb-2">{name}</h2>
        <p className="text-4xl md:text-4xl font-extrabold text-primary-0">{value}+</p>
      </div>
  )
}

export default TrustedField
