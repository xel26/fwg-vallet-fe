import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import IncomeChart from "../components/IncomeChart";
import balance from "../assets/media/balance.svg"
import withdraw from "../assets/media/u_money-withdraw.svg"
import DashTransactionHistory from "../components/DashTransactionHistory";
import withdraw1 from "../assets/media/u_money-withdraw-1.svg"
import moneyInsert from "../assets/media/u_money-insert.svg"
import send from "../assets/media/Send.svg"
import { Link } from "react-router-dom";
import p1 from "../assets/media/1.png"
import { FiTrendingDown, FiTrendingUp,FiChevronDown } from "react-icons/fi";
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    
  const token = useSelector(state => state.auth.token)
  const profile = useSelector(state => state.profile.data)
  const [wallet, setWallet] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  const Income = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/wallet/income`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }})

        setIncome(data.results)

    } catch (error) {
      console.log(error)
    }
  }


  const Expense = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/wallet/expense`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }})

        setExpense(data.results)

    } catch (error) {
      console.log(error)
    }
  }
 
  
  useEffect(()=>{
    if(token){
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/wallet/${profile?.id}`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      }).then(({data})=>{
       setWallet(data.results)
        
      }).catch((err)=>{console.log(err)})
    }
  },[token, profile.id])


  const [transferList, setTransferList] = useState()

  useEffect(()=>{
    if(token){
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-transaction`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      }).then(({data})=>{
       setTransferList(data.results)
        
      }).catch((err)=>{console.log(err)})
    }

    Income()
    Expense()
  },[token])

    return ( 
        <div className="">
        <Navbar />
       <main className="sm:h-[44rem] flex flex-col sm:flex-row pt-10 pb-20 sm:pb-0">
        <Navigation />

        <section className="flex flex-col flex-1 px-5 py-4 gap-y-4 lg:flex-row md:gap-x-5 md:py-11 md:px-10 md:justify-between">
          <section className="flex flex-col lg:w-2/3 gap-y-[18px]">
            <section className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:justify-between">
              <div className="border border-[#E8E8E8] p-[19px] flex flex-col gap-y-4 w-full rounded-md">
                <div className="flex gap-x-3.5">
                  <div>
                    <img
                        src={balance}
                      alt="balance"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-secondary">Balance</p>
                </div>
                <div>
                  <p className="text-xl font-medium xl:text-2xl text-dark">
                    Rp.{wallet && wallet.balance.toLocaleString('id')}
                  </p>
                </div>

                {/* <div className="flex items-center text-xs text-green-500 gap-x-1">
                  <p className="">+2%</p>
                  <div>
                    <FiTrendingUp 
                    alt="ArrowRise-success"
                      className="w-4 h-4"
                      />
                  </div>
                  <p>3 Days Ago</p>
                </div> */}

              </div>
              <div className="border border-[#E8E8E8] p-[19px] flex flex-col gap-y-4 w-full rounded-md">
                <div className="flex gap-x-3.5">
                  <div>
                    <img
                      src={withdraw}
                      alt="balance"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-secondary">Income</p>
                </div>
                <div>
                  <p className="text-xl font-medium xl:text-2xl text-dark">
                    Rp. {income ? income.toLocaleString('id') : 0}
                  </p>
                </div>
                <div className="flex items-center text-xs text-green-500 gap-x-1">
                  {/* <p className="">+11.01%</p> */}
                  <div>
                  <FiTrendingUp 
                    alt="ArrowRise-success"
                      className="w-4 h-4"
                      />
                  </div>
                </div>
              </div>
              <div className="border border-[#E8E8E8] p-[19px] flex flex-col gap-y-4 w-full rounded-md">
                <div className="flex gap-x-3.5">
                  <div>
                    <img
                      src={withdraw1}
                      alt="balance"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-secondary">Expense</p>
                </div>
                <div>
                  <p className="text-xl font-medium xl:text-2xl text-dark">
                    Rp. {expense ? expense.toLocaleString('id') : 0}
                  </p>
                </div>
                <div className="flex items-center text-xs text-red-500 gap-x-1">
                  {/* <p className="">-5.06%</p> */}
                  <div>
                  <FiTrendingDown 
                    alt="ArrowRise-success"
                      className="w-4 h-4"
                      />
                  </div>
                </div>
              </div>
            </section>
            <section className="border border-[#E8E8E8] p-[19px] rounded-md flex flex-col gap-y-3 md:flex-row justify-between md:items-center">
              <p className="font-medium">Fast Service</p>
              <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-[14px]">
                <Link to="/top-up" className="bg-[#764abc] p-3 rounded-md flex justify-center items-center gap-x-2 active:scale-95 transition-all">
                  <img
                    src={moneyInsert}
                    alt="u_money_insert"
                    className="w-6 h-6"
                  />
                  <p className="text-sm xl:text-base text-light text-white">Top Up</p>
                </Link>

                <Link to="/transfer" className="bg-[#764abc] p-3 rounded-md flex justify-center items-center gap-x-2 active:scale-95 transition-all">
                  <img
                    src={send}
                    alt="Send"
                    className="w-6 h-6"
                  />
                  <p className="text-sm xl:text-base text-light text-white">Transfer</p>
                </Link>
              </div>
            </section>
            <section className="border border-[#E8E8E8] p-[19px] rounded-md flex flex-col items-center gap-y-4">
              
              {/* <div className="flex flex-col w-full gap-y-3 md:flex-row md:justify-between md:items-center">
                <p className="font-medium text-dark">Income Chart</p>
                <div className="flex flex-col gap-y-3 md:flex-row gap-x-4">
                  <button className="p-3 bg-[#F1F1F1] rounded-md flex gap-x-2 items-center justify-between">
                    <p className="text-sm font-medium text-dark">7 Days</p>
                    <FiChevronDown />
                  </button>
                  <button className="p-3 bg-[#F1F1F1] rounded-md flex gap-x-2 items-center justify-between">
                    <p className="text-sm font-medium text-dark">Income</p>
                    <FiChevronDown />
                  </button>
                </div>
              </div> */}

              <div className="w-full">
                <IncomeChart></IncomeChart>
              </div>
            </section>
          </section>
          <aside className="flex-1 ">
            <div className="border border-[#E8E8E8] p-[19px] rounded-md flex flex-col gap-y-6 overflow-y-hidden">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-base text-dark">
                  Transaction History
                </p>
                <Link to='/history-transaction'>
                  <p className=" font-medium text-primary">See All</p>
                </Link>
              </div>
              <div className="flex flex-col gap-y-4 sm:gap-y-7">
                
              {transferList &&
                  transferList.map((item) => (
                    <DashTransactionHistory
                      key={item.id}
                      id={item.id}
                      picture={item.sender.id == profile.id? item.recipient.picture : item.sender.picture}
                      name={item.sender.id == profile.id? item.recipient.fullName : item.sender.fullName}
                      PhoneNumber={item.sender.id == profile.id? item.recipient.phone : item.sender.phone}
                      amount={item.amount}
                      type={item.sender.id == profile.id? 'asda' : 'income'}
                    />
                  ))}
              </div>
            </div>
          </aside>
        </section>
        <ResponsiveNavigation/>
      </main>

        </div>
    )
}

export default Dashboard;