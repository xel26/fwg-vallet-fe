//import
import { FiUser } from "react-icons/fi"
import React from "react"
import Navbar from "../components/Navbar"
import Navigation from "../components/Navigation"
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { setVerifyPin } from "../redux/reducers/verifyPin"

const ChangePin = () => {
    const [inputPinActive, setInputPinActive] = React.useState(false)
    const data = useSelector(state => state.profile.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const checkPin = async (e) => {
        e.preventDefault()
        try{
            const {value: pin} = e.target.pin
            const form = new URLSearchParams()
            form.append('pin', pin)
            const {data : res} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/transfer/${data.id}`, form.toString())
            if(res.success){
                console.log(res)
                dispatch(setVerifyPin({success: res.success}))
                navigate('/profile/enter-new-pin')
            }else{
                throw ''
            }
        }catch(err){
            console.log(err.response.data.message)
        }
    }
    
    return (
        <>
            <Navbar />
            <header className="flex pt-[56px]">
                <Navigation />
                <div className=" flex flex-1 pt-[66px]">
                    <div className="w-full flex md:px-[50px] flex-col gap-[20px] justify-center">
                        <form onSubmit={checkPin} className="flex flex-col gap-[10px] md:border-2 p-[30px] w-full">
                            <span className="text-[#0B132A] text-[30px] font-bold">Enter Current Pin👋</span>
                            <div className=" flex justify-center items-center gap-[30px] h-[200px]">
                                <input type="text" name="pin" id="pin" className="text-5xl lg:tracking-[90px] md:tracking-[50px] tracking-[50px] outline-none w-full" maxLength="6"/>
                            </div>
                            <button className="rounded-lg mt-5 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                            
                        </form>
                        <ResponsiveNavigation />
                    </div>
                </div>
            </header>
        </>
    )
}

export default ChangePin;