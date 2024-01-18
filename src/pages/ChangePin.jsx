//import
import { FiUser } from "react-icons/fi"
import React from "react"
import Navbar from "../components/Navbar"
import Navigation from "../components/Navigation"
import ResponsiveNavigation from "../components/ResponsiveNavigation"

const ChangePin = () => {
    const pins = [1, 2, 3, 4, 5, 6]
    const [inputPinActive, setInputPinActive] = React.useState(false)
    return (
        <>
            <Navbar />
            <header className="flex pt-[56px]">
                <Navigation />
                <div className=" flex flex-1 pt-[66px]">
                    <div className="w-full flex md:px-[50px] flex-col gap-[20px] justify-center">
                        <form className="flex flex-col gap-[10px] md:border-2 p-[30px] w-full">
                            <span className="text-[#0B132A] text-[30px] font-bold">Change Pin 👋</span>
                            <span className="text-[#4F5665] text-[16px]">Please save your pin because this so important.</span>
                            <div className=" flex justify-center items-center gap-[30px] h-[200px]">
                                {pins.map((item) => (
                                    <input
                                        key={item}
                                        type="text"
                                        name="pin"
                                        maxLength="1"
                                        className={`outline-none flex flex-1 w-4 border-b ${inputPinActive ? 'border-[#764abc]' : 'border-[#E8E8E8]'}  bg-transparent text-center`}
                                    />
                                ))}
                            </div>
                            <div className="w-full"><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                            </div>
                        </form>
                        <ResponsiveNavigation />
                    </div>
                </div>
            </header>
        </>
    )
}

export default ChangePin;