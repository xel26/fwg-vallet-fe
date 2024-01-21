//import
import { FiHash, FiLock, FiEye, FiEyeOff} from "react-icons/fi"
import logoAuth from "../assets/image/logo auth.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const createNewPassword = () => {
    const navigate = useNavigate()

    const [password, setPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)

    const [errMessage, setErrMessage] = useState( 'test')
    const [successMessage, setSuccessMessage] = useState('creat new password')
    const [error, setError] = useState(false)

    const createNewPassword = async (event) => {
        event.preventDefault()

        const {value: otp} = event.target.otp
        const {value: newPassword} = event.target.newPassword
        const {value: confirmPassword} = event.target.confirmPassword
        
        const form = new URLSearchParams()
        form.append('otp', otp)
        form.append('newPassword', newPassword)
        form.append('confirmPassword', confirmPassword)

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-password`, form)
            console.log(data.message)

            setSuccessMessage(data.message)
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        } catch (error) {
            console.log(error)
            setErrMessage(error.response.data.results)
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
            return
        }
    }

    return (
        <>
            <header className=" flex justify-center items-center bg-[#764abc] h-screen">
                <form onSubmit={createNewPassword} className="flex w-72 sm:w-96 p-4 gap-[15px] flex-col bg-white rounded-xl">
                    <div className="flex gap-[10px] items-center">
                        <img width="35px" src={logoAuth} alt=""/>
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                    </div>
                    <span className="text-[#0B132A] text-xl sm:text-base">Fill Out Form Correctly 👋</span>
                    <span className="text-[#4F5665] text-sm sm:text-base">{successMessage}</span>
                    <div className="flex mt-2 gap-4 flex-col">
                        <div className="relative flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor="otp">OTP</label>
                             <p className={`${error ? 'block' : 'hidden'} absolute left-14 -top-2.5 text-[#D00]`}>{errMessage}</p>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiHash /></div>
                                <input required className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name="otp"
                                    id="otp" type="text" placeholder="Enter Code OTP" />
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor="new-password">New Password</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiLock /></div>
                                <input required className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name="newPassword"
                                    id="new-password" type={password ? "text" : "password"} placeholder="Enter New Password" />
                            <div className="absolute right-3" onClick={() => setPassword(!password)}>
                                    {password ? <FiEye /> : <FiEyeOff />}
                            </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor="confirm-password">Confirm Password</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiLock /></div>
                                <input required className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name="confirmPassword"
                                    id="confirm-password" type={confirmPassword ? "text" : "password"} placeholder="Enter Confirm Password" />
                                    <div className="absolute right-3" onClick={() => setConfirmPassword(!confirmPassword)}>
                                    {confirmPassword ? <FiEye /> : <FiEyeOff />}
                                    </div>
                            </div>
                        </div>
                    </div>
                        <button className="rounded-lg mt-2 py-1 psm:y-3 bg-[#764abc] w-full font-bold text-white active:scale-95 transition-all duration-500" type="submit">Submit</button>
                </form>
            </header>
        </>
    )
}

export default createNewPassword;