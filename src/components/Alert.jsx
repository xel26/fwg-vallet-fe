import { FaCheckCircle, FaTimesCircle, FaCircleNotch } from "react-icons/fa"

const Alert = ({loading, successMessage, errMessage}) => {
    return (
    <div className={`${loading || successMessage || errMessage ? 'block' : 'hidden'} fixed flex justify-center left-0 top-0 h-full w-full bg-[#00000050] py-16 z-50`}>
        <FaCircleNotch className={`${loading ? 'block' : 'hidden'} text-white text-4xl sm:text-6xl animate-spin`}/>

        <div className={`${successMessage ? 'block' : 'hidden'} max-w-[16rem] sm:max-w-[25rem] flex justify-center items-center h-fit gap-2 bg-white shadow rounded-md p-3`}>
            <div>
                <FaCheckCircle className="text-[#764abc] sm:text-xl"/>
            </div>
            <p className="text-[#764abc] text-sm sm:text-base">{successMessage}</p>
        </div>

        <div className={`${errMessage ? 'block' : 'hidden'} max-w-[20rem] sm:max-w-[25rem] flex justify-center items-center h-fit gap-2 bg-white shadow rounded-md p-3`}>
            <div>
                <FaTimesCircle className="text-red-700 text-xs sm:text-xl"/>
            </div>
            <p className="text-red-700 text-sm sm:text-base">{errMessage}</p>
        </div>
    </div>
    )
}


export const  ConfirmCard = ({confirmCard, deletePicture, setConfirmCard}) => {
    return (
        <div className={`${confirmCard ? 'block' : 'hidden'} fixed w-full h-full left-0 top-0 bg-[#00000099] flex justify-center items-center z-50`}>
        <div className='bg-white h-fit w-fit rounded-xl p-4 flex flex-col gap-4'>
            <p className="text-black font-semibold text-xs sm:text-base">Are You Sure Want To Delete your Picture ?</p>
            <div className="flex w-full gap-4">
            <button onClick={deletePicture} className="flex-1 text-xs sm:text-sm text-[#D00000] border border-[#D00000] rounded flex items-center justify-center gap-1 sm:gap-3 p-1 active:scale-95  transition-all duration-500">Delete</button>
            <button onClick={() => setConfirmCard()} className="flex-1 text-xs sm:text-sm text-white bg-[#764abc] rounded flex items-center justify-center gap-1 sm:gap-3 p-1 active:scale-95 transition-all duration-500">Cancel</button>
            </div>
        </div>
    </div>
    )
}


export default Alert