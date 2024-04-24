import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import defaultProfile from '../assets/media/default-profile.png'
import ResponsiveNavigation from "../components/ResponsiveNavigation"
import Alert from "../components/Alert"
import {ConfirmCard} from "../components/Alert"
import { ProfileHeader, Input, Button } from "../components/Piece";

import axios from "axios";
import {FiEdit, FiTrash} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../redux/reducers/profile";

const Profile = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const dataProfile = useSelector(state => state.profile.data)
  

  const [preview, setPreview] = useState()
  const previewPicture = (event) => {
    const pictureUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(pictureUrl);
  }

  const [loading, setLoading] = useState()
  const [successMessage, setSuccessMessage] = useState()
  const [errMessage, setErrMessage] = useState()



  const updateProfile = async (event) => {
    event.preventDefault();
  
    const form = new URLSearchParams();
    const fields = ['fullName', 'email', 'phoneNumber']
    fields.forEach((field) => {
      if(event.target[field].value && dataProfile[field] !== event.target[field].value){
        form.append(field, event.target[field].value)
        event.target[field].value
      }
    })
    
    if(form.size == 0){
      setErrMessage('No data has been modified')

      setTimeout(() => {
        setErrMessage()
      }, 3000);
      return
    }
    
    setLoading(true)
    try {
      const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form.toString(), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setLoading()

      if(data.results){
        dispatch(setProfile(data.results))
        setSuccessMessage('update profile success')

        setTimeout(() => {
          setSuccessMessage()
        }, 3000);
      }

    } catch (error) {
      setLoading()
      setErrMessage(error.response.data.message)

      setTimeout(() => {
        setErrMessage()
      }, 3000);
    }
  }


  const updatePicture = async (event) => {
    event.preventDefault()
    const [file] = event.target.picture.files
    
    const pictureType = ['image/jpeg', 'image/jpg', 'image/png']
    if(!pictureType.includes(file.type)){
      setErrMessage('extension not allowed, only jpeg, jpg, and png!')
      
      setTimeout(() => {
        setErrMessage()
      }, 3000);
      return
    }
    
    
    if(file.size > 2 * 1024 * 1024){
      setErrMessage('file too large, picture must be 2MB or less')
      
      setTimeout(() => {
        setErrMessage()
      }, 3000);
      return
    }
    
    const form  = new FormData()
    form.append('picture', file)
    
    setLoading(true)
    try {
      const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      setLoading()
      dispatch(setProfile(data.results))
      setSuccessMessage('update picture success')

      setTimeout(() => {
        setSuccessMessage()
      }, 3000);
      
      setPreview()
    } catch (error) {
      setLoading()
      setErrMessage(error.response.data.message)

      setTimeout(() => {
        setErrMessage()
      }, 3000);
    }
  }


  const [confirmCard, setConfirmCard] = useState()

  const deletePicture = async (event) => {
    console.log('delete picture')
    setLoading(true)
    setConfirmCard()
    event.preventDefault()
    
    const form  = new URLSearchParams()
    form.append('picture', 'null')

    try {
      const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      setLoading()
      dispatch(setProfile(data.results))
      setSuccessMessage('delete picture success')

      setTimeout(() => {
        setSuccessMessage()
      }, 3000);

    } catch (error) {
      setLoading()
      setErrMessage(error.response.data.message)

      setTimeout(() => {
        setErrMessage()
      }, 3000);
    }
  }


   return (
     <>
       <Navbar />
       <main className="sm:h-[48rem] flex py-10 pt-10 pb-10 sm:pb-0 px-5 sm:px-0">
        <Navigation />
        {!confirmCard && (
          <Alert loading={loading} successMessage={successMessage} errMessage={errMessage}/>
        )}

         <section className="relative flex flex-col flex-1 gap-4 mt-4 sm:pl-8">

          <ConfirmCard confirmCard={confirmCard} deletePicture={deletePicture} setConfirmCard={setConfirmCard}/>

          <ProfileHeader/>

           <div className="flex flex-col flex-1 gap-1 p-4 sm:border sm:mr-10 mb-6">
             <div className="font-bold">Profile Picture</div>

             <div className="flex flex-col gap-4 py-4 sm:p-4 rounded justify-center-center sm:pl-8">
               <form onSubmit={updatePicture} className="flex gap-4">
                 <label className="relative">
                    <img
                       className="object-cover rounded-md w-24 h-24 sm:w-28 sm:h-28"
                       src={
                        !preview && dataProfile && !dataProfile.picture ? defaultProfile
                        : !preview && dataProfile && dataProfile.picture ? dataProfile.picture
                        : preview}>
                    </img>

                   {preview && (
                     <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md" />
                   )}

                   <input
                     onChange={previewPicture}
                     multiple={false}
                     type="file"
                     accept=".jpg, .jpeg, .png"
                     name="picture"
                     className="hidden"
                   />
                 </label>

                 <div className="flex flex-col justify-center gap-2 sm:gap-4">
                   <button
                     disabled={!preview}
                     type="submit"
                     className="text-white bg-[#764abc] rounded flex items-center justify-center sm:gap-3 p-2 active:scale-95 disabled:active:scale-100 transition-all"
                   >
                     <FiEdit className="text-sm"/>
                     <p className="text-xs">Change Profile</p>
                   </button>

                   <button
                     disabled={!dataProfile.picture}
                     onClick={() => setConfirmCard(true)}
                     className=" text-white border border-[#D00000] rounded flex items-center justify-center gap-1 sm:gap-3 p-2 active:scale-95 disabled:active:scale-100 transition-all"
                   >
                     <FiTrash className={`text-[#D00000] text-sm`} />
                     <p className={`text-xs text-[#D00000]`}>Delete Profile</p>
                   </button>
                 </div>
               </form>

               {!preview && dataProfile && !dataProfile.picture && (
                <p className="text-xs text-[#4F5665]">
                  The Profile Picture must be 2MB or less
                </p>
               )}
             </div>

             <form onSubmit={updateProfile} className="flex flex-col gap-4">

               <Input profile={true} label="Full Name" placeholder="Enter Full Name" name="fullName" type="text" defaultValue={dataProfile.fullName}/>
               <Input profile={true} label="Phone" placeholder="Enter Your Phone Number" name="phoneNumber" type="text" defaultValue={dataProfile.phoneNumber}/>
               <Input profile={true} label="Email" placeholder="Enter Your Email" name="email" type="email" defaultValue={dataProfile.email}/>

               <div className="flex flex-col">
                 <p className="text-xs">Password</p>
                 <Link
                   to="/profile/change-password"
                   className="text-[#764abc] text-xs"
                 >
                   Change Password
                 </Link>
               </div>

               <div className="flex flex-col">
                 <p className="text-xs">Pin</p>
                 <Link
                   to="/profile/change-pin"
                   className="text-[#764abc] text-xs"
                 >
                   Change Pin
                 </Link>
               </div>

               <Button/>
             </form>
           </div>
           <ResponsiveNavigation />
         </section>
       </main>
     </>
   );
}

export default Profile;