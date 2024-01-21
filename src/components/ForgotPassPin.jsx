//import
import { FiMail} from "react-icons/fi"
import logoAuth from "../assets/image/logo auth.png"

import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassPin = ({redirect, url}) => {
    const navigate = useNavigate()

    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState('We will send otp code to your email')
    const [emailError, setEmailError] = useState(false)

    const reqForgotPassPin = async (event) => {
        event.preventDefault()

        const {value: email} = event.target.email
        
        const form = new URLSearchParams()
        form.append('email', email)

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-${url}`, form)

            setSuccessMessage(data.message)

            setTimeout(() => {
                navigate(`/create-new-${redirect}`)
            }, 3000);
        } catch (error) {
            setErrMessage(error.response.data.results)
            setEmailError(true)
            setTimeout(() => {
                setEmailError(false)
            }, 2000);
            return
        }
    }

    return (
        <>
            <header className="flex justify-center items-center bg-[#764abc] h-screen">
                <form onSubmit={reqForgotPassPin} className="relative flex w-[90%] md:max-w-[40%] p-[50px] gap-[15px] flex-col bg-white rounded-xl">
                    <div className="flex gap-[10px] items-center">
                        <img width="35px" src={logoAuth} alt=""/>
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                    </div>
                    <span className="text-[#0B132A] text-[30px]">Fill Out Form Correctly 👋</span>
                    <span className="text-[#4F5665] text-[16px]">{successMessage}</span>
                    <div className="relative flex mt-2 gap-3 flex-col ">
                            <label className="-mt-[10px] text-[#0B132A] font-bold" htmlFor="email">Email</label>
                            <p className={`${emailError ? 'block' : 'hidden'} absolute left-16 -top-2.5 text-[#D00]`}>{errMessage}</p>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiMail /></div>
                                <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-2 outline-none text-xs sm:text-sm" name="email"
                                    id="email" type="email" placeholder="Enter Your Email" />
                            </div>
                    </div>
                    <button className="rounded-lg mt-2 py-1 bg-[#764abc] w-full font-bold text-white active:scale-95 transition-all duration-500" type="submit">Submit</button>
                </form>
            </header>
        </>
    )
}

export default ForgotPassPin;