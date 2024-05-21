import React, { useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login as loginAction} from "../redux/reducers/auth"

import loginImage from "../assets/image/login.png"

import Alert from "../components/Alert"
import { Input, Button, HeaderAuth, FooterAuth } from "../components/Piece"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [passwordVisible, setPasswordVisible] = useState()
    const [loading, setLoading] = useState()
    const [successMessage, setSuccessMessage] = useState()
    const [errMessage, setErrMessage] = useState()

    const loginProcess = async (e) => {
        setLoading(true)

        e.preventDefault()
        const {value: email} = e.target.email
        const {value: password} = e.target.password

        const form = new URLSearchParams()
        form.append('email', email)
        form.append('password', password)

        try{
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, form.toString())
            setLoading()
            setSuccessMessage(data.message)

            setTimeout(()=>{
                setSuccessMessage()
                dispatch(loginAction(data.results.token))
                navigate('/dashboard')
            },3000)

        }catch(err){
            setLoading()
            setErrMessage(err?.response?.data?.message)

            setTimeout(() => {
                setErrMessage()
            }, 3000);
        }
    }

    return (
            <section className="flex bg-[#764abc]">
                <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>

                <div className="flex justify-center flex-1 bg-white md:rounded-r-3xl py-5 px-5 sm:py-0 sm:px-10 h-screen">
                    <form onSubmit={loginProcess} className="flex flex-col justify-center w-[90%] gap-4">
                        <HeaderAuth header="Hello Welcome Back 👋" subHeader="Fill out the form correctly or you can login with several option."/>

                        <div className="flex flex-col gap-4">
                            <Input label="Email" placeholder="Enter Your Email" name="email" type="email"/>
                            <Input label="Password" visible={passwordVisible} setVisible={setPasswordVisible} placeholder="Enter Your Password" name="password"/>
                        </div>

                        <Button text="Login"/>

                        <FooterAuth question="Not Have An Account?" text="Register" link="register"/>
                    </form>
                </div>

                <div className="items-center justify-center flex-1 hidden md:flex">
                    <div className="max-w-[90%]"><img src={loginImage} alt="login image" /></div>
                </div>
            </section>
    )

}

export default Login;
