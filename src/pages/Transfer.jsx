import { FaStar } from "react-icons/fa";
import { FiSearch, FiSend, FiStar } from 'react-icons/fi'
import { useState } from "react";
import { Link } from "react-router-dom";

import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";


const TransferSteps = ({steps, value}) => {
    return (
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-[#4F5665] w-5 h-5 flex justify-center items-center text-white">
          {steps}
        </div>
        <div className="text-[#4F5665]">{value}</div>
      </div>
    );
}


const CardListContact = ({id, image, contactName, number, isFavorite}) => {
    return (
      <div className="flex items-center justify-between pl-24">
        <div>
          <img src={image} className="rounded h-10 w-10 object-cover" />
        </div>
        <Link to={`/transfer-detail/${id}`} className="active:underline">{contactName}</Link>
        <div className="flex items-center gap-24">
          <div>{number}</div>
          {isFavorite ? <FaStar color="orange" /> : <FiStar color="#4F5665" />}
        </div>
      </div>
    );
}

const Transfer = () => {
    const [listContact, setListContact] = useState([
        {
            id: 1,
            image: userPhoto,
            name: "Ghaluh 1",
            number: "(239)555-0108",
            isFavorite: true
        },
        {
            id: 2,
            image: userPhoto,
            name: "Ghaluh 2",
            number: "(239)555-0108",
            isFavorite: false
        },
        {
            id: 3, 
            image: userPhoto,
            name: "Ghaluh 3",
            number: "(239)555-0108",
            isFavorite: false
        },
        {
            id: 4,
            image: userPhoto,
            name: "Ghaluh 4",
            number: "(239)555-0108",
            isFavorite: false
        },
        {
            id: 5,
            image: userPhoto,
            name: "Ghaluh 5",
            number: "(239)555-0108",
            isFavorite: false
        },
        {
            id: 6,
            image: userPhoto,
            name: "Ghaluh 6",
            number: "(239)555-0108",
            isFavorite: false
        },
        {
            id: 7,
            image: userPhoto,
            name: "Ghaluh 7",
            number: "(239)555-0108",
            isFavorite: false
        },
        {
            id: 8,
            image: userPhoto,
            name: "Ghaluh 8",
            number: "(239)555-0108",
            isFavorite: false
        },

    ])

    return (
      <>
        <Navbar home={false} login={true} dashboard={false} />

        <main className="h-[48rem] flex gap-8 pt-10">
          <Navigation />

          <section className="flex-1 flex flex-col gap-4 pt-3">
            <div className="flex items-center gap-4 pt-10 pl">
              <FiSend size={20} color="#764abc" />
              <div className="font-bold">Transfer Money</div>
            </div>

            <div className="flex items-center gap-4">
              <TransferSteps steps={1} value="Find People" />
              <hr className="border-[#4F5665] border-dashed h-0 w-12 " />
              <TransferSteps steps={2} value="Set Nominal" />
              <hr className="border-[#4F5665] border-dashed h-0 w-12 " />
              <TransferSteps steps={3} value="Finish" />
            </div>

            <div className="border flex-1 mr-10 mb-10 p-4 flex flex-col gap-8">
              <div className="flex justify-between">
                <div>
                  <div className="font-bold">Find People</div>
                  <div className="text-xs text-[#4F5665]">
                    8 Result Found For Ghaluh
                  </div>
                </div>

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
                {listContact &&
                  listContact.map((item) => (
                    <CardListContact
                      id={item.id}
                      image={item.image}
                      contactName={item.name}
                      number={item.number}
                      isFavorite={item.isFavorite}
                    />
                  ))}
              </div>
            </div>
          </section>
        </main>
      </>
    );
}

export default Transfer;