//import
import { FiHash, FiLock, FiEye, FiEyeOff} from "react-icons/fi"
import logoAuth from "../assets/image/logo auth.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateNewPassPin = ({redirect, url}) => {
    const navigate = useNavigate()

    //togle type data password-text
    const [password, setPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)

    const [errMessage, setErrMessage] = useState( 'test')
    const [successMessage, setSuccessMessage] = useState(`create new ${url}`)
    const [error, setError] = useState(false)

    const newPassPin = async (event) => {
        event.preventDefault()

        const form = new URLSearchParams()

        const {value: otp} = event.target.otp
        form.append('otp', otp)

        if(url === "password"){
            const {value: newPassword} = event.target.newpassword
            const {value: confirmPassword} = event.target.confirmpassword
            form.append('newPassword', newPassword)
            form.append('confirmPassword', confirmPassword)
        }else{
            const {value: newPin} = event.target.newpin
            const {value: confirmPin} = event.target.confirmpin
            form.append('newPin', newPin)
            form.append('confirmPin', confirmPin)
        }

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-${url}`, form)

            setSuccessMessage(data.message)
            setTimeout(() => {
                navigate(`/${redirect}`)
            }, 2000);
        } catch (error) {
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
                <form onSubmit={newPassPin} className="flex w-72 sm:w-96 p-4 gap-[15px] flex-col bg-white rounded-xl">
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
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor={`new-${url}`}>new {url}</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiLock /></div>
                                <input maxLength={url === "pin" && '6'} minLength={url === "pin" && '6'} required className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name={`new${url}`}
                                    id={`new-${url}`} type={password ? "text" : "password"} placeholder={`enter new ${url}`} />
                            <div className="absolute right-3" onClick={() => setPassword(!password)}>
                                    {password ? <FiEye /> : <FiEyeOff />}
                            </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor={`confirm-${url}`}>confirm {url}</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiLock /></div>
                                <input maxLength={url === "pin" && '6'} minLength={url === "pin" && '6'} required className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name={`confirm${url}`}
                                    id={`confirm-${url}`} type={confirmPassword ? "text" : "password"} placeholder={`enter confirm ${url}`} />
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

export default CreateNewPassPin;