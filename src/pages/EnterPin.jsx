//import
import React from "react"
import { Link } from "react-router-dom"
import { FiMail } from "react-icons/fi"
import enterPinImage from "../assets/image/enter pin.png"
import logoAuth from "../assets/image/logo auth.png"
import logoGoogle from "../assets/image/google.svg"
import logoFacebook from "../assets/image/facebook.svg"

const EnterPin = () => {
    return (
        <>
            <header className="flex bg-[#764abc] h-screen">
                <div className="bg-white flex flex-1 justify-center rounded-r-xl">
                    <form className=" flex flex-col justify-center w-[90%]">
                        <div className="flex gap-[10px] items-center">
                            <img width="35px" src={logoAuth} alt=""/>
                                <span className="text-[#764abc] text-[20px]">Vallet</span>
                        </div>
                        <span className="text-[#0B132A] text-[30px]">Enter Your Pin 👋</span>
                        <span className="text-[#4F5665] text-[16px]">Please save your pin because this so important.</span>
                        <div className="flex justify-between items-center gap-3 h-[200px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <span className="text-[#0B132A] text-[30px]">1</span>
                                <div className="bg-[#764abc] w-[30px] md:w-[60px] h-[2px]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <span className="text-[#0B132A] text-[30px]">1</span>
                                <div className="bg-[#764abc] w-[30px] md:w-[60px] h-[2px]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <span className="text-[#0B132A] text-[30px]">1</span>
                                <div className="bg-[#764abc] w-[30px] md:w-[60px] h-[2px]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <span className="text-[#0B132A] text-[30px]">1</span>
                                <div className="bg-[#764abc] w-[30px] md:w-[60px] h-[2px]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <span className="text-[#0B132A] text-[30px]">1</span>
                                <div className="bg-[#764abc] w-[30px] md:w-[60px] h-[2px]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <span className="text-[#0B132A] text-[30px]">1</span>
                                <div className="bg-[#764abc] w-[30px] md:w-[60px] h-[2px]"></div>
                            </div>
                        </div>
                        <div><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                        </div>
                        <div className="flex mt-[10px] justify-center">
                            <div className="text-[#4F5665]">Forgot Your Pin? <a href="./register.html" className="text-[#764abc]">Reset</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="hidden flex-1 md:flex justify-center items-center">
                    <div className="max-w-[68%]"><img src={enterPinImage} alt=""/></div>
                </div>
            </header>
        </>
    )
}

export default EnterPin;