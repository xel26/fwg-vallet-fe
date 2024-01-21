import { Link } from 'react-router-dom'

import topUpSuccess from '../assets/media/transfer-success.png'
import topUpFailed from '../assets/media/transfer-failed.png'

const CardStatusTopUp = ({cardTopUpShow, statusTopUp, setCardTopUpShow}) => {

    return (
        <div className={`${cardTopUpShow ? 'block' : 'hidden'} absolute bg-[#00000099] left-0 top-0 h-full w-full z-40 flex justify-center items-center`}>
        <div className='bg-white h-fit w-60 sm:w-1/3 rounded-xl'>
            <div className='flex flex-col items-center gap-2 p-4 sm:gap-2'>
              <div className='flex justify-start w-full'>
                <p className='text-xs text-[#4F5665] font-semibold'>TOP UP</p>
              </div>
                <hr className='w-full'/>
    
                <div className='flex justify-center'>
                  <img src={statusTopUp ? topUpSuccess : topUpFailed} className='object-cover w-40 h-40'/>
                </div>
    
                <p className='text-sm font-bold sm:text-base'>{statusTopUp ? 'Yeay Top Up' : 'Opps Top Up'} <span className={statusTopUp ? 'text-[#1EC15F]' : 'text-[#D00000]'}>{statusTopUp ? 'Succes' : 'Failed'}</span></p>
                <p className='text-[#4F5665] text-xs text-center'>{statusTopUp ? 
                'Thank you for using this application for your financial' 
                : 'Sorry Theres is an issue for your top up, try again later !'}
                </p>
                  
                {statusTopUp ? (
                  <Link to='/dashboard' className='p-1 text-xs sm:text-sm text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>Done</Link>
                ):
                <button onClick={() => setCardTopUpShow(!cardTopUpShow)} className='p-1 text-xs sm:text-sm text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>Try Again</button>
                }

                {statusTopUp ? (
                    <button onClick={() => setCardTopUpShow(!cardTopUpShow)} className='p-1 text-xs sm:text-sm text-[#764abc] border border-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>Top Up Again</button>
                ):
                <Link to='/dashboard' className='p-1 text-xs sm:text-sm w-full border text-[#764abc] border-[#764abc] flex justify-center items-center rounded active:scale-95 transition-all duration-500'>Back To Dashboard</Link>
                }
            </div>
        </div>
    </div>
    )
}

export default CardStatusTopUp