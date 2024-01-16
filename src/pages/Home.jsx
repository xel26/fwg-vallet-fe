//import
import { useEffect } from 'react'

//import gambar
import Logo_icon from "../assets/media/Logo_tanpanama.png"
import Hamburger_menu from "../assets/media/hamburger-menu.png"
import Mobile_dashboard_1 from "../assets/media/mobile-dashboard-1.png"
import Playstore from "../assets/media/playstore.png"
import Appstore from "../assets/media/appstore.png"
import Appstore_ungu from "../assets/media/appstore_ungu.png"
import Userrounded from "../assets/media/user_bulat.png"
import Check from "../assets/media/ceklis hijau.png"
import Mobile_Dashboard_V2_latar from "../assets/media/Mobile-Dashboard-V2-latar-belakang.png"
import Mobile_Dashboard_V2 from "../assets/media/Mobile - Dashboard V2.png"
import Online_payment from "../assets/media/online-payment-security-concept-3d-phone-bill 1.png"
import Microsoft_logo from "../assets/media/microsoft.png"
import Dropbox_logo from "../assets/media/dropbox.png"
import Hnm_logo from "../assets/media/hnm.png"
import Airbnb_logo from "../assets/media/airbnb.png"
import Canon_logo from "../assets/media/canon.png"
import Dell_logo from "../assets/media/dell.png"
import Profile from "../assets/media/profile.png"
import { FiArrowLeft, FiArrowRight, FiDownload, FiFacebook, FiGithub, FiHeadphones, FiInstagram, FiMail, FiPhone, FiShield, FiStar, FiTwitter } from 'react-icons/fi'

const Home = () => {
    // coding di sini
    useEffect(()=>{
        window.scrollTo({
          top:0,
          left:0,
          behavior:'smooth'
        })
      },[])

    return(
    <>
        {/* navbarhome */}
        <header className="sticky top-0 z-50 flex justify-between items-center w-full h-[76px] px-4 md:px-[40px] text-white bg-[#764abc] ">
            <div id="logo" className="flex gap-4 items-center">
                <img className='w-[32px] h-[32px]' src={Logo_icon} alt="logo tanpa nama" />
                <p className="text-xl font-semibold">Vallet</p>
            </div>

            <div className='flex md:hidden'>
                <img className='cursor-pointer' src={Hamburger_menu} alt="" />
            </div>
            {/* Persiapan on click */}
            <dir className="md:hidden flex flex-col w-full gap-[18px] h-screen px-[40px] bg-white text-[#764abc] rounded-b-2xl right-0 text-center absolute top-16 hidden">
                <div className="border border-transparent justify-center text-sm mt-[18px] p-5 hover:border rounded-md  hover:bg-violet-400">Sign In</div>
                <div className="border border-transparent justify-center text-sm hover:border p-5 rounded-md hover:bg-violet-400">Sign Up</div>
            </dir>
            {/* onclick */}
            <div className="hidden md:flex md:gap-2">
                <a className="border border-white h-[48px] py-3 px-4 rounded-md hover:bg-blue-700" href="/login">Sign In</a>
                <a className="border text-[#764abc] bg-white border-white h-[48px] py-3 px-4 rounded-md hover:bg-slate-200" href="/register">Sign Up</a>
            </div>
        </header>

    <div>
    
        {/* Body home atas */}
        
        <div className="flex flex-col px-4 md:px-10 pt-[75px] bg-[#764abc] text-white h-auto gap-6 md:pt-[133px] lg:self-center">
            <h1 className="text-[32px] md:font-medium md:text-5xl lg:text-6xl md:text-center">
                Experience the Future of Digital Payments with e-wallet
            </h1>
            <div className="flex flex-col-reverse md:flex-row lg:gap-[75px] lg:justify-center">
                <div className="flex justify-center">
                    <img className="lg:max-w-[422px] mb-[-2.5vh]" src={Mobile_dashboard_1} alt="mobile-dashboard-1"/>
                </div>
                <div className="flex flex-col gap-6 md:self-center">
                    <p className="text-base font-normal">
                        Simplify Your Life with Secure and Convenient Mobile Payments
                    </p>
                    <div className="flex gap-[25px]">
                        <button className="flex flex-1 items-center justify-center h-[50px] bg-white rounded-md gap-[10px] hover:bg-slate-200">
                            <img src={Playstore} alt="" />
                                <p className="text-[#764abc] text-sm">Play Store</p>
                        </button>
                        <button className="flex flex-1 h-[50px] items-center justify-center border-white border gap-[10px] rounded-md hover:bg-slate-200/25 ">
                            <img src={Appstore} alt="" />
                            <p>Apps Store</p>
                        </button>
                        </div>
                        <div className="flex gap-3">
                            <h1 className="text-[32px] font-medium">4.6 M</h1>
                            <img src={Userrounded} alt="user-profile-img"/>
                        </div>
                        <div>
                            <p className="text-base font-normal">Around the world, we already have over 4.6 happy user</p>
                        </div>
                </div>
            </div>
        </div>

        <div>
           <div className="pt-16 pb-10">
            <div className="flex flex-col gap-7 px-4 md:px-10 justify-items-center lg:flex-row lg:justify-between ">
                <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
                    <div className="flex justify-center items-center">
                        <div className=' flex rounded-full w-14 h-14 bg-[#764abc] justify-center items-center'>
                        <FiHeadphones className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                        <p className="text-center font-bold text-lg lg:text-left">24/7 Support</p>
                        <p className="text-center text-base font-normal lg:text-left">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
                    <div className="flex justify-center items-center">
                        <div className=' flex rounded-full w-14 h-14 bg-[#764abc] justify-center items-center'>
                        <FiShield className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                        <p className="text-center font-bold text-lg lg:text-left">Data Privacy</p>
                        <p className="text-center text-base font-normal lg:text-left">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-grow gap-[15px] lg:flex-row lg:gap-[9px]">
                    <div className="flex justify-center items-center">
                        <div className=' flex rounded-full w-14 h-14 bg-[#764abc] justify-center items-center'>
                        <FiDownload className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                            <p className="text-center font-bold text-lg lg:text-left">Easy Download</p>
                            <p className="text-center text-base font-normal lg:text-left">Zwallet is 100% totally free to use it&apos;s now available on Google Play Store and App Store.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:justify-center">
                <div className="flex flex-col px-4 md:px-10 pt-7 gap-5 lg:w-[480px] lg:self-end">
                    <p className="text-[#764abc] font-bold text-lg text-center lg:text-left ">WELCOME TO E-WALLET</p>
                    <p className="font-medium text-[32px] text-center lg:text-left">Your All-in-One Digital Payment Solution</p>
                    <p className="font-medium text-base text-center lg:text-left">Say goodbye to cash and hello to the future of payments! With e-wallet, you have the power of secure, fast, and convenient digital transactions right at your fingertips. Whether you&apos;re shopping, dining out, or sending money to loved ones, we&apos;ve got you covered.</p>
                    <button className="h-[50px] justify-center bg-[#764abc] text-white py-[10px] rounded-md lg:max-w-[143px] hover:bg-violet-400">
                        Get Started
                    </button>
                </div>
                <div className="relative mt-[300px] bottom-0 px-4 md:px-10 flex justify-center lg:pt-1 lg:flex-row lg:w-[680px]">
                    <img className="relative bottom-0 " src={Mobile_Dashboard_V2_latar} alt="background-img"/>
                    <img className="absolute bottom-0 z-10 mb-[-2.7vh]" src={Mobile_Dashboard_V2}alt="mobile-dashboard-latar belakang"/>
                </div>
            </div>
            </div> 
        </div>

        <div className="bg-[#F8F8F8] px-4 md:px-10 py-14 flex flex-col items-center lg:flex-row">
            <div className="lg:flex-1">
                <img src={Online_payment} alt="3d-phone-bill-img"/>
            </div>
            <div className="lg:flex-1">
                <div className="flex flex-col gap-[25px]">
                    <p className="font-medium text-[32px] ">All The Great Zwallet Features.</p>
                    <p>We have some great features from the application and it&apos;s totally free to use by all users around the world.</p>
                    <ul className="flex flex-col gap-3 text-[#00A700] text-lg font-bold">
                        <li className="flex gap-3">
                        <img src={Check} alt="" />
                            Small Fee</li>
                        <li className="flex gap-3">
                        <img src={Check} alt="" />
                            Data Secured</li>
                        <li className="flex gap-3">
                        <img src={Check} alt="" />         
                            User Friendly</li>
                    </ul>
                        <button className="h-[50px] justify-center bg-[#764abc] text-white py-[10px] rounded-md lg:max-w-[143px] hover:bg-violet-400">
                            Get Started
                        </button>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-10 py-14 flex flex-col items-center gap-[19px] lg:flex-row lg:justify-center">
            <div className="flex flex-col lg:w-[330px]">
                <p className="font-medium text-[32px] text-center lg:text-left">100+ Trusted Partners</p>
                <p className="font-normal text-base text-center lg:text-left">We have reached global level and have 100+ brand partners around the globe.</p>
            </div>
            <div className="md:flex items-center">
                <img  src={Microsoft_logo} alt="microsoft-logo"/>
                <img  src={Dropbox_logo} alt="dropbox-logo"/>
                <img  src={Hnm_logo} alt="hnm-logo"/>
                <img  src={Airbnb_logo} alt="airbnb-logo"/>
                <img  src={Canon_logo} alt="canon-logo"/>
                <img  src={Dell_logo} alt="dell-logo"/>
            </div>
        </div>

        <div className="px-4 md:px-10 py-14 flex flex-col items-center gap-[19px]">
            <p className="font-medium text-[32px] text-center">What Our Users Are Saying</p>
            <p className="font-normal text-base text-center">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
            <div className='flex justify-between items-center gap-5'>
                <div className='hidden md:flex rounded-full w-12 h-12 bg-gray-400 justify-center items-center'>
                    <FiArrowLeft />
                </div>
                <div className="flex flex-col items-center mt-10 text-white gap-[19px] bg-[#764abc] rounded-2xl p-14 lg:w-[707px]">
                <div className='object-cover rounded-full '>
                <img src={Profile} alt="profile-img"/>
                </div>
                    <p className="font-bold text-lg">James Bond</p>
                    <div className="flex gap-[15px]">
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        <FiStar color="#a7a9ad" className="text-xs sm:text-base"></FiStar>
                        
                        <p>5.0</p>
                    </div>
                        <p className="font-bold text-5xl">“</p>
                        <p className="font-normal text-base text-center">I&apos;ve been using the e-wallet for over two years now, and I&apos;m very satisfied with the ease of use. This has completely changed the way I shop and conduct financial transactions.</p>
                </div>
                <div className=' hidden md:flex rounded-full w-12 h-12 bg-[#764abc] justify-center items-center'>
                    <FiArrowRight />
                </div>
            </div>
            
                        <svg className="mt-4" width="76" height="9" viewBox="0 0 76 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="38" cy="4" r="4" fill="#E8E8E8"></circle>
                            <circle cx="55" cy="4" r="4" fill="#E8E8E8"></circle>
                            <circle cx="72" cy="4" r="4" fill="#E8E8E8"></circle>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25441 8.44432C4.24369 8.4444 4.23296 8.44444 4.22222 8.44444C4.21148 8.44444 4.20075 8.4444 4.19003 8.44432H3.91085V8.43314C1.72437 8.27376 0 6.44937 0 4.22222C0 1.99508 1.72437 0.170685 3.91085 0.0113071V0H4.22222H20.877V0.00638229C20.9545 0.0021459 21.0325 0 21.1111 0C23.443 0 25.3333 1.89035 25.3333 4.22222C25.3333 6.55409 23.443 8.44444 21.1111 8.44444C21.0325 8.44444 20.9545 8.4423 20.877 8.43806V8.44432H4.25441Z" fill="#2948FF">
                            </path>
                        </svg>
        </div>

        <div className="flex flex-col bg-[#F8F8F8] px-4 md:px-10 py-14 gap-[19px] lg:flex-row-reverse lg:items-center ">
            <div className="flex flex-col gap-[25px]lg:max-w-[580px]">
                <p className="font-medium text-4xl">Download The App</p>
                <p className="font-normal text-base">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
            <div className="flex gap-[25px]">
                <button className="flex flex-1 items-center justify-center h-[50px] border bg-[#764abc] rounded-md gap-[10px] lg:max-w-[250px] hover:bg-violet-400">
                <img src={Playstore} alt="" />
                <p className="text-white text-sm">Play Store</p>
                </button>
                <button className="flex flex-1 items-center justify-center text-[#764abc] h-[50px] border gap-[10px] rounded-md border-[#764abc] lg:max-w-[250px] hover:bg-slate-200">
                <img  src={Appstore_ungu} alt="" />
                <p>Apps Store</p>
                </button>
            </div>
            </div>
                <img className="md:max-w-[422px] self-center" src={Mobile_dashboard_1} alt="mobile-dashboard-3-img"/>
        </div>

    </div>

    {/* footer */}
    <footer className="flex flex-col gap-[40px] px-5 py-14 bg-[#764abc] text-white ">
        <div className="flex flex-col  gap-[40px] lg:flex-row">
            <div className="flex lg:flex lg:flex-1">
                <div className="flex flex-col gap-[15px] ">
                    <div className="flex items-center gap-[15px]">
                        <img src={Logo_icon} className='w-10 h-10' alt="e-wallet-logo"/>
                        <p className="font-nunito text-4xl font-semibold">Vallet</p>
                    </div>
                        <p className="text-base font-normal">Clarity gives you the blocks and components you need to create a truly professional website.</p>
                </div>    
            </div>
            <div className="flex flex-col gap-[15px] lg:flex-1">
                <p className="font-semibold text-lg ">GET IN TOUCH</p>
                <div className="flex gap-[15px] ">
                    <FiPhone className='text-white h-6 w-6 font-semibold' />
                    <p>+62 5637 8882 9901</p>
                </div>
                <div className="flex gap-[15px] ">
                    <FiMail className='text-white h-6 w-6 font-semibold' />
                    <p>contact@zwallet.com</p>
                </div>
            </div>
                <div className="flex flex-col gap-[15px] lg:flex-1">
                    <p className="font-semibold text-lg ">SOCIAL MEDIA</p>
                    <div className="flex gap-[20px] ">
                        
                        <div className=' flex rounded-full w-11 h-11 bg-white justify-center items-center'>
                        <FiTwitter className='w-5 h-5 text-[#764abc]' />
                        </div>
                        <div className=' flex rounded-full w-11 h-11 bg-white justify-center items-center'>
                        <FiFacebook className='w-5 h-5 text-[#764abc]' />
                        </div>
                        <div className=' flex rounded-full w-11 h-11 bg-white justify-center items-center'>
                        <FiInstagram className='w-5 h-5 text-[#764abc]' />
                        </div>
                        <div className=' flex rounded-full w-11 h-11 bg-white justify-center items-center'>
                        <FiGithub className='w-5 h-5 text-[#764abc]' />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[15px] lg:flex-1 ">
                    <p className="font-semibold text-lg ">NEWSLETTER</p>
                    <form className="flex flex-col gap-[15px]">
                        <div className="flex gap-[15px] px-3 py-[14px] border border-[#DEDEDE] bg-white rounded-lg">
                            <FiMail className='w-5 h-5 text-black'/>
                            <input type="text" placeholder="Enter Your Email" id="email" className="flex-1 outline-none text-xs font-normal text-[#4F5665]"/>
                        </div>
                        <button className="flex-1 h-9 bg-white rounded-md text-[#764abc] py-[10px] hover:bg-slate-200">Subscribe</button>
                    </form>
                </div>
        </div>
            <div className="border border-t-white"></div>
            <p className="text-sm font-normal text-center">© Copyright 2022, All Rights Reserved by ClarityUI</p>
    </footer>
        
    </>
    )
    
}

export default Home;