// import
import Rating from './Rating'
import Profile from "../assets/media/profile.png"

const Testimoni = ({ image, name ,rating, review })=>{
    return(
        <>
            <div className="flex flex-col items-center mt-5 text-white gap-2 bg-[#764abc] rounded-2xl p-8 lg:w-[707px]">
                <div>
                <img src={image == null ? Profile : image} alt="profile-img" className='object-cover rounded-full h-16 w-16 sm:h-20 sm:w-20'/>
                </div>

                <p className="font-bold text-lg">{name}</p>

                <div className="flex gap-[15px]">
                    {rating && <Rating rating={rating}/>}
                </div>

                <div>
                    <p className="font-bold sm:text-5xl text-3xl ">“</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-center">{review}</p>
            </div>
        </>
    )
}
export default Testimoni