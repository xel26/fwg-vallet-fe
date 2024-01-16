import { FaCheckCircle, FaMoneyBill } from 'react-icons/fa'
import { FiUpload } from 'react-icons/fi'
import { useState } from 'react';

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import BCA from '../assets/media/BCA.png'
import BRI from '../assets/media/BRI.png'
import DANA from '../assets/media/DANA.png'
import Gopay from '../assets/media/gopay.png'
import OVO from '../assets/media/ovo.png'
import userPhoto from '../assets/media/user.jpg'

const CardListPaymentMethod = ({value, logo, label}) => {
    return (
        <label className="bg-[#E8E8E84D] rounded p-2 flex gap-4 items-center">
        <input type="radio" name="paymentMethod" value={value} />
        <div>
            <img src={logo} />
        </div>
        <p className='text-[#4F5665] text-sm'>{label}</p>
    </label>
    )
}


const PaymentList = ({list, idr}) => {
    return (
      <div className="flex justify-between">
        <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">
          {list}
        </h5>
        <h5 className="font-semibold text-xs sm:text-base">Idr.{idr.toLocaleString('id')}</h5>
      </div>
    );
  };

const TopUp = () => {
    const [listPaymentMethod, setListPaymentMethod] = useState([
        {
            value: "bank-rakyat-indonesia",
            logo: BRI,
            label: "Bank Rakyat Indonesia"
        },
        {
            value: "dana",
            logo: DANA,
            label : "Dana"
        },
        {
            value: "bank-central-asia",
            logo: BCA,
            label: "Bank Central Asia"
        },
        {
            value: "gopay",
            logo: Gopay,
            label: "Gopay"
        },
        {
            value: "ovo",
            logo: OVO,
            label: "Ovo"
        }
    ])
  return (
    <>
      <Navbar home={false} login={true} dashboard={false} />

      <main className="sm:h-[52rem] flex gap-8 pt-10">
        <Navigation />

        <section className="flex-1 flex flex-col gap-4 pt-3">
          <div className="hidden sm:flex items-center gap-4 pt-10 pl">
            <FiUpload size={20} color="#764abc" />
            <div className="font-bold">Top Up Account</div>
          </div>

          <form className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:pr-10">
            <div className="sm:border flex-1 sm:mb-10 p-4 flex flex-col gap-4 sm:gap-8">
              <div className="font-bold">Account Information</div>

              <div className="flex justify-between items-center sm:pl-8 bg-[#E8E8E84D] rounded p-2 sm:p-4">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={userPhoto}
                      className="rounded h-20 w-20 object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p>Ghaluh</p>
                    <p className="text-[#4F5665]">(239)555-0108</p>
                    <button className="text-white bg-[#764abc] rounded flex items-center justify-center gap-3 p-1">
                      <FaCheckCircle />
                      <p className="text-xs">Verified</p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                  <p className="font-bold">Amount</p>
                  <p className="text-[#4F5665] text-xs">
                    Type the amount you want to top up and then press continue
                    to the next steps.
                  </p>
                  <div className="w-full border rounded flex items-center gap-2 p-2">
                    <FaMoneyBill />
                    <input
                      type="text"
                      name="topUpAmount"
                      placeholder="Enter Nominal Top Up"
                      className="text-[#4F5665] w-full outline-none bg-transparent text-xs sm:text-sm"
                    />
                  </div>
                </label>

                <div className="flex flex-col gap-2">
                  <p className="font-bold">Payment Method</p>
                  <p className="text-[#4F5665] text-xs">
                    Choose your payment method for top up account
                  </p>

                  <div className="flex flex-col gap-4">
                    {listPaymentMethod &&
                      listPaymentMethod.map((item, index) => (
                        <CardListPaymentMethod
                          key={index}
                          value={item.value}
                          logo={item.logo}
                          label={item.label}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:border h-fit flex flex-col">
              <div className="flex p-3 h-12 font-semibold">
                <h4>Payment</h4>
              </div>
              <div className="payment-summary p-3 text-sm flex flex-col gap-4">
                <PaymentList list="order" idr={40000} />
                <PaymentList list="Delivery" idr={0} />
                <PaymentList list="Tax" idr={4000} />

                <hr />

                <PaymentList list="Sub Total" idr={44000} />

                <button
                  className="bg-[#764abc] text-white w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 transition-all flex justify-center"
                >
                  Submit
                </button>
                <p className="text-xs text-[#4F5665]">
                  *Get Discount if you pay with Bank Central Asia
                </p>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default TopUp;
