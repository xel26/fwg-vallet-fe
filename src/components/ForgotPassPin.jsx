import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button, HeaderAuth, Input } from "./Piece";
import Alert from "../components/Alert"


const ForgotPassPin = ({redirect, url}) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState()
    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const reqForgotPassPin = async (event) => {
        setLoading(true)
        event.preventDefault()

        const {value: email} = event.target.email
        
        const form = new URLSearchParams()
        form.append('email', email)

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-${url}`, form)
            setLoading()
            setSuccessMessage(data.message)

            setTimeout(() => {
                setSuccessMessage()
                navigate(`/create-new-${redirect}`)
            }, 3000);
        } catch (error) {
            setLoading()
            setErrMessage(error.response.data.message)

            setTimeout(() => {
                setErrMessage()
            }, 3000);
        }
    }

    return (
        <header className="flex justify-center items-center bg-[#764abc] h-screen">
            <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>

            <form onSubmit={reqForgotPassPin} className="relative flex w-[16rem] sm:w-[28rem] py-4 px-5 gap-2 sm:py-8 sm:px-10 sm:gap-4 flex-col bg-white rounded-xl">
                <HeaderAuth header="Fill Out Form Correctly 👋" subHeader="We will send otp code to your email" button={false}/>

                <Input label="Email" placeholder="Enter Your Email" name="email" type="email"/>

                <Button/>
            </form>
        </header>
    )
}

export default ForgotPassPin;