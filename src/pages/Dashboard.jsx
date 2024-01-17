import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import IncomeChart from "../components/IncomeChart";
import balance from "../assets/media/balance.svg"
import withdraw from "../assets/media/u_money-withdraw.svg"
import withdraw1 from "../assets/media/u_money-withdraw-1.svg"
import moneyInsert from "../assets/media/u_money-insert.svg"
import send from "../assets/media/Send.svg"
import p1 from "../assets/media/1.png"
import { FiTrendingDown, FiTrendingUp,FiChevronDown } from "react-icons/fi";
import ResponsiveNavigation from "../components/ResponsiveNavigation"

const Dashboard = () => {
    return ( 
        <div className="">
        <Navbar />
       <main className="h-[48rem] flex flex-col sm:flex-row pt-10">
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
                    Rp. 120.000
                  </p>
                </div>
                <div className="flex items-center text-xs text-green-500 gap-x-1">
                  <p className="">+2%</p>
                  <div>
                    <FiTrendingUp 
                    alt="ArrowRise-success"
                      className="w-4 h-4"
                      />
                  </div>
                  <p>3 Days Ago</p>
                </div>
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
                    Rp. 2.120.000
                  </p>
                </div>
                <div className="flex items-center text-xs text-green-500 gap-x-1">
                  <p className="">+11.01%</p>
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
                    Rp. 200.000
                  </p>
                </div>
                <div className="flex items-center text-xs text-red-500 gap-x-1">
                  <p className="">-5.06%</p>
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
                <button className="bg-[#764abc] p-3 rounded-md flex justify-center items-center gap-x-2 hover:bg-violet-400 focus:ring">
                  <img
                    src={moneyInsert}
                    alt="u_money_insert"
                    className="w-6 h-6"
                  />
                  <p className="text-sm xl:text-base text-light">Top Up</p>
                </button>
                <button className="bg-[#764abc] p-3 rounded-md flex justify-center items-center gap-x-2 hover:bg-violet-400 focus:ring">
                  <img
                    src={send}
                    alt="Send"
                    className="w-6 h-6"
                  />
                  <p className="text-sm xl:text-base text-light">Transfer</p>
                </button>
              </div>
            </section>
            <section className="border border-[#E8E8E8] p-[19px] rounded-md flex flex-col items-center gap-y-4">
              <div className="flex flex-col w-full gap-y-3 md:flex-row md:justify-between md:items-center">
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
              </div>
              <div className="w-full">
                <IncomeChart></IncomeChart>
              </div>
            </section>
          </section>
          <aside className="flex-1 ">
            <div className="border border-[#E8E8E8] p-[19px] rounded-md flex flex-col gap-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold xl:text-base text-dark">
                  Transaction History
                </p>
                <p className="text-xs font-medium text-primary">See All</p>
              </div>
              <div className="flex flex-col gap-y-7">
                <div className="flex flex-row gap-x-6">
                  <div className="lg:self-start">
                    <img
                      src={p1}
                      alt="profile"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-dark">Robert Fox</p>
                      <p className="text-secondary">Transfer</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">+Rp50.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-6">
                  <div className="lg:self-start">
                    <img
                    src={p1}
                      alt="profile"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-dark">Robert Fox</p>
                      <p className="text-secondary">Transfer</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">+Rp50.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-6">
                  <div className="lg:self-start">
                    <img
                    src={p1}
                      alt="profile"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-dark">Robert Fox</p>
                      <p className="text-secondary">Transfer</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">+Rp50.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-6">
                  <div className="lg:self-start">
                    <img
                    src={p1}
                      alt="profile"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-dark">Robert Fox</p>
                      <p className="text-secondary">Transfer</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">+Rp50.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-6">
                  <div className="lg:self-start">
                    <img
                    src={p1}
                      alt="profile"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-dark">Robert Fox</p>
                      <p className="text-secondary">Transfer</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">+Rp50.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-6">
                  <div className="lg:self-start">
                    <img
                    src={p1}
                      alt="profile"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-dark">Robert Fox</p>
                      <p className="text-secondary">Transfer</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">+Rp50.000</p>
                    </div>
                  </div>
                </div>
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