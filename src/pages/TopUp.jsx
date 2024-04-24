import { FaCheckCircle, FaMoneyBill } from 'react-icons/fa'
import { FiUpload } from 'react-icons/fi'
import { useEffect, useState } from 'react';

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import defaultProfile from '../assets/media/default-profile.png'
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import CardStatus from '../components/CardStatus';
import Alert from "../components/Alert"

import axios from 'axios';
import { useSelector } from 'react-redux';

const CardListPaymentMethod = ({value, logo, label}) => {
    return (
        <label className="bg-[#E8E8E84D] rounded p-2 flex gap-4 items-center">
        <input required type="radio" name="paymentMethod" value={value} />
        <div className='w-8 h-8 flex items-center justify-center'>
            {/* <img src={`${import.meta.env.VITE_BACKEND_URL}/uploads/paymentMethods/${logo}`} /> */}
            <img src={logo}  className='h-full w-full object-contain'/>
        </div>
        <p className='text-[#4F5665] text-sm'>{label}</p>
    </label>
    )
}


const PaymentList = ({list, idr}) => {
    return (
      <div className="flex justify-between">
        <h5 className="text-[#4F5665] font-semibold text-sm sm:text-base">
          {list}
        </h5>
        <h5 className="text-sm font-semibold sm:text-base">Idr.{idr?.toLocaleString('id')}</h5>
      </div>
    );
  };

  
  const TopUp = () => {
    const profile = useSelector(state => state.profile.data)
    const token = useSelector(state => state.auth.token)

    
    const [loading, setLoading] = useState()
    const [cardShow, setCardShow] = useState()
    const [cardStatus, setCardStatus] = useState()

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
      setLoading(true)
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
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/deposit`, form, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setLoading()

        setCardShow(true)
        setCardStatus(true)
      } catch (error) {
        setLoading()
        setCardShow(true)
        setCardStatus(false)
      }
    } 



    const [paymentMethod, setPaymentMethod] = useState()
    const getAllPaymentMethod = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/deposit`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        setPaymentMethod(data.results)

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

      <main className="sm:h-[55rem] flex gap-8 pt-10 pb-20 sm:pb-0 px-5 sm:px-0">
        <Alert loading={loading} />
        <Navigation />

        <section className="relative flex flex-col flex-1 gap-4 pt-3">
          <CardStatus
            show={cardShow}
            status={cardStatus}
            setShow={setCardShow}
            header={`TOP UP`}
            transaction="top up"
          />

          <div className="items-center hidden gap-4 pt-10 sm:flex pl">
            <FiUpload size={20} color="#764abc" />
            <div className="font-bold">Top Up Account</div>
          </div>

          <form
            onSubmit={deposit}
            className="flex flex-col gap-4 sm:flex-row sm:gap-8 sm:pr-10"
          >
            <div className="flex flex-col flex-1 gap-4 p-4 sm:border sm:mb-10 sm:gap-8">
              <div className="font-bold">Account Information</div>

              <div className="flex justify-between items-center sm:pl-8 bg-[#E8E8E84D] rounded p-2 sm:p-4">
                <div className="flex gap-4">
                  <div>
                    <img
                      // src={profile.picture ? `${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${profile.picture}` : defaultProfile}
                      src={profile.picture ? profile.picture : defaultProfile}
                      className="object-cover w-20 h-20 rounded"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-1">
                    <p>{profile.fullName}</p>
                    <p className="text-[#4F5665] text-sm sm:text-base">
                      {profile.phoneNumber}
                    </p>
                    <button className="text-white bg-[#764abc] rounded flex items-center gap-2 p-1.5 w-fit">
                      <FaCheckCircle />
                      <p className="text-xs">Verified</p>
                    </button>
                    {/* {profile.isVerified &&
                    <button className="text-white bg-[#764abc] rounded flex items-center justify-center gap-3 p-1">
                      <FaCheckCircle />
                      <p className="text-xs">Verified</p>
                    </button>
                    } */}
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
                  <div className="flex items-center w-full gap-2 p-2 border rounded">
                    <FaMoneyBill />
                    <input
                      required
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

            <div className="flex flex-col sm:border h-fit">
              <div className="flex h-12 p-3 font-semibold">
                <h4>Payment</h4>
              </div>
              <div className="flex flex-col gap-4 p-3 text-sm payment-summary">
                <PaymentList list="order" idr={order ? order : 0} />
                <PaymentList list="Tax" idr={tax < 1000 ? 1000 : tax} />

                <hr />

                <PaymentList list="Sub Total" idr={subTotal} />

                <button className="bg-[#764abc] text-white w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 transition-all flex justify-center">
                  Submit
                </button>
                <p className="text-xs text-[#4F5665]">
                  *Get Discount if you pay with Bank Central Asia
                </p>
              </div>
            </div>
          </form>
          <ResponsiveNavigation />
        </section>
      </main>
    </>
  );
};

export default TopUp;
