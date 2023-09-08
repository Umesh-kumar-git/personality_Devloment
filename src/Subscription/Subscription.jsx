import React,{useState} from 'react'
import SubsCard from './SubscriptionCard';

const Subscription = () => {
  
  const discount ={
    yearly:20,
    monthly:0,
  }
const [discountPrice,setdiscountPrice] =useState(null);
 const [toggle,settoggle] =useState(false);
 



 function toggleyear() {
  settoggle(true);
  setdiscountPrice(discount.yearly)
  
 }

  function togglemonth () {
    settoggle(false)
    setdiscountPrice(null)
  }

  return (
    <div className=' bg-slate'>
      <div className="Subsciption mt-5  w-9/12 text-center m-auto mb-6">
     <h2 className=' text-5xl py-24 font-bold text-center '>"Join Our Community of Self-Improvers!"</h2>
   <div className="switch-button w-[20rem]  m-auto">
    <div className= "button w-full p-1 h-12 bg-slate-300 rounded-full text-center relative cursor-pointer">
      <div className={`${toggle ? "translate-x-[9.5rem] drop-shadow-xl ":" translate-x-0 "} top-1 rounded-full leading-10 h-5/6 bg-white w-1/2 transition duration-700 absolute `} ></div>
      <div className="text flex justify-evenly  ">
      <span onClick={togglemonth} className='   w-[40%] month-pack font-medium p-2 z-50'>Month { discount.monthly >0 ?  <span className='discount text-green-400'>{discount.monthly}%</span>: '' }</span>
      <span onClick={toggleyear} className="year-pack  font-medium p-2    w-[40%] z-50  ">Yearly { discount.yearly >0 ?  <span className='discount text-green-400'>{discount.yearly}%</span>: '' } </span>
    </div>
    </div>
   </div>
      </div>
      <div className="cards flex justify-center">
      <SubsCard discountPrice={discountPrice} />

      </div>
      </div>
  )
}

export default Subscription