import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import axios from "axios"

import { Button, ProfileHeader, Input } from "../components/Piece"
import Navbar from "../components/Navbar"
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import Navigation from "../components/Navigation"
import Alert from "../components/Alert"

const ChangePassword = () => {
    const token = useSelector(state => state.auth.token)
    const profile = useSelector(state => state.profile.data)
    const navigate = useNavigate()
    
    const [existingPassVisible, setExistingPassVisible] = useState()
    const [newPassVisible, setNewPassVisible] = useState()
    const [confirmNewPassVisible, setConfirmNewPassVisible] = useState()
    
    const [loading, setLoading] = useState()
    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const verifyPassword = async (e) => {
        e.preventDefault()
        const {value: existingPassword} = e.target.existingPassword
        const {value: newPassword} = e.target.newPassword
        const {value: confirmPassword} = e.target.confirmPassword

        if(newPassword !== confirmPassword){
            setErrMessage("confirm password does not match!")

            setTimeout(() => {
                setErrMessage()
            }, 3000);
            return
        }

        const form = new URLSearchParams()
        form.append('password', existingPassword)

        setLoading(true)

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-password/${profile.id}`, form.toString())
            const {success} = data

            if(success){
                    const form2 = new URLSearchParams()
                    form2.append('password', newPassword)
    
                    await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/change-password/${profile.id}`, form2, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setLoading()
                    
                    setSuccessMessage('Change Password Success')
                    setTimeout(() => {
                        setSuccessMessage()
                        navigate("/profile")
                    }, 3000);

                    e.target.existingPassword.value = ''
                    e.target.newPassword.value = ''
                    e.target.confirmPassword.value = ''
            }
            
        } catch (error) {
            setLoading()
            setErrMessage(error.response.data.message)

            setTimeout(() => {
                setErrMessage()
            }, 3000);
        }

    }

    return (
        <>
            <Navbar/>
            <main className="h-screen flex pt-10 pb-10 sm:pb-0 px-5 sm:px-0">
                <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>
                <Navigation/>
                    <section className="relative flex flex-col flex-1 gap-4 mt-4 sm:pl-8">

                        <ProfileHeader/>

                        <form onSubmit={verifyPassword}  className="flex flex-col gap-6 p-4 sm:border sm:mr-10 sm:mb-10">
                            <span className="font-bold text-lg">Change Password</span>

                            <Input name="existingPassword" visible={existingPassVisible} setVisible={setExistingPassVisible} label="Existing Password" placeholder="Enter Your Existing Password"/>
                            <Input name="newPassword" visible={newPassVisible} setVisible={setNewPassVisible} label="New Password" placeholder="Enter Your New Password"/>
                            <Input name="confirmPassword" visible={confirmNewPassVisible} setVisible={setConfirmNewPassVisible} label="Confirm New Password" placeholder="Re-Type Your New Password"/>

                            <Button/>
                        </form>
                        <ResponsiveNavigation/>
                    </section>
            </main>
        </>
    )
}

export default ChangePassword;