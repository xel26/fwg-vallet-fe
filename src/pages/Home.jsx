import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
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
import { FiDownload, FiHeadphones, FiShield } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Testimoni from '../components/testimoni'
import axios from 'axios'
import PageIndicator from '../components/PageIndicator'

const Home = () => {
    const token = useSelector(state => state.auth.token)

    const [testimony, setTestimony] = useState([])
    // const [pagesArr, setPagesArr] = React.useState([])
    const [pages, setPages] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const getTestimony = async() => {
        const {data: dataTestimony } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/testimony?sortby=createdAt&order=desc&limits=1`)
        setTestimony(dataTestimony.results)
        let page = []
        for(let i = 1; i <= dataTestimony.pageInfo.totalData; i++){
            page.push(i)
        }
        // setPagesArr(page)
        setPages(dataTestimony.pageInfo.currentPage)
        setTotalPages(dataTestimony.pageInfo.totalPage)
    }

    const changePages = async(e) => { // next page
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/testimony?sortby=createdAt&order=desc&limits=1&page=${e}`)
        setTestimony(data.results)
        setPages(data.pageInfo.currentPage)
    }
    
    useEffect(()=>{
        getTestimony()
        // window.scrollTo({
        //     top:0,
        //     left:0,
        //     behavior:'smooth'
        // })
    },[])

    return(
    <>
        <Navbar/>

    <div>
        
        <div className="flex flex-col px-4 md:px-10 pt-[75px] bg-[#764abc] text-white h-auto gap-6 md:pt-[133px] lg:self-center">
            <h1 className="text-[32px] md:font-medium md:text-5xl lg:text-6xl md:text-center transition-all duration-1000">
                Experience the Future of Digital Payments with Vallet
            </h1>
            <div className="flex flex-col-reverse md:flex-row lg:gap-[75px] lg:justify-center">
                <div className="flex justify-center">
                    <img className="lg:max-w-[422px] mb-[-2.5vh] transition-all duration-1000 " src={Mobile_dashboard_1} alt="mobile-dashboard-1"/>
                </div>
                <div className="flex flex-col gap-6 md:self-center">
                    <p className="text-base font-normal transition-all duration-1000">
                        Simplify Your Life with Secure and Convenient Mobile Payments
                    </p>
                    <div className="flex gap-[25px]">
                        <button className="flex flex-1 items-center justify-center h-[50px] bg-white rounded-md gap-[10px] active:scale-95 transition-all">
                            <img src={Playstore} />
                                <p className="text-[#764abc] text-sm">Play Store</p>
                        </button>
                        <button className="flex flex-1 h-[50px] items-center justify-center border-white border gap-[10px] rounded-md active:scale-95 transition-all">
                            <img src={Appstore}/>
                            <p>Apps Store</p>
                        </button>
                        </div>
                        <div className="flex gap-3">
                            <h1 className="text-[32px] font-medium">4.6 M</h1>
                            <img src={Userrounded} alt="user-profile-img"/>
                        </div>
                        <div>
                            <p className="text-base font-normal transition-all duration-1000">Around the world, we already have over 4.6 happy user</p>
                        </div>
                </div>
            </div>
        </div>

        <div>
            <div className="pt-16 pb-10">
            <div className="flex flex-col px-4 md:px-10 justify-items-center lg:flex-row lg:justify-around">
                <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
                    <div className="flex items-center justify-center">
                        <div className=' flex rounded-full w-14 h-14 bg-[#764abc] justify-center items-center'>
                        <FiHeadphones className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] lg:gap-[9px] transition-all duration-1000">
                        <p className="text-lg font-bold text-center lg:text-left">24/7 Support</p>
                        <p className="text-base font-normal text-center lg:text-left">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[9px]">
                    <div className="flex items-center justify-center">
                        <div className=' flex rounded-full w-14 h-14 bg-[#764abc] justify-center items-center'>
                        <FiShield className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                        <p className="text-lg font-bold text-center lg:text-left">Data Privacy</p>
                        <p className="text-base font-normal text-center lg:text-left">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                    </div>
                </div>
                <div className="flex flex-col flex-grow gap-[15px] lg:flex-row lg:gap-[9px]">
                    <div className="flex items-center justify-center">
                        <div className=' flex rounded-full w-14 h-14 bg-[#764abc] justify-center items-center'>
                        <FiDownload className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] lg:gap-[9px]">
                            <p className="text-lg font-bold text-center lg:text-left">Easy Download</p>
                            <p className="text-base font-normal text-center lg:text-left">Zwallet is 100% totally free to use it&apos;s now available on Google Play Store and App Store.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:justify-center">
                <div className="flex flex-col px-4 md:px-10 pt-7 gap-5 lg:w-[480px] lg:self-end">
                    <p className="text-[#764abc] font-bold text-lg text-center lg:text-left ">WELCOME TO E-WALLET</p>
                    <p className="font-medium text-[32px] text-center lg:text-left">Your All-in-One Digital Payment Solution</p>
                    <p className="text-base font-medium text-center lg:text-left">Say goodbye to cash and hello to the future of payments! With e-wallet, you have the power of secure, fast, and convenient digital transactions right at your fingertips. Whether you&apos;re shopping, dining out, or sending money to loved ones, we&apos;ve got you covered.</p>

                    <Link to={token ? '/dashboard' : '/login'} className="h-[50px] flex justify-center items-center bg-[#764abc] text-white py-[10px] rounded-md lg:max-w-[143px] active:scale-95 transition-all">
                        {token ? 'To Dashboard' : 'Get Started'}
                    </Link>

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
                        <Link to={token ? '/dashboard' : '/login'} className="h-[50px] flex items-center justify-center bg-[#764abc] text-white py-[10px] rounded-md lg:max-w-[143px] active:scale-95 transition-all">
                            {token ? 'To Dashboard' : 'Get Started'}
                        </Link>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-10 py-14 flex flex-col items-center gap-[19px] lg:flex-row justify-center">
            <div className="flex flex-col lg:w-[330px]">
                <p className="font-medium text-[32px] text-center lg:text-left">100+ Trusted Partners</p>
                <p className="text-base font-normal text-center lg:text-left">We have reached global level and have 100+ brand partners around the globe.</p>
            </div>
            <div className="flex-col items-center md:flex-row md:flex md:justify-normal ">
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
            <p className="text-base font-normal text-center">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>

            <div className='flex items-center justify-between gap-5'>
                <button disabled={pages-1 == 0} onClick={()=>changePages(pages - 1)} className='text-xl items-center justify-center hidden w-12 h-12 active:bg-[#764abc] disabled:bg-white bg-gray-400 rounded-full md:flex text-white active:scale-95 transition-all'>
                     <FiArrowLeft />
                </button>

                {testimony?.map((data, i) => {
                    // let image = data.image
                    return(
                        <Testimoni key={i} image={data.picture} name={data.fullName} rating={data.rating} review={data.review}/>
                    )
                })}

                <button disabled={pages == totalPages} onClick={()=>changePages(pages + 1)} className='text-xl hidden md:flex rounded-full w-12 h-12 bg-gray-400 active:bg-[#764abc] disabled:bg-white justify-center items-center text-white active:scale-95 transition-all'>
                    <FiArrowRight />
                </button>

            </div>

            <div className='flex justify-center items-center gap-4'>
                <button disabled={pages-1 == 0} onClick={()=>changePages(pages - 1)} className='text-xl flex items-center justify-center w-8 h-8 active:bg-[#764abc] disabled:bg-white bg-gray-400 rounded-full md:hidden text-white active:scale-95 transition-all'>
                     <FiArrowLeft />
                </button>

                <PageIndicator totalPage={totalPages} currentPage={pages}/>

                <button disabled={pages == totalPages} onClick={()=>changePages(pages + 1)} className='text-xl flex md:hidden rounded-full w-8 h-8 bg-gray-400 active:bg-[#764abc] disabled:bg-white justify-center items-center text-white active:scale-95 transition-all'>
                    <FiArrowRight />
                </button>
            </div>



            {/* <svg className="mt-4" width="76" height="9" viewBox="0 0 76 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="38" cy="4" r="4" fill="#E8E8E8"></circle>
                <circle cx="55" cy="4" r="4" fill="#E8E8E8"></circle>
                <circle cx="72" cy="4" r="4" fill="#E8E8E8"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25441 8.44432C4.24369 8.4444 4.23296 8.44444 4.22222 8.44444C4.21148 8.44444 4.20075 8.4444 4.19003 8.44432H3.91085V8.43314C1.72437 8.27376 0 6.44937 0 4.22222C0 1.99508 1.72437 0.170685 3.91085 0.0113071V0H4.22222H20.877V0.00638229C20.9545 0.0021459 21.0325 0 21.1111 0C23.443 0 25.3333 1.89035 25.3333 4.22222C25.3333 6.55409 23.443 8.44444 21.1111 8.44444C21.0325 8.44444 20.9545 8.4423 20.877 8.43806V8.44432H4.25441Z" fill="#2948FF">
                </path>
            </svg> */}
        </div>

        <div className="flex flex-col bg-[#F8F8F8] px-4 md:px-10 py-14 gap-[19px] lg:flex-row-reverse lg:items-center ">
            <div className="flex flex-col gap-4 lg:max-w-[580px]">
                <p className="text-xl font-medium transition-all duration-1000 md:text-3xl lg:text-4xl">Download The App</p>
                <p className="text-base font-normal">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
            <div className="flex gap-[25px]">
                <button className="flex flex-1 items-center justify-center h-[50px] border bg-[#764abc] rounded-md gap-[10px] lg:max-w-[250px] active:scale-95 transition-all">
                <img src={Playstore} alt="" />
                <p className="text-sm text-white">Play Store</p>
                </button>
                <button className="flex flex-1 items-center justify-center text-[#764abc] h-[50px] border gap-[10px] rounded-md border-[#764abc] lg:max-w-[250px] active:scale-95 transition-all">
                <img  src={Appstore_ungu} alt="" />
                <p>Apps Store</p>
                </button>
            </div>
            </div>
                <img className="md:max-w-[422px] self-center" src={Mobile_dashboard_1} alt="mobile-dashboard-3-img"/>
        </div>

    </div>

    {/* footer */}
    <Footer />
        
    </>
    )
    
}

export default Home;