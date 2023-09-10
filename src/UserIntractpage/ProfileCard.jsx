import React from 'react'
import { useUserAuth } from '../context/UserAuthCountext'

const ProfileCard = () => {

 const  {IsOpen,user,logout,setIsOpen} = useUserAuth();
console.log(IsOpen);
  

async function signOut() {
 try {
  await  logout()
 } catch (error) {
   console.log(error.massage);
 }
   setIsOpen(!IsOpen)
}

  return (
   <>
  
 
    <div className={`${IsOpen? "  ":"hidden"} Card w-1/4 m-auto top-20 fixed right-5 bg-slate-200 h-96 mb-8 border rounded-[50px]" `} >
      <div className="wapper h-[100%] relative">
        <div className="wapper m-6 p-4 text-center ">
          <p className='text-center p-3'>{user  && user.email}</p>
          <div className="img ">
          <img className='m-auto   w-14 h-14 rounded-full' src="/brand logo.jpg" alt="" />
          </div>
          <p className='py-2'>{user && user.name}</p>
        </div>
          <button onClick={signOut} className='py-2  w-full absolute bottom-10  bg-blue-600 border rounded-[10px]  '>Logout</button>
      </div>
      </div>
     </>
  )
}

export default ProfileCard