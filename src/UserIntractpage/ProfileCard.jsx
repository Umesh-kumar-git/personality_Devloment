import React from 'react'
import { useUserAuth } from '../context/UserAuthCountext'

const ProfileCard = () => {

 const  {IsOpen} = useUserAuth();
console.log(IsOpen);
  
//  let click=Toggle


  return (
   <>
  
 
    <div className={`${IsOpen? "  ":"hidden"} Card w-1/4 m-auto top-20 fixed right-5 bg-slate-200 h-96 mb-8  rounded-xl" `} >
        <div className="wapper m-6 p-4 text-center ">
          <p className='text-center p-3'>EmailId</p>
          <div className="img ">
          <img className='m-auto   w-14 h-14 rounded-full' src="/brand logo.jpg" alt="" />
          </div>
          <p className='py-2'>UserName !</p>
          <button className='py-2   bottom-4 bg-[#f3f6fa] border rounded-full '>Logout</button>
        </div>
      </div>
     </>
  )
}

export default ProfileCard