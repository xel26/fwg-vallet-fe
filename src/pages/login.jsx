//import
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiMail, FiEyeOff, FiEye, FiKey } from "react-icons/fi"
import loginImage from "../assets/image/login.png"
import logoAuth from "../assets/image/logo auth.png"
import logoGoogle from "../assets/image/google.svg"
import logoFacebook from "../assets/image/facebook.svg"


const Login = () => {

    // Ganti type di input dari password ke text
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const [emailErrorMessage, setEmailErrorMessage] = useState('email error')
    const [emailError, setEmailError] = useState(false)

    const [passErrorMessage, setPassErrorMessage] = useState('email error')
    const [passError, setPassError] = useState(false)

    return (
        <>
            <header className=" flex bg-[#764abc] h-screen">
                <div className="bg-white flex flex-1 justify-center md:rounded-r-xl">
                    <form className=" flex flex-col justify-center gap-[10px] w-[90%]">
                        <div className="flex gap-[10px] items-center">
                            <img width="35px" src={logoAuth} alt="" />
                            <span className="text-[#764abc] text-[30px]">Vallet</span>
                        </div>
                        <span className="text-[#0B132A] text-[30px]">Hello Welcome Back 👋</span>
                        <span className="text-[#4F5665] text-[16px]">Fill out the form correctly or you can login with several option.</span>
                        <div className="flex md:flex-col flex-row gap-[10px]">
                            <button className="md:my-[10px] flex justify-center bg-[#E8E8E8] rounded-full w-full py-[5px]"><img
                                src={logoGoogle} alt="" /><span className="hidden md:block">Sign In With Google</span></button>
                            <button className="flex justify-center gap-[10px] bg-[#E8E8E8] rounded-full w-full py-[5px]"><img
                                src={logoFacebook} alt="" /><span className="hidden md:block">Sign In With Facebook</span></button>
                        </div>
                        <div className=" flex items-center w-full">
                            <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                            <p className="w-[30%] text-center text-[#4F5665]">Or</p>
                            <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                        </div>
                        <div className="relative flex gap-3 flex-col">
                            <label className="-mt-[10px] text-[#0B132A] font-bold" htmlFor="email">Email</label>
                            <p className={`${emailError ? 'block' : 'hidden'} absolute left-16 -top-2.5 text-[#D00]`}>{emailErrorMessage}</p>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiMail /></div>
                                <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-2" name="email"
                                    id="email" type="email" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="relative flex gap-3 flex-col">
                            <label className=" mt-[10px] text-[#0B132A] font-bold" htmlFor="password">Password</label>
                            <p className={`${passError ? 'block' : 'hidden'} absolute left-24 top-2.5  text-[#D00]`}>{passErrorMessage}</p>
                            <div className=" -mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-2" name="password"
                                    id="password" type={passwordVisible ? "text" : "password"} placeholder="Enter Your Password Again" />
                                {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                <div className="absolute right-3" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>
                        <div><Link to="/"><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Login</button></Link>
                        </div>
                        <div className="flex mt-[10px] justify-center">
                            <div className="text-[#4F5665]">Not Have An Account? <Link className="text-[#764abc]" to="/register">Register</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="hidden flex-1 md:flex justify-center items-center">
                    <div className="max-w-[90%]"><img src={loginImage} alt="" /></div>
                </div>
            </header>
        </>
    )

}

export default Login;
