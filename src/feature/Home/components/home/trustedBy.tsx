import TrustedField from '@/shared/utils/trustedField'

function TrustedBy() {
  return (
    <section className="w-full py-16 bg-gray-50/50">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-3xl md:text-5xl text-primary-0 font-bold mb-12 text-center">
      Trusted By
    </h1>
    
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border border-gray-200 rounded-md">
      {/* Tutor Count */}
      <TrustedField name={'Tutor'} value={'1500'} />
      <TrustedField name={'Coaching Centers'} value={'1,500'} />
      <TrustedField name={'Students & Guardians'} value={'10,500'} />

    </section>
  </div>
</section>
  )
}

export default TrustedBy
