//import
import { useDispatch, useSelector } from "react-redux"
import enterPinImage from "../assets/image/enter pin.png"
import logoAuth from "../assets/image/logo auth.png"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
// import { setregister } from "../redux/reducers/register"
import { removeRegister } from "../redux/reducers/register"

const EnterPin = () => {
    // const [inputPinActive, setInputPinActive] = React.useState(false)
    const [errMessage, setErrMessage] = useState()
    const data = useSelector(state => state.register.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const pins = [1, 2, 3, 4, 5, 6]


    const register = async (event) => {
        event.preventDefault()
        console.log(data)
        const {value : pin} = event.target.pin
        console.log(pin)
        if(pin.length > 5){
            const form = new URLSearchParams()
            form.append('email', data.email)
            form.append('password', data.password)
            form.append('pin', pin)
    
    
            try{
                console.log(data.email)
                const {data : insert} = await axios.post('http://localhost:5555/auth/register', form.toString())
                dispatch(removeRegister())
                navigate('/login')
            }catch(err){
                // console.log(err)
                setErrMessage(err.response)
            }
        }else{
            setErrMessage("password doesn't match")
        }
    }


    return (
        <>
            <header className="flex bg-[#764abc] h-screen">
                <div className="flex justify-center flex-1 bg-white md:rounded-r-xl">
                    <form onSubmit={register} className=" flex flex-col justify-center w-[90%]">
                        <div className="flex gap-[10px] items-center">
                            <img width="35px" src={logoAuth} alt="" />
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                        </div>
                        <span className="text-[#0B132A] text-[30px]">Enter Your Pin 👋</span>
                        <span className="text-[#4F5665] text-[16px]">Please save your pin because this so important.</span>
                        <div className="flex justify-between items-center gap-3 h-[200px]">
                            {/* {pins.map((item) => (
                                <input
                                    key={item}
                                    type="text"
                                    name="pin"

                                    maxLength="1"
                                    className={`outline-none flex flex-1 w-4 border-b ${inputPinActive ? 'border-[#764abc]' : 'border-[#E8E8E8]'}  bg-transparent text-center`}
                                />
                            ))} */}
                        <input type="text" name="pin" id="pin" className="text-5xl lg:tracking-[90px] md:tracking-[50px] tracking-[50px] outline-none w-full" maxLength="6"/>
                        </div>
                        <div><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                        </div>
                        <div className="flex mt-[10px] justify-center">
                            {/* <div className="text-[#4F5665]">Forgot Your Pin? <a href="./register.html" className="text-[#764abc]">Reset</a>
                            </div> */}
                        </div>
                    </form>
                </div>
                <div className="items-center justify-center flex-1 hidden md:flex">
                    <div className="max-w-[68%]"><img src={enterPinImage} alt="" /></div>
                </div>
            </header>
        </>
    )
}

export default EnterPin;