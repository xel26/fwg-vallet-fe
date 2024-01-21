import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CardEnterPin = ({cardEnterPinShow, submit}) => {

   return (
     <div
       className={`${
         cardEnterPinShow ? "block" : "hidden"
       } absolute bg-[#00000099] left-0 top-0 h-full w-full z-40 flex justify-center items-center`}
     >
       <div className="bg-white h-fit w-60 sm:w-1/3 rounded-xl">
         <div className="flex flex-col items-center gap-8 p-4 sm:gap-14">
           <div className='flex flex-col w-full gap-1'>
             <div className="flex justify-start w-full">
               <p className="text-xs sm:text-sm text-[#4F5665] font-semibold">
                 TRANSFER TO GHALUH 1
               </p>
             </div>
             <hr className="w-full" />
           </div>

           <div className="flex flex-col w-full gap-1">
             <p className="text-sm font-semibold sm:text-xl">Enter Your Pin 👋</p>
             <p className="text-[#4F5665] text-xs sm:text-sm">
               Enter Your Pin For Transaction
             </p>
           </div>

           <form onSubmit={submit} className="flex flex-col items-center w-full gap-8">
             <div className="flex w-full gap-4">

               <input maxLength='6' minLength='6' type="text" id='pin' name='pin' className='w-full text-5xl' />
             </div>

             <div className="flex flex-col items-center w-full gap-1">
               <button
                 type="submit"
                 className="p-1 text-xs sm:text-base text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500"
               >
                 Next
               </button>
               <div className="flex pb-4">
                 <p className="text-[#4F5665] text-xs sm:text-sm">Forgot your pin ?</p>
                 <Link to="/forgot-pin" className="text-[#764abc] text-xs sm:text-sm">
                   Reset
                 </Link>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
}

export default CardEnterPin