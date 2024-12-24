import React from 'react'

export default function Banner() {
  return (

   //   <div className="bg-black w-[1440px] flex gap-2 justify-center items-center text-sm text-white  font-light h-[48px]">
   //      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
   //   <span className='font-bold underline'>
   //    ShopNow
   //    </span>
   //   </div> 
   <div className="bg-black w-full flex flex-col md:flex-row gap-2 justify-center items-center text-sm text-white font-light h-auto md:h-[48px] px-4 py-2 md:py-0">
   <p className="text-center">
     Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
   </p>
   <span className="font-bold underline cursor-pointer">
     Shop Now
   </span>
 </div>
 
  )
}
