import { FaStar } from "react-icons/fa";
import { FiSearch, FiSend, FiStar } from 'react-icons/fi'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import TransferSteps from "../components/TransferSteps";
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import axios from "axios";
import { useSelector } from "react-redux";

import defaultProfile from '../assets/media/default-profile.png'
import PageNavigation from "../components/PageNavigation";
import Alert from "../components/Alert"


const CardListContact = ({id, image, contactName, number, isFavorite}) => {
    return (
      <Link to={`/transfer-detail/${id}`}  className="flex items-center justify-between bg-[#E8E8E84D] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.08)] active:shadow-none rounded p-2 transition-all">
        <div>
          {/* <img src={image?`${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${image}`:defaultProfile} className="object-cover w-10 h-10 rounded" /> */}
          <img src={image? image : defaultProfile} className="object-cover w-12 h-12 sm:w-14 sm:h-14 rounded" />
        </div>

        <div className="flex justify-start items-center text-sm sm:text-base w-16 sm:w-60 whitespace-nowrap overflow-hidden">
          {contactName?.split(' ')[0]}
        </div>

        <div className="flex items-center justify-start w-24 sm:w-40 text-sm sm:text-base whitespace-nowrap overflow-hidden">
          {number}
        </div>

        <div>
          {isFavorite ? <FaStar color='orange'/> : <FiStar color="#4F5665"/>}
        </div>
      </Link>
    );
}

const Transfer = () => {
  const token = useSelector(state => state.auth.token)

  const [listContact, setListContact] = useState()
  const [search, setSearch] = useState()
  const [currentPage, setCurrentPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [totalPage, setTotalPage] = useState()
  const [totalData, setTotalData] = useState(0)

  const [loading, setLoading] = useState()
  const [errMessage, setErrMessage] = useState()



  const getContact = async () => {
    setLoading(true)

    try {
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?limit=5`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
        
      })

      console.log(dataContact)
      setLoading()
      setListContact(dataContact)
      setCurrentPage(dataContact.pageInfo.currentPage)
      setNextPage(dataContact.pageInfo.nextPage)
      setPrevPage(dataContact.pageInfo.prevPage)
      setTotalPage(dataContact.pageInfo.totalPage)
      setTotalData(dataContact.pageInfo.totalData)
      
    } catch (error) {
      setLoading()
      // console.log(error)
      // setErrMessage(error.response.data ? error.response.data.message : error.message)
    }
  }


  const searchOnChange = (e) => {
    if(isNaN(e.target.value)){
      e.target.value = ''
      return
    }
  }

  
  const searchPhone = async (e) => {
    e.preventDefault()
    let {value: phone} = e.target.search

    if(phone == ''){
      return
    }

    setLoading(true)
    setSearch(phone)

    try {
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?phoneNumber=${phone}&limit=5`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      
      },{params: {
        phoneNumber: phone
      }})
      
      e.target.search.value = ''
      setLoading()
      setListContact(dataContact)
      setCurrentPage(dataContact.pageInfo.currentPage)
      setNextPage(dataContact.pageInfo.nextPage)
      setPrevPage(dataContact.pageInfo.prevPage)
      setTotalPage(dataContact.pageInfo.totalPage)
      setTotalData(dataContact.pageInfo.totalData)

    } catch (error) {
      console.log(error)
      setLoading()
      setErrMessage(error.response ? error.response.data.message : error.message)

      setTimeout(() => {
        setErrMessage()
      }, 3000)
    }
  }


  const next = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      if(search){
        const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?phoneNumber=${search}&limit=5&page=${nextPage}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
    
      setLoading()
      setListContact(dataContact)
      setCurrentPage(dataContact.pageInfo.currentPage)
      setNextPage(dataContact.pageInfo.nextPage)
      setPrevPage(dataContact.pageInfo.prevPage)
      setTotalPage(dataContact.pageInfo.totalPage)
      setTotalData(dataContact.pageInfo.totalData)
  
      }else{
        const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?limit=5&page=${nextPage}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
          
        })
  
        setLoading()
        setListContact(dataContact)
        setCurrentPage(dataContact.pageInfo.currentPage)
        setNextPage(dataContact.pageInfo.nextPage)
        setPrevPage(dataContact.pageInfo.prevPage)
        setTotalPage(dataContact.pageInfo.totalPage)
        setTotalData(dataContact.pageInfo.totalData)
      }
    } catch (error) {
      console.log(error.message)
      setLoading()
      setErrMessage(error.response ? error.response.data.message : error.message)

      setTimeout(() => {
        setErrMessage()
      }, 3000)
    }
  }


  const prev = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      if(search){
        const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?phoneNumber=${search}&limit=5&page=${prevPage}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        
        })
    
        setLoading()
        setListContact(dataContact)
        setCurrentPage(dataContact.pageInfo.currentPage)
        setNextPage(dataContact.pageInfo.nextPage)
        setPrevPage(dataContact.pageInfo.prevPage)
        setTotalPage(dataContact.pageInfo.totalPage)
        setTotalData(dataContact.pageInfo.totalData)
  
      }else{
        const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?limit=5&page=${prevPage}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
          
        })
  
        setLoading()
        setListContact(dataContact)
        setCurrentPage(dataContact.pageInfo.currentPage)
        setNextPage(dataContact.pageInfo.nextPage)
        setPrevPage(dataContact.pageInfo.prevPage)
        setTotalPage(dataContact.pageInfo.totalPage)
        setTotalData(dataContact.pageInfo.totalData)
      }
    } catch (error) {
      console.log(error)
      setLoading()
      setErrMessage(error.response ? error.response.data.message : error.message)
      
      setTimeout(() => {
        setErrMessage()
      }, 3000)
    }
  }


  const page = async (e, page) => {
    setLoading(true)
    e.preventDefault()

    try {
      if(search){
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?phoneNumber=${search}&limit=5&page=${page}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        
        })
    
        setLoading()
        setListContact(data)
        setCurrentPage(data.pageInfo.currentPage)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setTotalPage(data.pageInfo.totalPage)
        setTotalData(data.pageInfo.totalData)
  
      }else{
        const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list?limit=5&page=${page}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
          
        })
  
        setLoading()
        setListContact(dataContact)
        setCurrentPage(dataContact.pageInfo.currentPage)
        setNextPage(dataContact.pageInfo.nextPage)
        setPrevPage(dataContact.pageInfo.prevPage)
        setTotalPage(dataContact.pageInfo.totalPage)
        setTotalData(dataContact.pageInfo.totalData)
      }
    } catch (error) {
      console.log(error)
      setLoading()
      setErrMessage(error.response ? error.response.data.message : error.message)

      setTimeout(() => {
        setErrMessage()
      }, 3000)
    }
  }


  useEffect(()=>{
    getContact(),
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
  },[])

    return (
      <>
        <Navbar home={false} login={true} dashboard={false} />

        <main className={`${listContact ? 'sm:h-[50rem]' : 'sm:h-screen'} flex gap-8 pt-10 pb-20 sm:pb-0`}>
          <Alert loading={loading}/>
          <Navigation />

          <section className="flex flex-col flex-1 gap-4 pt-3">
            <div className="items-center hidden gap-4 pt-10 sm:flex pl">
              <FiSend size={20} color="#764abc" />
              <div className="font-bold">Transfer Money</div>
            </div>

            <TransferSteps />

            <div className={`flex flex-col ${listContact ? 'gap-8' : 'gap-0'} p-4 sm:border sm:mr-10 max-h-[44rem]`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-0">
                <div>
                  <div className="font-bold">Find People</div>
                  {listContact && search ? (
                    <div className="text-xs text-[#4F5665] hidden sm:block">
                      {`${totalData} Result For ${search}`}
                    </div>
                  ) : (
                    <div className="text-xs text-[#4F5665] hidden sm:block">
                      { totalData ? `${totalData} Result From Your History Transaction` : ''}
                    </div>
                  )}
                </div>

                <form onSubmit={searchPhone} className="w-full sm:w-[15rem] h-fit flex">
                  <label className="search flex justify-between items-center w-full pr-2 border-2 rounded">
                    <input
                      id="search"
                      name="search"
                      type="text"
                      placeholder="search phone number"
                      className="sm:text-sm text-xs outline-none bg-transparent w-full p-2 text-[#4F5665]"
                      onChange={searchOnChange}
                    />

                    <button type="submit">
                      <FiSearch
                        size={18}
                        className="text-[#4F5665] active:scale-95 active:text-[#764abc] transition-all"
                      />
                    </button>

                  </label>
                </form>
              </div>

              <div className="flex flex-col justify-center gap-6 sm:gap-4">
                {listContact?.results &&
                  listContact.results.map((item) => {
                    return (
                      <CardListContact
                        key={item.userId}
                        id={item.userId}
                        image={item.picture}
                        contactName={item.fullName}
                        number={item.phoneNumber}
                      />
                    );
                  })}
              </div>

              <PageNavigation totalPage={totalPage} currentPage={currentPage} handleNext={next} handlePrev={prev} handlePage={page}/>
            </div>
            <ResponsiveNavigation />
          </section>
        </main>
      </>
    );
}

export default Transfer;