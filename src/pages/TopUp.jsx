import { FaCheckCircle, FaMoneyBill } from 'react-icons/fa'
import { FiUpload } from 'react-icons/fi'
import { useEffect, useState } from 'react';

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import userPhoto from '../assets/media/user.jpg'
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CardListPaymentMethod = ({value, logo, label}) => {
    return (
        <label className="bg-[#E8E8E84D] rounded p-2 flex gap-4 items-center">
        <input type="radio" name="paymentMethod" value={value} />
        <div >
            <img src={`http://localhost:5555/uploads/paymentMethods/${logo}`} />
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
        <h5 className="font-semibold text-xs sm:text-base">Idr.{idr?.toLocaleString('id')}</h5>
      </div>
    );
  };

  
  const TopUp = () => {
    const navigate = useNavigate()
    const profile = useSelector(state => state.profile.data)

    const token = useSelector(state => state.auth.token)
    const [paymentMethod, setPaymentMethod] = useState()

    const getAllPaymentMethod = async () => {
      try {
        const {data} = await axios.get('http://localhost:5555/customer/deposit', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        setPaymentMethod(data.results)

      } catch (error) {
        console.log(error)
      }

    }

    const [order, setOrder] = useState()
    const [tax, setTax] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

    const topUpAmount = (event) => {
      setOrder(parseInt(event.target.value))
      setTax(parseInt(event.target.value) * 1/10)
      if(parseInt(event.target.value) < 10000){
        setSubTotal(parseInt(event.target.value) + 1000)
      }else{
        setSubTotal(parseInt(event.target.value) + (parseInt(event.target.value) * 1/10))
      }
    }

    
    const deposit = async (event) => {
      event.preventDefault()
      
      const {value: amount} = event.target.topUpAmount
      const paymentMethod = Array.from(event.target.paymentMethod)

      const form = new URLSearchParams()
      form.append('amount', amount)
      paymentMethod.map((item) => {
        if(item.checked){
          form.append('paymentMethodId', item.value)
        }
      })

      try {
        const {data} = await axios.post('http://localhost:5555/customer/deposit', form, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log(data)

        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    } 


    useEffect(() => {
      getAllPaymentMethod()
    }, [])

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

          <form onSubmit={deposit} className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:pr-10">
            <div className="sm:border flex-1 sm:mb-10 p-4 flex flex-col gap-4 sm:gap-8">
              <div className="font-bold">Account Information</div>

              <div className="flex justify-between items-center sm:pl-8 bg-[#E8E8E84D] rounded p-2 sm:p-4">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={`http://localhost:5555/uploads/profiles/${profile.picture}`}
                      className="rounded h-20 w-20 object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p>{profile.fullName}</p>
                    <p className="text-[#4F5665]">{profile.phoneNumber}</p>
                    {!profile.isVerified &&
                    <button className="text-white bg-[#764abc] rounded flex items-center justify-center gap-3 p-1">
                      <FaCheckCircle />
                      <p className="text-xs">Verified</p>
                    </button>
                    }
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
                      onChange={topUpAmount}
                    />
                  </div>
                </label>

                <div className="flex flex-col gap-2">
                  <p className="font-bold">Payment Method</p>
                  <p className="text-[#4F5665] text-xs">
                    Choose your payment method for top up account
                  </p>

                  <div className="flex flex-col gap-4">
                    {paymentMethod &&
                      paymentMethod.map((item, index) => (
                        <CardListPaymentMethod
                          key={index}
                          value={item.id}
                          logo={item.image}
                          label={item.name}
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
                <PaymentList list="order" idr={order ? order : 0} />
                <PaymentList list="Tax" idr={tax < 1000 ? 1000 : tax} />

                <hr />

                <PaymentList list="Sub Total" idr={subTotal} />

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
          <ResponsiveNavigation/>
        </section>
      </main>
    </>
  );
};

export default TopUp;
