import { FaStar } from "react-icons/fa";
import { FiSearch, FiSend, FiStar } from 'react-icons/fi'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import TransferSteps from "../components/TransferSteps";
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import axios from "axios";
import { useSelector } from "react-redux";

import defaultProfile from '../assets/media/default-profile.png'


const CardListContact = ({id, image, contactName, number, isFavorite}) => {
    return (
      <div  className="flex items-center justify-between sm:pl-24">
        <div>
          <img src={image?`${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${image}`:defaultProfile} className="object-cover w-10 h-10 rounded" />
        </div>
        <div className="flex flex-col text-sm sm:flex-row sm:text-base sm:gap-44">
        <Link to={`/transfer-detail/${id}`} className="active:underline">{contactName}</Link>
        <div>{number}</div>
        </div>
          {isFavorite ? <FaStar color="orange" /> : <FiStar color="#4F5665" />}
      </div>
    );
}

const Transfer = () => {
  const token = useSelector(state => state.auth.token)

  const [listContact, setListContact] = useState([])
  
  const getContact = async () => {
    const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
      
    })
    setListContact(dataContact.results)
    
  }
  
  const [search, setSearch] = useState()
  const [contact, setContact] = useState()
  const searchPhone = async (e) => {
    e.preventDefault()
    const {value: phone} = e.target.search
    setSearch(phone)
    const { data: dataContact } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/contact-list/?phoneNumber=${phone}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    
    },{params: {
      phoneNumber: phone
    }})
    setContact(dataContact.results)
  }

  useEffect(()=>{
    getContact(),
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
  },[])


    // const [listContact, setListContact] = useState([
    //     {
    //         id: 1,
    //         image: userPhoto,
    //         name: "Ghaluh 1",
    //         number: "(239)555-0108",
    //         isFavorite: true
    //     },
    //     {
    //         id: 2,
    //         image: userPhoto,
    //         name: "Ghaluh 2",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },
    //     {
    //         id: 3, 
    //         image: userPhoto,
    //         name: "Ghaluh 3",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },
    //     {
    //         id: 4,
    //         image: userPhoto,
    //         name: "Ghaluh 4",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },
    //     {
    //         id: 5,
    //         image: userPhoto,
    //         name: "Ghaluh 5",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },
    //     {
    //         id: 6,
    //         image: userPhoto,
    //         name: "Ghaluh 6",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },
    //     {
    //         id: 7,
    //         image: userPhoto,
    //         name: "Ghaluh 7",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },
    //     {
    //         id: 8,
    //         image: userPhoto,
    //         name: "Ghaluh 8",
    //         number: "(239)555-0108",
    //         isFavorite: false
    //     },

    // ])

    return (
      <>
        <Navbar home={false} login={true} dashboard={false} />

        <main className="sm:h-[48rem] flex gap-8 pt-10">
          <Navigation />

          <section className="flex flex-col flex-1 gap-4 pt-3">
            <div className="items-center hidden gap-4 pt-10 sm:flex pl">
              <FiSend size={20} color="#764abc" />
              <div className="font-bold">Transfer Money</div>
            </div>

            <TransferSteps/>

            <div className="flex flex-col flex-1 gap-8 p-4 sm:border sm:mr-10 sm:mb-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-0">
                <div>
                  <div className="font-bold">Find People</div>
                  <div className="text-xs text-[#4F5665] hidden sm:block">
                    8 Result Found For Ghaluh
                  </div>
                </div>

                <form onSubmit={searchPhone} className="w-full sm:w-[15rem] h-fit flex">

                  <label className="relative w-full border rounded">

                    <input
                     id="search" 
                     name="search"
                      type="text"
                      placeholder="Enter Number Or Full Name"
                      className="text-xs outline-none bg-transparent w-full p-2 text-[#4F5665]"
                    />
                    <button type="submit">
                    <FiSearch
                      size={18}
                      className="absolute right-0 top-2 text-[#4F5665]"
                    />
                    </button>
                  </label>
                </form>
              </div>

              <div className="flex flex-col justify-center gap-6 sm:gap-4">
                {contact && search ? <CardListContact
                        key={contact.id}
                        id={contact.userId}
                        image={contact.picture}
                        contactName={contact.fullName}
                        number={contact.phoneNumber}
                  /> :
                  listContact?.map((item) => (
                    <CardListContact
                      key={item.userId}
                      id={item.userId}
                      image={item.picture}
                      contactName={item.fullName}
                      number={item.phoneNumber}
                      isFavorite={item.isFavorite}
                    />
                  )) }
              </div>
            </div>
            <ResponsiveNavigation/>
          </section>
        </main>
      </>
    );
}

export default Transfer;