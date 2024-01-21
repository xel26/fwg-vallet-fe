//import 
import React, { useState, useEffect } from "react"
import { FiEyeOff, FiEye, FiKey, FiUser } from "react-icons/fi"
import Navbar from "../components/Navbar"
import Navigation from "../components/Navigation"
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import axios from "axios"
import { useSelector } from "react-redux"

const ChangePassword = () => {
    const token = useSelector(state => state.auth.token)
    const profile = useSelector(state => state.profile.data)
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((data) => {
            setUser(data.results)
        })
    },[])
    console.log(user)


    const [error, setError] = useState(true)
    const [errMessage, setErrMessage] = useState()

    const [changeSuccess, setChangeSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState()


    const verifyPassword = async (e) => {
        e.preventDefault()
        const {value: existingPassword} = e.target.existingPassword
        const {value: password} = e.target.password
        const {value: confirmPassword} = e.target.confirmPassword
        console.log(existingPassword)
        console.log(password)
        const form = new URLSearchParams()
        form.append('password', existingPassword)

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-password/${profile.id}`, form.toString())
            const {success} = data

            if(success){
                if(confirmPassword === password){
                    const form2 = new URLSearchParams()
                    form2.append('password', password)
    
                    await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/change-password/${profile.id}`, form2, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })

                    e.target.existingPassword.value = ''
                    e.target.password.value = ''
                    e.target.confirmPassword.value = ''

                    setSuccessMessage('Change Password Success')
                    setChangeSuccess(true)
                    setTimeout(() => {
                        setChangeSuccess(false)
                    }, 2000);
                }else{
                    setErrMessage('confirm password does not match')
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                    }, 2000);
                    return
                }

            }
            
        } catch (error) {
            console.log(error)
            if(error.response.data.message === 'wrong email or password'){
                error.response.data.message = 'wrong password'
            }

            setErrMessage(error.response.data.message)
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
        }

    }


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
                <div className=" flex flex-1 pt-10">
                    <div className=" w-full flex md:px-[50px] flex-col gap-[20px] justify-center">
                        <div className="md:pl-[0px] pl-[30px] flex items-center gap-[10px]">
                            <div><FiUser /></div>
                            <span className="font-bold">Profile</span>
                        </div>
                        <form onSubmit={verifyPassword}  className="flex flex-col gap-[10px] md:border-2 p-[30px] w-full">
                            <span className="text-[#0B132A] font-bold">Change Password</span>
                            <div className="relative flex flex-col gap-3">
                                <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="existingPassword">Existing Password</label>
                                <p className={`${error ? 'block' : 'hidden'} absolute left-40 top-2.5 text-[#D00]`}>{errMessage}</p>
                                <p className={`${changeSuccess ? 'block' : 'hidden'} absolute left-40 top-2.5  text-green-500`}>{successMessage}</p>

                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                    <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1 outline-none" name="existingPassword"
                                        id="existingPassword" type={existingPasswordVisible ? "text" : "password"} placeholder="Enter Your Existing Password" />
                                    {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                    <div className="absolute right-3" onClick={toggleExistingPasswordVisible}>
                                        {existingPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="password">New Password</label>
                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                    <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1 outline-none" name="password"
                                        id="password" type={newPasswordVisible ? "text" : "password"} placeholder="Enter Your New Password" />
                                    {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                    <div className="absolute right-3" onClick={togglesetNewPasswordVisible}>
                                        {newPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="mt-[10px] text-[#0B132A] font-bold" htmlFor="confirmPassword">Confirm New Password</label>
                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiKey /></div>
                                    <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-1 outline-none" name="confirmPassword"
                                        id="confirmPassword" type={confirmNewPasswordVisible ? "text" : "password"} placeholder="Re-Type Your New Password" />
                                    {/* <div className="text-[#4F5665] absolute right-4"><FiEyeOff /></div> */}
                                    <div className="absolute right-3" onClick={toggleConfirmNewPasswordVisibility}>
                                        {confirmNewPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                    </div>
                                </div>
                            </div>
                            <button className="rounded-lg mt-5 py-2 bg-[#764abc] w-full font-bold text-white active:scale-95 transition-all duration-500" type="submit">Submit</button>
                        </form>
                        <ResponsiveNavigation/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ChangePassword;