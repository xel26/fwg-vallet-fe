//import
import React from "react"
import { Link } from "react-router-dom"
import { FiMail, FiUser } from "react-icons/fi"
import enterPinImage from "../assets/image/enter pin.png"
import logoAuth from "../assets/image/logo auth.png"
import logoGoogle from "../assets/image/google.svg"
import logoFacebook from "../assets/image/facebook.svg"

const ChangePin = () => {
    return (
        <>
            <nav className="h-[75px] bg-violet-400">k
            </nav>
            <header className="flex">
                <div className="w-[265px] bg-orange-400 h-screen">f</div>
                <div className=" flex flex-1">
                    <div className="flex px-[50px] flex-col gap-[30px] justify-center">
                        <div className="flex gap-[10px]">
                            <div><FiUser/></div>
                            <span className="font-bold">Profile</span>
                        </div>
                        <form className="flex flex-col items-center  border-2 p-[30px] w-[1020px]">
                            <span className="text-[#0B132A] text-[30px] font-bold">Change Pin 👋</span>
                            <span className="text-[#4F5665] text-[16px]">Please save your pin because this so important.</span>
                            <div className="flex justify-center items-center w-[80%] gap-[30px] h-[200px]">
                                <div className="flex flex-col items-center gap-[10px]">
                                    <span className="text-[#0B132A] text-[30px]">1</span>
                                    <div className="bg-[#764abc] w-[65px] h-[2px]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[10px]">
                                    <span className="text-[#0B132A] text-[30px]">1</span>
                                    <div className="bg-[#764abc] w-[65px] h-[2px]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[10px]">
                                    <span className="text-[#0B132A] text-[30px]">1</span>
                                    <div className="bg-[#764abc] w-[65px] h-[2px]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[10px]">
                                    <span className="text-[#0B132A] text-[30px]">1</span>
                                    <div className="bg-[#764abc] w-[65px] h-[2px]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[10px]">
                                    <span className="text-[#0B132A] text-[30px]">1</span>
                                    <div className="bg-[#764abc] w-[65px] h-[2px]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[10px]">
                                    <span className="text-[#0B132A] text-[30px]">1</span>
                                    <div className="bg-[#764abc] w-[65px] h-[2px]"></div>
                                </div>
                            </div>
                            <div className="w-full"><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ChangePin;