import { useDispatch, useSelector } from "react-redux"
import enterPinImage from "../assets/image/enter pin.png"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { removeRegister } from "../redux/reducers/register"
import Pin from "../components/Pin"
import Alert from "../components/Alert"
import {HeaderAuth, Button} from "../components/Piece"

const EnterPin = () => {
    const data = useSelector(state => state.register.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState()
    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()


    const register = async (event) => {
        setLoading(true)

        event.preventDefault()

        let pin = ''
        event.target.pin?.forEach((item) => {
            pin += item.value
        })

        const form = new URLSearchParams()
        form.append('email', data.email)
        form.append('fullName', data.fullName)
        form.append('phoneNumber', data.phoneNumber)
        form.append('password', data.password)
        form.append('pin', pin)

        try{
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, form.toString())
            setLoading()
            dispatch(removeRegister())
            setSuccessMessage('Enter Pin Success')

            setTimeout(() => {
                setSuccessMessage()
                navigate('/login')
            }, 3000);

        }catch(err){
            setLoading()
            setErrMessage(err.response.data.message)

            setTimeout(() => {
                setErrMessage()
            }, 3000);
        }
    }


    return (
        <section className="flex bg-[#764abc] h-screen">
            <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>

            <div className="flex justify-center flex-1 bg-white md:rounded-r-3xl py-5 px-5 sm:py-10 sm:px-10">
                <form onSubmit={register} className=" flex flex-col justify-center gap-2 w-[90%] ">
                    <HeaderAuth header="Enter Your Pin 👋" subHeader="Please save your pin because this so important." button={false}/>
                    <Pin header="Enter"/>
                    <Button disabled={!data.email && !data.password}/>
                </form>
            </div>
                
            <div className="items-center justify-center flex-1 hidden md:flex">
                <div className="max-w-[68%]"><img src={enterPinImage} alt="enter Pin Image" /></div>
            </div>
        </section>
    )
}

export default EnterPin;