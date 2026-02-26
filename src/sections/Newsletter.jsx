import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-10 px-5 md:px-20">
      <div className='bg-primary flex flex-col md:flex-row items-center justify-center p-6 rounded-lg gap-4'>
        <h1 className='text-white text-xl font-bold'>Get Our Best Deals Straight to Your Inbox!</h1>

        <div className='flex items-center justify-center'>
        <input type="text" placeholder='Enter You Email Address' className='rounded-lg w-full p-4 h-10'/>
        <button className='bg-secondary flex rounded-lg'>Sign Up</button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
