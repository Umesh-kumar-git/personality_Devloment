import React from 'react';
import {TiTick} from "react-icons/ti"

const card =[{
  cardheading:"Starter",
  Price:0,
  subHeading:"Explore the tool, save inspiration and create collections.",
  btn:"Join the Community",
  features:" Freatures Include:",
  ul:[{
    listOne:"explore how will work",
    listTwo:"Unlimited placeholder texts",
    listThree:"Consectetur adipiscing elit",
    listfour:"Excepteur sint occaecat cupidatat",
  }],
},
{
  cardheading:"Business",
  Price:35,
  subHeading:"Get unlimited access to our new mood boarding tool",
  btn:"Start free Trial",
  features:" All free freatures, plus:",
  ul:[
    {
    listOne:"explore how will work",
    listTwo:"Unlimited placeholder texts",
    listThree:"Consectetur adipiscing elit",
    listfour:"Excepteur sint occaecat cupidatat",
 } 
],
}
]

const SubsCard = ({discountPrice}) => {



  return (
    <>
    {card.map((items,i)=>{
      return( 
        <div key={i} className="card-wapper  bg-slate-900 m-5 w-96  text-white p-6 px-8 text-left rounded-lg  ">
        <div className="card-catogary flex justify-start  items-start  flex-col space-y-5">
          <div className="h3 text-2xl">{items.cardheading}</div>
          <div className="Cardscatogary-name text-4xl">{items.Price>0 ?   `$`+( items.Price - (discountPrice /100 * items.Price)) +"/m"  : "Free"}</div>
          <p className='subh
          eading text-zinc-400   '>{items.subHeading}</p>
          <div className="joinBtn bg-blue-800 w-5/6 py-2 px-3 m-auto text-center rounded-full cursor-pointer ">{items.btn}</div>
          <div className="features-box">
            <p className='featuresHeading  my-5 '>{items.features}</p>
            
              {
                items.ul.map(data=>(
                  <ul className=' mt-2 space-y-3 text-gray-400 ' key={i}>
                  <li>  <TiTick className=' text-green-700 inline'/>{data.listOne}</li>
                   <li><TiTick className=' text-green-700 inline'/>{data.listTwo}</li>
                   <li><TiTick className='  text-green-700 inline'/>{data.listThree}</li>
                   <li><TiTick className='  text-green-700 inline'/>{data.listfour}</li>
                  </ul>
                ))
              }
        
          </div>
        </div>
      </div>
      )
    })}
   
    </>

  )
}

export default SubsCard