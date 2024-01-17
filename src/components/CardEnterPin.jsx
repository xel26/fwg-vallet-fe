import { useState } from 'react'
import { Link } from 'react-router-dom'

const CardEnterPin = ({cardEnterPinShow}) => {
  cardEnterPinShow = false

    const pins = [1, 2, 3, 4, 5, 6]

   return (
     <div
       className={`${
         cardEnterPinShow ? "block" : "hidden"
       } absolute bg-[#00000099] left-0 top-0 h-full w-full z-40 flex justify-center items-center`}
     >
       <div className="h-fit w-60 sm:w-1/3 bg-white rounded-xl">
         <div className="p-4 flex flex-col items-center gap-8 sm:gap-14">
           <div className='w-full flex flex-col gap-1'>
             <div className="flex justify-start w-full">
               <p className="text-xs sm:text-sm text-[#4F5665] font-semibold">
                 TRANSFER TO GHALUH 1
               </p>
             </div>
             <hr className="w-full" />
           </div>

           <div className="flex flex-col w-full gap-1">
             <p className="font-semibold text-sm sm:text-xl">Enter Your Pin 👋</p>
             <p className="text-[#4F5665] text-xs sm:text-sm">
               Enter Your Pin For Transaction
             </p>
           </div>

           <form className="flex flex-col items-center w-full gap-8">
             <div className="flex gap-4 w-full">
               {pins.map((item) => (
                 <input
                   key={item}
                   type="text"
                   name="pin"
                   maxLength="1"
                   className={`outline-none flex flex-1 w-4 border-b border-[#E8E8E8] bg-transparent text-center`}
                 />
               ))}
             </div>

             <div className="flex flex-col items-center gap-1 w-full">
               <button
                 type="submit"
                 className="p-1 text-xs sm:text-base text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500"
               >
                 Next
               </button>
               <div className="flex pb-4">
                 <p className="text-[#4F5665] text-xs sm:text-sm">Forgot your pin ?</p>
                 <Link to="/profile/change-pin" className="text-[#764abc] text-xs sm:text-sm">
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