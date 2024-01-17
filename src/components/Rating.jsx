import { FaStar } from "react-icons/fa";

const Rating = ({rating, color}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(i);
    }

    return (
        <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex gap-1 sm:gap-2">
                {stars.map((index) => (
                index <= parseInt(rating)
                ? <FaStar key={index} color="orange" className="text-xs sm:text-base"/>
                : <FaStar key={index} color="#a7a9ad" className="text-xs sm:text-base"/>
                ))}
            </div>
            <p className={`text-xs sm:text-base text-white`} id="rating-number">
                {rating}.0
            </p>
        </div>
    )
}

export default Rating