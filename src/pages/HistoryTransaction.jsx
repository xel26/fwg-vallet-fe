import { FiSearch, FiStar, FiRotateCcw, FiTrash2 } from 'react-icons/fi'
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import PageNavigation from '../components/PageNavigation';
import CardDetailHistoryTransaction from '../components/CardDetailHistoryTransaction';
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import { useSelector } from 'react-redux';
import axios from 'axios';

import defaultProfile from '../assets/media/default-profile.png'
import Alert from "../components/Alert"

export const TransferSteps = ({steps, value}) => {
    return (
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-[#4F5665] w-5 h-5 flex justify-center items-center text-white">
          {steps}
        </div>
        <div className="text-[#4F5665]">{value}</div>
      </div>
    );
}


const CardHistoryTransaction = ({id, image, contactName, PhoneNumber, amount, type, deleteHistoryOrder, handleCard}) => {
    return (
      <div className='relative'>
        <button onClick={() => handleCard(true)} className="w-full flex items-center justify-between bg-[#E8E8E84D] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.08)] active:shadow-none rounded p-2 transition-all">
          <div className='hidden sm:block'>
            {/* <img src={image ? `${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${image}` : defaultProfile} className="object-cover w-10 h-10 rounded min-w-10" /> */}
            <img src={image ? image : defaultProfile} className="object-cover w-12 h-12 sm:w-14 sm:h-14 rounded"/>
          </div>

          <div className="flex justify-start items-center w-20 sm:w-60 overflow-hidden whitespace-nowrap text-xs sm:text-base">
            {contactName?.split(' ')[0]}
          </div>

          <div className="flex items-center justify-start w-20 sm:w-40 text-xs sm:text-base">
            {PhoneNumber}
          </div>

          <div className="flex items-center justify-end sm:justify-start w-20 sm:w-40 gap-24">
            <div className={`${type === "income" ? 'text-[#1EC15F]': 'text-[#D00000]'} text-xs sm:text-base`}>RP.{amount.toLocaleString('id')}</div>
          </div>

        </button>

        <button className='absolute right-2 top-0 h-full'>
              <FiTrash2 onClick={() => deleteHistoryOrder(id)} color='#D00000' className='hidden sm:block active:scale-95 transition-all'/>
        </button>
      </div>
    );
}

const HistoryTransaction = () => {
  
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  const [historyTransaction, setHistoryTransaction] = useState()
  
  const [search, setSearch] = useState()
  const [currentPage, setCurrentPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [totalPage, setTotalPage] = useState()
  const [totalData, setTotalData] = useState(0)
  
  const [loading, setLoading] = useState()
  const [errMessage, setErrMessage] = useState()
  const [cardShow, setCardShow] = useState(false)

const deleteHistoryOrder = (id) => {
  console.log(`delete ${id}`)
}


const GetHistoryTransaction = async() => {
  setLoading(true)

  try {
    const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?limit=5`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
      
    })

    setLoading()
    setHistoryTransaction(dataContact)
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


const searchHistory = async (e) => {
  e.preventDefault()
  let {value: search} = e.target.search

  setLoading(true)
  setSearch(search)

  try {
    const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?filter=${search}&limit=5`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    
    })
    
    e.target.search.value = ''
    setLoading()
    setHistoryTransaction(dataContact)
    setCurrentPage(dataContact.pageInfo.currentPage)
    setNextPage(dataContact.pageInfo.nextPage)
    setPrevPage(dataContact.pageInfo.prevPage)
    setTotalPage(dataContact.pageInfo.totalPage)
    setTotalData(dataContact.pageInfo.totalData)

  } catch (error) {
    console.log(error)
    e.target.search.value = ''
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
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?filter=${search}&limit=5&page=${nextPage}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  
    setLoading()
    setHistoryTransaction(dataContact)
    setCurrentPage(dataContact.pageInfo.currentPage)
    setNextPage(dataContact.pageInfo.nextPage)
    setPrevPage(dataContact.pageInfo.prevPage)
    setTotalPage(dataContact.pageInfo.totalPage)
    setTotalData(dataContact.pageInfo.totalData)

    }else{
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?limit=5&page=${nextPage}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
        
      })

      setLoading()
      setHistoryTransaction(dataContact)
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
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?filter=${search}&limit=5&page=${prevPage}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  
    setLoading()
    setHistoryTransaction(dataContact)
    setCurrentPage(dataContact.pageInfo.currentPage)
    setNextPage(dataContact.pageInfo.nextPage)
    setPrevPage(dataContact.pageInfo.prevPage)
    setTotalPage(dataContact.pageInfo.totalPage)
    setTotalData(dataContact.pageInfo.totalData)

    }else{
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?limit=5&page=${prevPage}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
        
      })

      setLoading()
      setHistoryTransaction(dataContact)
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


const page = async (e, page) => {
  setLoading(true)
  e.preventDefault()

  try {
    if(search){
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?filter=${search}&limit=5&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  
    setLoading()
    setHistoryTransaction(dataContact)
    setCurrentPage(dataContact.pageInfo.currentPage)
    setNextPage(dataContact.pageInfo.nextPage)
    setPrevPage(dataContact.pageInfo.prevPage)
    setTotalPage(dataContact.pageInfo.totalPage)
    setTotalData(dataContact.pageInfo.totalData)

    }else{
      const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction?limit=5&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
        
      })

      setLoading()
      setHistoryTransaction(dataContact)
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
  }
}


useEffect(()=>{
  GetHistoryTransaction()
},[])

//==================================================================================================================================//

    return (
      <>
      {/* <button onClick={debug}>ygashduy <br /> asdadasd <br /> asdasd</button> */}
        <Navbar home={false} login={true} dashboard={false} />

        <main className={`${historyTransaction ? 'sm:h-[44rem]' : 'sm:h-screen'} flex gap-8 pt-10 pb-20 sm:pb-0`}>
          <Alert loading={loading} errMessage={errMessage}/>
          <Navigation />

          <section className="relative flex flex-col flex-1 gap-4 pt-3">
            <div className="items-center hidden gap-4 pt-10 sm:flex pl">
              <FiRotateCcw size={20} color="#764abc" />
              <div className="font-bold">History Transaction</div>
            </div>

            <div className={`flex flex-col ${historyTransaction ? 'gap-8' : 'gap-0'} p-4 sm:border sm:mr-10 max-h-[32rem]`}>
              <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between">
                  <p className="font-bold">Find Transaction</p>

                <form onSubmit={searchHistory} className="w-full sm:w-[15rem] h-fit flex ">
                  <label className="flex justify-between items-center pr-2 w-full border rounded">
                    <input
                      onChange={searchOnChange}
                      name='search'
                      type="text"
                      placeholder="Enter Phone Number"
                      className="text-xs outline-none bg-transparent w-full p-2 text-[#4F5665]"
                    />
                    <button type="submit">
                      <FiSearch
                        size={18}
                        className="text-[#4F5665] active:scale-95"
                      />
                    </button>
                  </label>
                </form>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:gap-6">
                {/* {listHistoryTransaction &&
                  listHistoryTransaction.map((item) => (
                    <CardHistoryTransaction
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      contactName={item.name}
                      PhoneNumber={item.PhoneNumber}
                      amount={item.amount}
                      type={item.type}
                      deleteHistoryOrder={deleteHistoryOrder}
                      cardShow={cardShow}
                      handleCard={setCardShow}
                    />
                  ))} */}

                {historyTransaction &&
                  historyTransaction.results.map((item) => (
                    <CardHistoryTransaction
                      key={item.id}
                      id={item.id}
                      image={item.sender.id == profile.id? item.recipient.picture : item.sender.picture}
                      contactName={item.sender.id == profile.id? item.recipient.fullName : item.sender.fullName}
                      PhoneNumber={item.sender.id == profile.id? item.recipient.phone : item.sender.phone}
                      amount={item.amount}
                      type={item.sender.id == profile.id? 'asda' : 'income'}
                      deleteHistoryOrder={deleteHistoryOrder}
                      cardShow={cardShow}
                      handleCard={() => console.log(`klik ${item.id}`)}
                    />
                  ))}
              </div>

              {historyTransaction && (
              <div className='text-[#4F5665] text-sm hidden sm:flex justify-between w-full'>
                <p>Show {historyTransaction.results.length} of {totalData} History Transaction</p>
                <PageNavigation totalPage={totalPage} currentPage={currentPage} handleNext={next} handlePrev={prev} handlePage={page}/>
              </div>
              )}
              
            </div>

            <CardDetailHistoryTransaction cardShow={cardShow} handleCard={setCardShow}/>
            <ResponsiveNavigation/>
          </section>
        </main>
      </>
    );
}

export default HistoryTransaction;
