// import
import Rating from './Rating'
import Profile from "../assets/media/profile.png"

const Testimoni = ({ image, name ,rating, review })=>{
    return(
        <>
            <div className="flex flex-col items-center mt-10 text-white gap-[19px] bg-[#764abc] rounded-2xl p-14 lg:w-[707px]">
                <div className='object-cover rounded-full '>
                <img src={image == null ? Profile : image} alt="profile-img"/>
                </div>
                    <p className="font-bold text-lg">{name}</p>
                    <div className="flex gap-[15px]">
                        {rating && <Rating rating={rating}/>}
                    </div>
                        <p className="font-bold text-5xl">“</p>
                        <p className="font-normal text-base text-center">{review}</p>
                </div>
        </>
    )
}
export default Testimoni