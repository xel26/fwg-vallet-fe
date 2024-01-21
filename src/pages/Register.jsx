//import
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiEyeOff, FiEye, FiKey } from "react-icons/fi"
import registerImage from "../assets/image/register.png"
import logoAuth from "../assets/image/logo auth.png"
import logoGoogle from "../assets/image/google.svg"
import logoFacebook from "../assets/image/facebook.svg"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setregister } from "../redux/reducers/register"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [errMessage, setErrMessage] = useState('error')
    const [successMessage, setSuccessMessage] = useState('register success')

    const [registerSuccess, setRegisterSuccess] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [confirmPassError, setConfirmPassError] = useState(false)


    const processRegister = (event) => {
        event.preventDefault()
        const {value: email} = event.target.email
        const {value: password} = event.target.password
        const {value: confirmPassword} = event.target.confirmPassword

        if(password === confirmPassword){

            dispatch(setregister({
                email: email,
                password: password
            }))

            setRegisterSuccess(true)

            setTimeout(() => {
                setRegisterSuccess(false)
                navigate('/enter-pin')
            }, 2000);


        }else{
            setErrMessage("password doesn't match")
            setConfirmPassError(true)
            setTimeout(() => {
                setConfirmPassError(false)
            }, 2000);
          }
    }



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
                <div className="flex justify-center flex-1 bg-white md:rounded-r-xl">
                    <form onSubmit={processRegister} className=" flex flex-col justify-center w-[90%]">
                        <div className="flex items-center">
                            <img width="35px" src={logoAuth} alt="" />
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                        </div>
                        <span className="text-[#0B132A] text-[24px]">Start Accessing Banking Needs With All Devices and All
                            Platforms With 30.000+ Users</span>
                        <span className="text-[#4F5665] text-[16px]">Transfering money is eassier than ever, you can access Zwallet
                            wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</span>
                        <div className="flex md:flex-col flex-row gap-[10px]">
                            <button className="md:my-[10px] flex justify-center bg-[#E8E8E8] rounded-full w-full py-[5px]"><img
                                src={logoGoogle} alt="" /><span className="hidden md:block">Sign In With Google</span></button>
                            <button className="flex justify-center gap-[10px] bg-[#E8E8E8] rounded-full w-full py-[5px]"><img
                                src={logoFacebook} alt="" /><span className="hidden md:block">Sign In With Facebook</span></button>
                        </div>
                        <div className="flex items-center w-full ">
                            <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                            <p className="w-[30%] text-center text-[#4F5665]">Or</p>
                            <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                        </div>
                        <div className="relative flex flex-col gap-3">
                            <label className="-mt-[10px] text-[#0B132A] font-bold" htmlFor="email">Email</label>
                            <p className={`${emailError ? 'block' : 'hidden'} absolute left-16 -top-2.5 text-[#D00]`}>{errMessage}</p>
                            <p className={`${registerSuccess ? 'block' : 'hidden'} absolute left-56 -top-2.5  text-green-500`}>{successMessage}</p>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiMail /></div>
                                <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1 outline-none" name="email"
                                    id="email" type="email" placeholder="Enter Your Email"/>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-3">
                            <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">Password</label>
                            <p className={`${passError ? 'block' : 'hidden'} absolute left-24 top-2.5 text-[#D00]`}>{errMessage}</p>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1 outline-none" name="password"
                                    id="password" type={passwordVisible ? "text" : "password"} placeholder="Enter Your Password" />
                                {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                <div className="absolute right-3" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-3">
                            <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="confirmPassword">Confirm Password</label>
                            <p className={`${confirmPassError ? 'block' : 'hidden'} absolute left-40 top-2.5 text-[#D00]`}>{errMessage}</p>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1 outline-none" name="confirmPassword"
                                    id="confirmPassword" type={confirmPasswordVisible ? "text" : "password"} placeholder="Enter Your Password Again" />
                                {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                <div className="absolute right-3" onClick={toggleConfirmPasswordVisibility}>
                                    {confirmPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>
                        <div><button className="rounded-lg mt-5 py-2 bg-[#764abc] w-full font-bold text-white active:scale-95 transition-all duration-500" type="submit">Register</button>
                        </div>
                        <div className="flex mt-[10px] justify-center">
                            <div className="text-[#4F5665]">Have An Account?<Link className="text-[#764abc]" to="/login">Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="items-center justify-center flex-1 hidden md:flex">
                    <div className="max-w-[90%]"><img src={registerImage} alt="" /></div>
                </div>
            </header>
        </>
    )
}

export default Register;