import { Link } from 'react-router-dom'

import imgSuccess from '../assets/media/transfer-success.png'
import imgFailed from '../assets/media/transfer-failed.png'

const CardStatus = ({show, status, setShow, header, transaction, text}) => {

    return (
        <div className={`${show ? 'block' : 'hidden'} fixed bg-[#00000099] left-0 top-0 h-full w-full z-50 flex justify-center items-center`}>
        <div className='bg-white h-fit w-60 sm:w-1/3 rounded-xl'>
            <div className='flex flex-col items-center gap-2 p-4 sm:gap-2'>
              <div className='flex justify-start w-full'>
                <p className='text-xs text-[#4F5665] font-semibold'>{header}</p>
              </div>
                <hr className='w-full'/>
    
                <div className='flex justify-center'>
                  <img src={status ? imgSuccess : imgFailed} className='object-cover w-40 h-40'/>
                </div>

                <p className='text-sm font-bold sm:text-base'>{status ? `Yeay ${transaction}` : `Opps ${transaction}`} <span className={status ? 'text-[#1EC15F]' : 'text-[#D00000]'}>{status ? 'Succes' : 'Failed'}</span></p>

                {text ? (
                  <p>{text}</p>
                ) : (
                  <>
                    <p className='text-[#4F5665] text-xs text-center'>{status ? 
                    'Thank you for using this application for your financial' 
                    : `Sorry Theres is an issue for your ${transaction}, try again later !`}
                    </p>
                  </>
                )}
                  
                {status ? (
                  <Link to='/dashboard' className='p-1 text-xs sm:text-sm text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>Done</Link>
                ):
                <button onClick={() => setShow(false)} className='p-1 text-xs sm:text-sm text-white bg-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500'>Try Again</button>
                }
                <Link to={status ? `/${transaction}` : '/dashboard'} className='p-1 text-xs sm:text-sm w-full border text-[#764abc] border-[#764abc] flex justify-center items-center rounded active:scale-95 transition-all duration-500'>{status ? `${transaction} Again` : 'Back To Dashboard'}</Link>
            </div>
        </div>
    </div>
    )
}

export default CardStatus