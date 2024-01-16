//import
import React from "react"
import { FiEyeOff, FiEye, FiKey, FiUser } from "react-icons/fi"
import Navbar from "../components/Navbar"
import Navigation from "../components/Navigation"
import ResponsiveNavigation from "../components/ResponsiveNavigation"

const ChangePassword = () => {

    // Ganti type di input dari password ke text
    const [existingPasswordVisible, setExistingPasswordVisible] = React.useState(false)
    const toggleExistingPasswordVisible = () => {
        setExistingPasswordVisible(!existingPasswordVisible)
    }
    const [newPasswordVisible, setNewPasswordVisible] = React.useState(false)
    const togglesetNewPasswordVisible = () => {
        setNewPasswordVisible(!newPasswordVisible)
    }
    const [confirmNewPasswordVisible, setcConfirmNewPasswordVisible] = React.useState(false)
    const toggleConfirmNewPasswordVisibility = () => {
        setcConfirmNewPasswordVisible(!confirmNewPasswordVisible)
    }
    return (
        <>
            <Navbar/>
            <header className="flex pt-[56px]">
                <Navigation/>
                <div className=" flex flex-1 pt-[25px]">
                    <div className=" w-full flex md:px-[50px] flex-col gap-[20px] justify-center">
                        <div className="md:pl-[0px] pl-[30px] flex gap-[10px]">
                            <div><FiUser /></div>
                            <span className="font-bold">Profile</span>
                        </div>
                        <form className="flex flex-col gap-[10px] md:border-2 p-[30px] w-full">
                            <span className="text-[#0B132A] font-bold">Change Password</span>
                            <div className="flex gap-3 flex-col">
                                <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">Existing Password</label>
                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                    <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1" name="password"
                                        id="password" type={existingPasswordVisible ? "text" : "password"} placeholder="Enter Your Existing Password" />
                                    {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                    <div className="absolute right-3" onClick={toggleExistingPasswordVisible}>
                                        {existingPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 flex-col">
                                <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">New Password</label>
                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                    <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1" name="password"
                                        id="password" type={newPasswordVisible ? "text" : "password"} placeholder="Enter Your New Password" />
                                    {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                    <div className="absolute right-3" onClick={togglesetNewPasswordVisible}>
                                        {newPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 flex-col">
                                <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">Confirm New Password</label>
                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                    <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1" name="password"
                                        id="password" type={confirmNewPasswordVisible ? "text" : "password"} placeholder="Re-Type Your New Password" />
                                    {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                    <div className="absolute right-3" onClick={toggleConfirmNewPasswordVisibility}>
                                        {confirmNewPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </div>
                            <div><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold text-white" type="submit">Submit</button>
                            </div>
                        </form>
                        <ResponsiveNavigation/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ChangePassword;