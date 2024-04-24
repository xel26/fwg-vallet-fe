import axios from "axios";
import { useState} from "react"
import { useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar"
import Navigation from "../components/Navigation"
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import { Button, ProfileHeader} from "../components/Piece"
import Pin from "../components/Pin"
import Alert from "../components/Alert"

const ChangePin = () => {
    const token = useSelector(state => state.auth.token)
    const profile = useSelector(state => state.profile.data)
    const navigate = useNavigate()

    const [loading, setLoading] = useState()
    const [errMessage, setErrMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const ChangePin = async(e) => {
        setLoading(true)
        e.preventDefault()

        let existingPin = ''
        e.target.existingPin?.forEach((item) => {
            existingPin += item.value
        })

        let pin = ''
        e.target.pin?.forEach((item) => {
            pin += item.value
        })

        console.log(existingPin, pin)
        const form = new URLSearchParams()
        form.append('pin', existingPin)

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-pin/${profile.id}`, form.toString())
            const {success} = data

            if(success){
                    const form2 = new URLSearchParams()
                    form2.append('pin', pin)
    
                    await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form2, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })

                    e.target.existingPin.value = ''
                    e.target.pin.value = ''

                    setLoading()
                    
                    setSuccessMessage('Change Pin Success')
                    setTimeout(() => {
                        setSuccessMessage()
                        navigate("/profile")
                    }, 3000);

            }
            
        } catch (error) {
            console.log(error)
            setLoading()
            setErrMessage(error?.response?.data?.message == "Verify Pin Failed" && "Wrong Existing Pin!")

            setTimeout(() => {
                setErrMessage()
            }, 3000);
        }

    }

    return (
        <>
            <Navbar />
            <main className="h-screen sm:pt-10 flex items-center justify-center sm:items-start sm:justify-start">
                <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>
                <Navigation />
                <section className="relative flex flex-col flex-1 gap-4 mt-4 sm:pl-8">
                        <ProfileHeader/>
                        
                        <form onSubmit={ChangePin} className="flex flex-col gap-4 p-4 sm:border sm:mr-10 sm:mb-10">
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold sm:text-lg">Enter Your Existing Pin</p>
                                    <Link to="/forgot-pin" className="text-[#764abc] active:underline">Forgot Pin</Link>
                                </div>
                                <Pin name="existingPin"/>
                            </div>

                            <div className="flex flex-col">
                                <p className="font-bold sm:text-lg">Enter Your New Pin</p>
                                <Pin/>
                            </div>

                            <Button/>
                        </form>
                        <ResponsiveNavigation />
                </section>
            </main>
        </>
    )
}

export default ChangePin;