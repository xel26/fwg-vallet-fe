//import
import { FiUser } from "react-icons/fi"
import React from "react"
import Navbar from "../components/Navbar"
import Navigation from "../components/Navigation"
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { removeVerifyPin } from "../redux/reducers/verifyPin"

const EnterNewPin = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const data = useSelector(state => state.profile.data)
    const dispatch = useDispatch()
    const fact = useSelector(state => state.verifyPin.data)

    const changePin = async (e) => {
        e.preventDefault()
        try{
            const {value: pin} = e.target.pin
            const form = new URLSearchParams()
            form.append('pin', pin)
            const {data: success} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
            if(success.success){
                dispatch(removeVerifyPin())
                navigate('/profile')
            }
            
        }catch(err){
            console.log(err.response)
        }
    }

    const debug = (e) => {
        e.preventDefault()
        console.log(fact)
    }
    return (
        <>
            <Navbar />
            <header className="flex pt-[56px]">
                <Navigation />
                <div className=" flex flex-1 pt-[66px]">
                    <div className="w-full flex md:px-[50px] flex-col gap-[20px] justify-center">
                        <form onSubmit={changePin} className="flex flex-col gap-[10px] md:border-2 p-[30px] w-full">
                            <span className="text-[#0B132A] text-[30px] font-bold">Enter Your New Pin👋</span>
                            <span className="text-[#4F5665] text-[16px]">Please save your pin because this so important.</span>
                            <div className=" flex justify-center items-center gap-[30px] h-[200px]">
                                <input type="text" name="pin" id="pin" className="text-5xl lg:tracking-[90px] md:tracking-[50px] tracking-[50px] outline-none w-full" maxLength="6"/>
                            </div>
                            <div className="w-full"><button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                            </div>
                        </form>
                        <ResponsiveNavigation />
                    </div>
                </div>
            </header>
        </>
    )
}

export default EnterNewPin;