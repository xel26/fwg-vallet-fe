//import
import { FiHash, FiLock} from "react-icons/fi"
import logoAuth from "../assets/image/logo auth.png"

const ForgotPassword = () => {
    return (
        <>
            <header className="flex justify-center items-center bg-[#764abc] h-screen">
                <form className="flex w-72 sm:w-96 p-4 gap-[15px] flex-col bg-white rounded-xl">
                    <div className="flex gap-[10px] items-center">
                        <img width="35px" src={logoAuth} alt=""/>
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                    </div>
                    <span className="text-[#0B132A] text-xl sm:text-base">Fill Out Form Correctly 👋</span>
                    <span className="text-[#4F5665] text-sm sm:text-base">We will send new password to your email</span>
                    <div className="flex mt-2 gap-4 flex-col">
                        <div className="flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor="otp">OTP</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiHash /></div>
                                <input className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name="otp"
                                    id="otp" type="email" placeholder="Enter Code OTP" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor="new-password">New Password</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiLock /></div>
                                <input className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name="Password"
                                    id="new-password" type="email" placeholder="Enter New Password" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="-mt-[10px] text-[#0B132A] font-bold text-sm sm:text-base" htmlFor="confirm-password">Confirm Password</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiLock /></div>
                                <input className="w-full text-sm sm:text-base text-[#4F5665] border-solid border-2 rounded-lg px-8 py-2 outline-none" name="confirmPassword"
                                    id="confirm-password" type="email" placeholder="Enter Confirm Password" />
                            </div>
                        </div>
                    </div>
                        <button className="rounded-lg mt-2 py-1 psm:y-3 bg-[#764abc] w-full font-bold text-white active:scale-95 transition-all duration-500" type="submit">Submit</button>
                </form>
            </header>
        </>
    )
}

export default ForgotPassword;