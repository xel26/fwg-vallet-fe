import { useEffect } from "react"

const Pin = ({name="pin"}) => {
    const pin = [1, 2, 3, 4, 5, 6]

    const pinFocus = (e) => {
        if(e.target.value){
            if(isNaN(e.target.value)){
                e.target.value = ''
                return
            }
            
            e.target.classList.remove('border-[#E8E8E8]')
            e.target.classList.add('border-[#764abc]')
            e.target.nextSibling?.focus()
        }else{
            e.target.classList.remove('border-[#764abc]')
            e.target.classList.add('border-[#E8E8E8]')
            e.target.previousSibling?.focus()
        }
    }

    useEffect(() => {
        document.getElementById('0').focus()
    }, [])

    return (
        <div className="relative flex flex-col items-center">
            <div className="flex justify-between gap-2 sm:gap-4 mb-8 mt-4 sm:mb-10 w-full max-w-[34rem]">
                {pin.map((_, index) => {
                    return (
                        <input key={index} onChange={pinFocus} required type="text" name={name} id={index} className="text-3xl sm:text-5xl text-center outline-none border-b-2 border-[#E8E8E8] bg-transparent w-full" maxLength={1} minLength={1}/>
                )})}
            </div>
        </div>
    )
}

export default Pin