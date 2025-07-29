import React from 'react'

function Events() {
  return (
  <div className= 'max-w-[1600px] mx-auto bg-[#19191d] rounded-2xl  mt-10 p-2 sm:p-3 md:p-5 lg:p-10'>
    <h1 className='text-orange-300 mt-5  round text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 lg:mb-5 text-center'>
        Events & Shows
      </h1>
      <div className='w-full bg-[#b88f557d] p-[0.5px]'></div>
       <div className='mt-10 lg:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className=''>
         <img
            src="award.jpg"
            alt="User"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
         <img
            src="award1.jpg"
            alt="User"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
           <img
            src="award3.jpg"
            alt="User"
         className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
       
    </div>
  </div>
  )
}

export default Events