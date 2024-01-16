import { FaCheckCircle, FaStar, FaMoneyBill } from 'react-icons/fa'
import { FiStar, FiSend } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState, } from 'react'

import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Button from '../components/Button'
import CardStatusTransfer from '../components/CardStatusTransfer'
import CardEnterPin from '../components/CardEnterPin'
import TransferSteps from "../components/TransferSteps";



const TransferDetail = ({isFavorite=true}) => {
  const navigate = useNavigate()

  const [statusTransfer, setStatusTransfer] = useState(false)
  const [cardStatusShow, setCardStatusShow] = useState(false)

  const [cardEnterPinShow, setCardEnterPinShow] = useState(false)
  const [verified, setVerified] = useState(false)

    return (
      <>
        <Navbar home={false} login={true} dashboard={false} />
        <main className="h-fit sm:h-[48rem] flex pt-10">
          <Navigation />

          <section className="relative flex-1 flex flex-col gap-4 pt-4 sm:pl-8 ">
            <div className="hidden sm:flex items-center gap-4 pt-10 pl">
              <FiSend size={20} color="#764abc" />
              <div className="font-bold">Transfer Money</div>
            </div>

            <TransferSteps/>

            <div className="sm:border flex-1 sm:mr-10 sm:mb-10 p-4 flex flex-col gap-4 sm:gap-8">
              <div className="font-bold">People Information</div>

              <div className="flex justify-between items-center sm:pl-8 bg-[#E8E8E84D] rounded p-4">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={userPhoto}
                      className="rounded h-20 w-20 object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-1">
                    <p className='text-sm sm:text-base'>Ghaluh</p>
                    <p className="text-[#4F5665] text-sm sm:text-base">(239)555-0108</p>
                    {verified &&
                    <button className="text-white bg-[#764abc] rounded flex items-center justify-center gap-3 p-1">
                      <FaCheckCircle />
                      <p className="text-xs">Verified</p>
                    </button>
                    }
                  </div>
                </div>

                {isFavorite ? (
                  <FaStar color="orange" />
                ) : (
                  <FiStar color="#4F5665" />
                )}
              </div>

              <form className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                  <p className="font-bold">Amount</p>
                  <p className="text-[#4F5665] text-xs">
                    Type the amount you want to transfer and then press continue
                    to the next steps.
                  </p>
                  <label className="w-full border rounded flex items-center gap-2 p-2">
                    <FaMoneyBill />
                    <input
                      type="text"
                      name="transferAmount"
                      placeholder="Enter Nominal Transfer"
                      className="text-[#4F5665] w-full outline-none bg-transparent text-xs sm:text-sm"
                    />
                  </label>
                </label>

                <label className="flex flex-col gap-2">
                  <p className="font-bold">Notes</p>
                  <p className="text-[#4F5665] text-xs">
                    You can add some notes for this transfer such as payment
                    coffee or something
                  </p>
                  <textarea
                    className="w-full border rounded flex items-center gap-2 p-2 outline-none text-[#4F5665] text-xs sm:text-sm"
                    name="notes"
                    placeholder="Enter Some Notes"
                  />
                </label>

                <Button value="Submit & Transfer" />
              </form>

              <CardStatusTransfer
                cardStatusShow={cardStatusShow}
                statusTransfer={statusTransfer}
              />

              <CardEnterPin cardEnterPinShow={cardEnterPinShow} />
            </div>
          </section>
        </main>
      </>
    );
}

export default TransferDetail;