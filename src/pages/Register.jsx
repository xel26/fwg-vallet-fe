//import
import React from "react"
import { Link } from "react-router-dom"
import { FiMail, FiEyeOff, FiEye, FiKey } from "react-icons/fi"
import registerImage from "../assets/image/register.png"
import logoAuth from "../assets/image/logo auth.png"
import logoGoogle from "../assets/image/google.svg"
import logoFacebook from "../assets/image/facebook.svg"

const Register = () => {


    // Ganti type di input dari password ke text
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    const [confirmPasswordVisible, setcConfirmPasswordVisible] = React.useState(false)
    const toggleConfirmPasswordVisibility = () => {
        setcConfirmPasswordVisible(!confirmPasswordVisible)
    }
    return (
        <>
            <header className="flex bg-[#764abc] h-screen">
                <div className="bg-white flex flex-1 justify-center rounded-r-xl">
                    <form className=" flex flex-col justify-center w-[90%]">
                        <div className="flex items-center">
                            <img width="35px" src={logoAuth} alt="" />
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                        </div>
                        <span className="text-[#0B132A] text-[28px]">Start Accessing Banking Needs With All Devices and All
                            Platforms With 30.000+ Users</span>
                        <span className="text-[#4F5665] text-[16px]">Transfering money is eassier than ever, you can access Zwallet
                            wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</span>
                        <button className="my-[10px] flex justify-center gap-[10px] bg-[#E8E8E8] rounded-full w-full py-[5px]"><img
                            src={logoGoogle} alt="" />Sign In With Google</button>
                        <button className="flex justify-center gap-[10px] bg-[#E8E8E8] rounded-full w-full py-[5px]"><img
                            src={logoFacebook} alt="" />Sign In With Facebook</button>
                        <div className=" flex items-center w-full">
                            <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                            <p className="w-[30%] text-center text-[#4F5665]">Or</p>
                            <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                        </div>
                        <div className="flex gap-3 flex-col">
                            <label className="-mt-[10px] text-[#0B132A] font-bold" htmlFor="email">Email</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiMail /></div>
                                <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1" name="email"
                                    id="email" type="email" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col">
                            <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">Password</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1" name="password"
                                    id="password" type={passwordVisible ? "text" : "password"} placeholder="Enter Your Password Again" />
                                {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                <div className="absolute right-3" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col">
                            <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">Confirm Password</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1" name="password"
                                    id="password" type={confirmPasswordVisible ? "text" : "password"} placeholder="Enter Your Password Again" />
                                {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                <div className="absolute right-3" onClick={toggleConfirmPasswordVisibility}>
                                    {confirmPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>
                        <div><Link to="/"><button className="rounded-lg mt-5 py-2 bg-[#764abc] w-full font-bold" type="submit">Register</button></Link>
                        </div>
                        <div className="flex mt-[10px] justify-center">
                            <div className="text-[#4F5665]">Have An Account?<Link className="text-[#764abc]" to="./login">Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="hidden flex-1 md:flex justify-center items-center">
                    <div className="max-w-[90%]"><img src={registerImage} alt=""/></div>
                </div>
            </header>
        </>
    )
}

export default Register;