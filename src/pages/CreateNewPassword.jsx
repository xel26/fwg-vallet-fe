import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { HeaderAuth, Input, Button} from "../components/Piece"
import Alert from "../components/Alert"

const CreateNewPassword = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    const [passwordPeek, setPasswordPeek] = useState()
    const [confirmPasswordPeek, setConfirmPasswordPeek] = useState()

    const [loading, setLoading] = useState()
    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const newPassword = async (event) => {
        event.preventDefault()
        
        const {value: otp} = event.target.otp
        const {value: newPassword} = event.target.newPassword
        const {value: confirmPassword} = event.target.confirmPassword

        if(newPassword !== confirmPassword){
            setErrMessage("confirm password does not match!")

            setTimeout(() => {
                setErrMessage()
            }, 3000)
        }
        
        const form = new URLSearchParams()
        form.append('otp', otp)
        form.append('newPassword', newPassword)
        form.append('confirmPassword', confirmPassword)

        setLoading(true)
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-password`, form)
            setLoading()
            event.target.otp.value = ''
            event.target.newPassword.value = ''
            event.target.confirmPassword.value = ''

            setSuccessMessage(data.message)

            setTimeout(() => {
                setSuccessMessage()
                if(token){
                    navigate(`/profile`)
                }else{
                    navigate(`/login`)
                }
            }, 3000)
        } catch (error) {
            setLoading()
            setErrMessage(error.response.data.message)

            setTimeout(() => {
                setErrMessage()
            }, 3000)
        }
    }

    return (
        <section className="flex justify-center items-center bg-[#764abc] h-screen">
            <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>
            <form onSubmit={newPassword} className="relative flex w-[16rem] lg:w-[28rem] py-4 px-5 gap-2 lg:py-8 lg:px-10 lg:gap-4 flex-col bg-white rounded-xl">
                <HeaderAuth header="Fill Out Form Correctly 👋" subHeader="create new password" button={false}/>

                <div className="flex flex-col gap-4">
                    <Input label="OTP" placeholder="Enter Your OTP code" name="otp" type="text"/>
                    <Input label="New Password" visible={passwordPeek} setVisible={setPasswordPeek} placeholder="Enter Your OTP code" name="newPassword"/>
                    <Input label="Confirm Password" visible={confirmPasswordPeek} setVisible={setConfirmPasswordPeek} placeholder="Enter Your Password Again" name="confirmPassword"/>
                </div>

                <Button/>

                <p className="flex justify-center text-xs sm:text-sm">
                 <span>Did not receive the email?</span>
                 <Link to="/forgot-password" className="text-[#764abc]">Resend</Link>
                </p>
            </form>
        </section>
    )
}

export default CreateNewPassword;