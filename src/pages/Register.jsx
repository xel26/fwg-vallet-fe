import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import registerImage from "../assets/image/register.png"
import { useDispatch } from "react-redux"
import { setregister } from "../redux/reducers/register"
import axios from "axios"

import Alert from "../components/Alert"
import { Input, Button, FooterAuth, HeaderAuth } from "../components/Piece"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState()
    const [successMessage, setSuccessMessage] = useState()
    const [errMessage, setErrMessage] = useState()

    const phoneOnChange = (e) => {
        if(isNaN(e.target.value)){
            e.target.value = ''
            return
          }
    }

    const processRegister = (event) => {
        event.preventDefault()
        const {value: email} = event.target.email
        const {value: fullName} = event.target.fullName
        const {value: phoneNumber} = event.target.phoneNumber
        const {value: password} = event.target.password
        const {value: confirmPassword} = event.target.confirmPassword
        
        if(password !== confirmPassword){
            setErrMessage("confirm password does not match!")
            
            setTimeout(() => {
                setErrMessage()
            }, 3000);
            return
        }

        setLoading(true)

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/find-user-by-email?email=${email}`)
        .then(() => {
            setLoading()
            setErrMessage('Email already registered')

            setTimeout(() => {
                setErrMessage()
            }, 3000);
        }).catch(() => {
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/find-user-by-phone?phoneNumber=${phoneNumber}`)
            .then(() => {
                setLoading()
                setErrMessage('Phone number is already exist')
    
                setTimeout(() => {
                    setErrMessage()
                }, 3000);
            }).catch(() => {
                setLoading()

                dispatch(setregister({
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber,
                    fullName: fullName
                }))
        
                setSuccessMessage("Register Success")
        
                setTimeout(() => {
                    setSuccessMessage()
                    navigate('/enter-pin')
                }, 3000);
            })
        })
    }


    const [passwordVisible, setPasswordVisible] = useState(false)

    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    return (
            <section className="flex bg-[#764abc]">
                <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>

                <div className="flex justify-center flex-1 bg-white md:rounded-r-3xl py-5 px-5 sm:py-12 sm:px-10">
                    <form onSubmit={processRegister} className=" flex flex-col justify-center w-full sm:w-[90%] gap-4">
                        <HeaderAuth header={`Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users`} subHeader="Transfering money is eassier than ever, you can access Vallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"/>

                        <div className="flex flex-col gap-4">
                            <Input label="Email" placeholder="Enter Your Email" name="email" type="email"/>
                            <Input label="FullName" placeholder="Enter Your Full Name" name="fullName" type="text"/>
                            <Input label="Phone" placeholder="Enter Your Phone Number" name="phoneNumber" type="text" onChange={phoneOnChange}/>
                            <Input label="Password" placeholder="Enter Your Password" name="password" visible={passwordVisible} setVisible={setPasswordVisible}/>
                            <Input label="Confirm Password" placeholder="Enter Your Password Again" name="confirmPassword" visible={confirmPasswordVisible} setVisible={setConfirmPasswordVisible}/>
                        </div>
                        
                        <Button text="Register"/>
                        
                        <FooterAuth question="Have An Account?" text="Login" link="login"/>
                    </form>
                </div>

                <div className="items-center justify-center flex-1 hidden md:flex">
                    <div className="max-w-[90%]"><img src={registerImage} alt="register image" /></div>
                </div>
            </section>
    )
}

export default Register;