import React from 'react'

const Imagebox = () => {
  return (
    <>
    <div className="div  flex justify-center   ">
  <div className="  bg-[#f3f6fa] rounded-tl-[8rem] rou  w-3/4 flex mt-20 p-10   ">
 <div className='w-1/2 border-[#e5e7eb] '>
  <img  className=' w-3/4 h-96 m-auto ' src="brand logo.jpg" alt="loading..." />
  </div>
  <div className="dev w-1/2 text-center ">
    <h3 className='text-2xl mt-8 font-bold'> Why Personal Development Matters</h3>
  <p className='  text-gray-500 text-center leading-loose mt-10 py-2 px-3  '>Personal development is not just a buzzword; it's a lifelong commitment to self-improvement. It encompasses various aspects of your life, including self-confidence, communication skills, emotional intelligence, leadership abilities, and much more. By investing in your personal growth, you not only enhance your individual well-being but also improve your relationships, career prospects, and overall quality of life.</p>
  </div>
  </div>
  </div>
  </>
  )
}

export default Imagebox;
