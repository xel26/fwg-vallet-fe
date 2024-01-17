import { Link } from 'react-router-dom'

import transferSuccess from '../assets/media/transfer-success.png'
import transferFailed from '../assets/media/transfer-failed.png'

const CardStatusTransfer = ({cardStatusShow, statusTransfer}) => {
  cardStatusShow = false
  statusTransfer= true

    return (
        <div className={`${cardStatusShow ? 'block' : 'hidden'} absolute bg-[#00000099] left-0 top-0 h-full w-full z-40 flex justify-center items-center`}>
        <div className='h-fit w-60 sm:w-1/3 bg-white rounded-xl'>
            <div className='p-4 flex flex-col items-center gap-2 sm:gap-2'>
              <div className='flex justify-start w-full'>
                <p className='text-xs text-[#4F5665] font-semibold'>TRANSFER TO GHALUH 1</p>
              </div>
                <hr className='w-full'/>
    
                <div className='flex justify-center'>
                  <img src={statusTransfer ? transferSuccess : transferFailed} className='object-cover w-40 h-40'/>
                </div>
    
                <p className='font-bold text-sm sm:text-base'>{statusTransfer ? 'Yeay Transfer' : 'Opps Transfer'} <span className={statusTransfer ? 'text-[#1EC15F]' : 'text-[#D00000]'}>{statusTransfer ? 'Succes' : 'Failed'}</span></p>
                <p className='text-[#4F5665] text-xs text-center'>{statusTransfer ? 
                'Thank you for using this application for your financial' 
                : 'Sorry Theres is an issue for your transfer, try again later !'}
                </p>
    
                <button className='p-1 text-xs sm:text-sm text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>{statusTransfer ? 'Done' : 'Try Again'}</button>
                <Link to={statusTransfer ? '/transfer' : '/dashboard'} className='p-1 text-xs sm:text-sm w-full border text-[#764abc] border-[#764abc] flex justify-center items-center rounded active:scale-95 transition-all duration-500'>{statusTransfer ? 'Transfer Again' : 'Back To Dashboard'}</Link>
            </div>
        </div>
    </div>
    )
}

export default CardStatusTransfer