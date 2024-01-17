import { FiSearch, FiStar, FiRotateCcw, FiTrash2 } from 'react-icons/fi'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import PageNavigation from '../components/PageNavigation';
import CardDetailHistoryTransaction from '../components/CardDetailHistoryTransaction';
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import { useSelector } from 'react-redux';
import axios from 'axios';

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


const CardHistoryTransaction = ({id, image, contactName, PhoneNumber, amount, type, deleteHistoryOrder, cardShow, handleCard}) => {
    return (
      <div onClick={() => handleCard(true)} className={`flex items-center justify-between sm:pl-24 sm:gap-36 ${id % 2 !== 0 ? 'bg-[#F9FAFB] border-b': 'bg-white'} p-2`}>
        <div className='hidden sm:block'>
          <img src={`http://localhost:5555/uploads/profiles/${image}`} className="object-cover w-10 h-10 rounded" />
        </div>
        <div className='flex flex-col sm:flex-row sm:gap-24 flex-1 text-[#4F5665]'>
        <div className='text-sm sm:text-base'>{contactName}</div>
        <div className='text-sm sm:text-base'>{PhoneNumber}</div>
        </div>
        <div className="flex items-center gap-24">
          <div className={`${type === "income" ? 'text-[#1EC15F]': 'text-[#D00000]'}`}>RP.{amount.toLocaleString('id')}</div>
          <FiTrash2 onClick={() => deleteHistoryOrder(id)} color='#D00000' className='hidden sm:block'/>
        </div>
      </div>
    );
}

const HistoryTransaction = () => {
    const deleteHistoryOrder = (id) => {
      setListHistoryTransaction(listHistoryTransaction = listHistoryTransaction.filter((item) => item.id !== id))
    }

    const [cardShow, setCardShow] = useState(false)

//===================================================================================================================================//

const token = useSelector(state => state.auth.token)
const [transferList, setTransferList] = useState()

useEffect(()=>{
  if(token){
    axios.get(`http://localhost:5555/customer/history-transaction`, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    }).then(({data})=>{
     setTransferList(data.results)
      
    }).catch((err)=>{console.log(err)})
  }
},[token])

//==================================================================================================================================//

    return (
      <>
      {/* <button onClick={debug}>ygashduy <br /> asdadasd <br /> asdasd</button> */}
        <Navbar home={false} login={true} dashboard={false} />

        <main className="sm:h-[48rem] flex gap-8 pt-10">
          <Navigation />

          <section className="relative flex flex-col flex-1 gap-4 pt-3">
            <div className="items-center hidden gap-4 pt-10 sm:flex pl">
              <FiRotateCcw size={20} color="#764abc" />
              <div className="font-bold">History Transaction</div>
            </div>

            <div className="flex flex-col flex-1 gap-8 p-4 sm:border sm:mr-10 sm:mb-10">
              <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between">
                  <p className="font-bold">Find Transaction</p>

                <form className="w-full sm:w-[15rem] h-fit flex ">
                  <label className="relative w-full border rounded">
                    <input
                      type="text"
                      placeholder="Enter Number Or Full Name"
                      className="text-xs outline-none bg-transparent w-full p-2 text-[#4F5665]"
                    />
                    <FiSearch
                      size={18}
                      className="absolute right-0 top-2 text-[#4F5665]"
                    />
                  </label>
                  <button type="submit" className="hidden"></button>
                </form>
              </div>

              <div className="flex flex-col justify-center">
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

                {transferList &&
                  transferList.map((item) => (
                    <CardHistoryTransaction
                      key={item.id}
                      id={item.id}
                      image={item.sender.id == 1? item.recipient.picture : item.sender.picture}
                      contactName={item.sender.id == 1? item.recipient.fullName : item.sender.fullName}
                      PhoneNumber={item.sender.id == 1? item.recipient.phone : item.sender.phone}
                      amount={item.amount}
                      type={item.sender.id == 1? 'asda' : 'income'}
                      deleteHistoryOrder={deleteHistoryOrder}
                      cardShow={cardShow}
                      handleCard={setCardShow}
                    />
                  ))}
              </div>

              <div className='text-[#4F5665] text-sm hidden  sm:flex justify-between w-full'>
                <p>Show 8 History of 100 History</p>
                <PageNavigation/>
              </div>
            </div>

            <CardDetailHistoryTransaction cardShow={cardShow} handleCard={setCardShow}/>
            <ResponsiveNavigation/>
          </section>
        </main>
      </>
    );
}

export default HistoryTransaction;
