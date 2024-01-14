import { FaCheckCircle, FaStar, FaMoneyBill } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'

import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Button from '../components/Button'

const TransferDetail = ({isFavorite=false}) => {
    return (
      <>
        <Navbar home={false} login={true} dashboard={false} />
        <main className="h-[48rem] flex gap-8 pt-10">
          <Navigation />

          <section className="flex-1 flex flex-col gap-4 pt-3">
            <div className="border flex-1 mr-10 mb-10 p-4 flex flex-col gap-8">
              <div className="font-bold">People Information</div>

              <div className="flex justify-between items-center pl-8 bg-[#E8E8E84D] rounded p-4">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={userPhoto}
                      className="rounded h-20 w-20 object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-1">
                    <p>Ghaluh</p>
                    <p className="text-[#4F5665]">(239)555-0108</p>
                    <button className="text-white bg-[#764abc] rounded flex items-center justify-center gap-3 p-1">
                      <FaCheckCircle />
                      <p className="text-xs">Verified</p>
                    </button>
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
                  <div className="w-full border rounded flex items-center gap-2 p-2">
                    <FaMoneyBill />
                    <input
                      type="text"
                      name="transferAmount"
                      placeholder="Enter Nominal Transfer"
                      className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-2">
                  <p className="font-bold">Notes</p>
                  <p className="text-[#4F5665] text-xs">
                    You can add some notes for this transfer such as payment
                    coffee or something
                  </p>
                    <textarea
                      className="w-full border rounded flex items-center gap-2 p-2 outline-none text-[#4F5665] text-sm"
                      name="notes"
                      placeholder="Enter Some Notes"
                    />
                </label>
                
                <Button value="Submit & Transfer"/>
              </form>
            </div>
          </section>
        </main>
      </>
    );
}

export default TransferDetail;