// import

const Button = ({value}) => {
    return (
        <button type="submit" className='w-full p-2 flex justify-center bg-[#764abc] rounded text-white text-xs sm:text-sm active:scale-95 transition-all duration-500'>{value}</button>
    )
}

export default Button