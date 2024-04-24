import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderAuth, Input, Button} from "../components/Piece"
import Alert from "../components/Alert"
import Pin from "../components/Pin"

const CreateNewPassword = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState()
    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const newPassword = async (event) => {
        event.preventDefault()
        
        const {value: otp} = event.target.otp

        let pin = ''
        event.target.pin?.forEach((item) => {
            pin += item.value
        })
        
        const form = new URLSearchParams()
        form.append('otp', otp)
        form.append('newPin', pin)

        setLoading(true)
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-pin`, form)
            setLoading()
            event.target.otp.value = ''
            event.target.pin?.forEach((item) => {
                item.value = ''
            })

            setSuccessMessage(data.message)

            setTimeout(() => {
                setSuccessMessage()
                navigate(`/profile`)
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
            <form onSubmit={newPassword} className="relative flex w-[16rem] lg:w-[28rem] py-4 px-5 gap-2 lg:py-8 lg:px-10 flex-col bg-white rounded-xl">
                <HeaderAuth header="Fill Out Form Correctly 👋" subHeader="create new password" button={false}/>

                <div className="flex flex-col gap-4">
                    <Input label="OTP" placeholder="Enter Your OTP code" name="otp" type="text"/>
                    <Pin/>
                </div>

                <Button/>

                <p className="flex justify-center text-xs sm:text-sm">
                 <span>Did not receive the email?</span>
                 <Link to="/forgot-pin" className="text-[#764abc]">Resend</Link>
                </p>
            </form>
        </section>
    )
}

export default CreateNewPassword;