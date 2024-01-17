// import
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi'
import Profile from "../assets/media/profile.png"

const Testimoni = ()=>{
    return(
        <>
            <div className='flex justify-between items-center gap-5'>
                <div className='hidden md:flex rounded-full w-12 h-12 bg-gray-400 justify-center items-center'>
                    <FiArrowLeft />
                </div>
                <div className="flex flex-col items-center mt-10 text-white gap-[19px] bg-[#764abc] rounded-2xl p-14 lg:w-[707px]">
                <div className='object-cover rounded-full '>
                <img src={Profile} alt="profile-img"/>
                </div>
                    <p className="font-bold text-lg">James Bond</p>
                    <div className="flex gap-[15px]">
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        
                        <p>5.0</p>
                    </div>
                        <p className="font-bold text-5xl">“</p>
                        <p className="font-normal text-base text-center">I&apos;ve been using the e-wallet for over two years now, and I&apos;m very satisfied with the ease of use. This has completely changed the way I shop and conduct financial transactions.</p>
                </div>
                <div className=' hidden md:flex rounded-full w-12 h-12 bg-[#764abc] justify-center items-center'>
                    <FiArrowRight />
                </div>
            </div>
        </>
    )
}
export default Testimoni