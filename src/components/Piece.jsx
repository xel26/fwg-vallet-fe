import { FiEyeOff, FiEye, FiLock, FiUsers, FiMail, FiUser, FiPhone, FiShield } from "react-icons/fi"
import { Link } from "react-router-dom"

import logoGoogle from "../assets/image/google.svg"
import logoFacebook from "../assets/image/facebook.svg"
import walletIcon from "../assets/media/wallet.png"

export const Input = ({label, visible, setVisible, placeholder, name, type, defaultValue, profile, onChange}) => {
    return (
        <label className="relative flex flex-col gap-1 text-[#0B132A] text-sm sm:text-base">
            {label == "Existing Password" || (label == "Password" && document.URL.endsWith('login')) ? (
                <div className="flex justify-between">
                    <p className="font-semibold">{label}</p>
                    <Link to="/forgot-password" className="text-[#764abc] active:underline">forgot Password</Link>
                </div>

            ) : (
                <p className="font-semibold">{label}</p>
            )}
        <div className="flex gap-2 items-center border-[#DEDEDE] border rounded-md py-0.5 sm:py-1 px-1.5">
            <div>
                {name === "email" ? (
                    <FiMail className="text-[#4F5665]"/>
                ) : name === "fullName" ? (
                    <FiUser className="text-[#4F5665]"/>
                ) : name === "phoneNumber" ? (
                    <FiPhone className="text-[#4F5665]"/>
                ) : name === "otp" ? (
                    <FiShield className="text-[#4F5665]"/>
                ) : (
                    <FiLock className="text-[#4F5665]"/>
                )}
            </div>

            {name.includes("ssword") ? ( // => untuk input password, case sensitive nama ada yg menggunakan p besar dan kecil
                <>
                    <input required className="text-[#4F5665] w-full outline-none bg-transparent text-sm py-1" name={name} type={visible ? "text" : "password"} placeholder={placeholder}/>
                    <div className="text-base" onClick={() => setVisible(!visible)}>
                        {visible ? <FiEye /> : <FiEyeOff />}
                    </div>
                </>
            ) : (
                <input required={profile ? false : true} className="text-[#4F5665] w-full outline-none bg-transparent text-sm py-1 " name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange ? onChange : undefined} maxLength={name === "phoneNumber" && 14} minLength={name === "phoneNumber" && 12}/>
            )}
        </div>
    </label>
    )
}



export const Button = ({text="submit", disabled=false}) => {
    return (
        <button disabled={disabled} className="rounded-lg mt-5 py-1 px-1.5 bg-[#764abc] w-full font-semibold text-white active:scale-95 transition-all text-sm sm:text-base" type="submit">{text}</button>
    )
}



export const ProfileHeader = () => {
    return (
     <Link to="/profile" className="items-center hidden gap-4 pt-8 sm:flex">
        <FiUsers size={20} color="#764abc" />
        <div className="font-bold">Profile</div>
      </Link>
    )
}



export const HeaderAuth = ({header, subHeader, button=true}) => {
    return (
        <>
            <div className="flex items-center gap-2 w-fit">
                <img src={walletIcon} alt="wallet icon"/>
                <span className="text-[#764abc] text-lg font-semibold">Vallet</span>
            </div>

            <span className="text-[#0B132A] text-lg sm:text-3xl font-semibold">{header}</span>
            <span className="text-[#4F5665] text-xs sm:text-base">{subHeader}</span>

            {button && (
                <>
                    <div className="flex md:flex-col flex-row gap-4">
                        <button className="flex justify-center gap-2 border-2 border-[#E8E8E8] rounded-full w-full py-1"><img
                            src={logoGoogle} alt="google icon" /><span className="hidden md:block">Sign In With Google</span>
                        </button>
                        <button className="flex justify-center gap-2 border-2 border-[#E8E8E8] rounded-full w-full py-1"><img
                            src={logoFacebook} alt="facebook icon" /><span className="hidden md:block">Sign In With Facebook</span>
                        </button>
                    </div>

                    <div className="flex items-center w-full ">
                        <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                        <p className="w-[30%] text-center text-[#4F5665]">Or</p>
                        <div className="flex-1 w-full h-[2px] bg-[#DEDEDE]"></div>
                    </div>
                </>
            )}
        </>
    )
}



export const FooterAuth = ({question, text, link}) => {
    return (
    <div className="flex justify-center">
        <p className="text-[#4F5665] text-sm sm:text-base">
            {question}<Link className="text-[#764abc]" to={`/${link}`}>{text}</Link>
        </p>
    </div>
    )
}