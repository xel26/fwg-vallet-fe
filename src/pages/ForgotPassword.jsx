//import
import { FiMail} from "react-icons/fi"
import logoAuth from "../assets/image/logo auth.png"

const ForgotPassword = () => {
    return (
        <>
            <header className="flex justify-center items-center bg-[#764abc] h-screen">
                <form className="flex w-[90%] md:max-w-[40%] p-[50px] gap-[15px] flex-col bg-white rounded-xl">
                    <div className="flex gap-[10px] items-center">
                        <img width="35px" src={logoAuth} alt=""/>
                            <span className="text-[#764abc] text-[20px]">Vallet</span>
                    </div>
                    <span className="text-[#0B132A] text-[30px]">Fill Out Form Correctly 👋</span>
                    <span className="text-[#4F5665] text-[16px]">We will send new password to your email</span>
                    <div className="flex mt-2 gap-3 flex-col">
                            <label className="-mt-[10px] text-[#0B132A] font-bold" htmlFor="email">Email</label>
                            <div className="-mt-[5px] flex relative items-center">
                                <div className="text-[#4F5665] absolute left-3"><FiMail /></div>
                                <input className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-12 py-2" name="email"
                                    id="email" type="email" placeholder="Enter Your Email" />
                            </div>
                        </div>
                    <div><button className="rounded-lg mt-2 py-3 bg-[#764abc] w-full font-bold" type="submit">Submit</button>
                    </div>
                </form>
            </header>
        </>
    )
}

export default ForgotPassword;