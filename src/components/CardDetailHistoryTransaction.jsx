import { FiTrash2 } from 'react-icons/fi'

import userPhoto from '../assets/media/user.jpg'

const CardDetailHistoryTransaction = ({cardShow, handleCard}) => {

      return (
          <div className={`${cardShow ? 'block' : 'hidden'} sm:hidden absolute bg-[#00000099] left-0 top-0 h-full w-full z-40 flex justify-center items-center`}>
          <div className='h-fit w-60 bg-white rounded-xl'>
              <div className='p-4 flex flex-col items-center gap-2 sm:gap-2'>
                <div className='flex justify-start w-full'>
                  <p className='text-xs text-[#4F5665] font-semibold'>DETAIL TRANSACTION GHALUH 1</p>
                </div>
                  <hr className='w-full'/>
      
                  <div className='w-full'>
                    <img
                      src={userPhoto}
                      className="rounded h-16 w-16 object-cover"
                    />
                  </div>

                  <div className='flex flex-col w-full gap-2'>
                  <div className='flex flex-col'>
                    <p className='font-bold text-sm'>Name:</p>
                    <p className='text-[#4F5665] text-sm'>Ghaluh Wizard</p>
                  </div>

                  <div className='flex flex-col'>
                    <p className='font-bold text-sm'>Phone:</p>
                    <p className='text-[#4F5665] text-sm'>08475935739</p>
                  </div>

                  <div className='flex flex-col'>
                    <p className='font-bold text-sm'>Status:</p>
                    <p className='text-[#4F5665] text-sm'>Transfer Success</p>
                  </div>

                  <div className='flex flex-col'>
                    <p className='font-bold text-sm'>Amount:</p>
                    <p className='text-[#D00] text-sm'>Rp.50.000</p>
                  </div>
                  </div>
      
                  <button className='p-1 text-xs sm:text-sm text-[#D00] border border-[#D00]  flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>
                    <FiTrash2/>
                  </button>
                  <button onClick={() => handleCard(false)} className='p-1 text-xs text-white sm:text-sm w-full  text-White bg-[#764abc] flex justify-center items-center rounded active:scale-95 transition-all duration-500'>Back</button>
              </div>
          </div>
      </div>
      )
  }

  export default CardDetailHistoryTransaction