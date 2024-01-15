import { FiSearch, FiStar, FiRotateCcw, FiTrash2 } from 'react-icons/fi'
import { useState } from "react";
import { Link } from "react-router-dom";

import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import PageNavigation from '../components/PageNavigation';


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


const CardHistoryTransaction = ({id, image, contactName, PhoneNumber, amount, type}) => {
    return (
      <div className="flex items-center justify-between pl-24">
        <div>
          <img src={image} className="rounded h-10 w-10 object-cover" />
        </div>
        <div>{contactName}</div>
        <div>{PhoneNumber}</div>
        <div className="flex items-center gap-24">
          <div className={`${type === "income" ? 'text-[#1EC15F]': 'text-[#D00000]'}`}>RP.{amount.toLocaleString('id')}</div>
          <FiTrash2 color='#D00000'/>
        </div>
      </div>
    );
}


const HistoryTransaction = () => {
    const [listHistoryTransaction, setListHistoryTransaction] = useState([
        {
            id: 1,
            image: userPhoto,
            name: "Ghaluh 1",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "income"
        },
        {
            id: 2,
            image: userPhoto,
            name: "Ghaluh 2",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "expense"
        },
        {
            id: 3, 
            image: userPhoto,
            name: "Ghaluh 3",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "income"
        },
        {
            id: 4,
            image: userPhoto,
            name: "Ghaluh 4",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "expense"
        },
        {
            id: 5,
            image: userPhoto,
            name: "Ghaluh 5",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "income"
        },
        {
            id: 6,
            image: userPhoto,
            name: "Ghaluh 6",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "expense"
        },
        {
            id: 7,
            image: userPhoto,
            name: "Ghaluh 7",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "income"
        },
        {
            id: 8,
            image: userPhoto,
            name: "Ghaluh 8",
            PhoneNumber: "(308) 555-0121",
            amount: 50000,
            type: "expense"
        },

    ])

    return (
      <>
        <Navbar home={false} login={true} dashboard={false} />

        <main className="h-[48rem] flex gap-8 pt-10">
          <Navigation />

          <section className="flex-1 flex flex-col gap-4 pt-3">
            <div className="flex items-center gap-4 pt-10 pl">
              <FiRotateCcw size={20} color="#764abc" />
              <div className="font-bold">History Transaction</div>
            </div>

            <div className="border flex-1 mr-10 mb-10 p-4 flex flex-col gap-8">
              <div className="flex justify-between">
                  <p className="font-bold">Find Transaction</p>

                <form className="w-[15rem] h-fit flex">
                  <label className="border rounded relative w-full">
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

              <div className="flex flex-col justify-center gap-4">
                {listHistoryTransaction &&
                  listHistoryTransaction.map((item) => (
                    <CardHistoryTransaction
                      id={item.id}
                      image={item.image}
                      contactName={item.name}
                      PhoneNumber={item.PhoneNumber}
                      amount={item.amount}
                      type={item.type}
                    />
                  ))}
              </div>

              <div className='text-[#4F5665] text-sm flex justify-between w-full'>
                <p>Show 8 History of 100 History</p>
                <PageNavigation/>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}

export default HistoryTransaction;