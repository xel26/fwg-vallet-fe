import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Button from '../components/Button';
import defaultProfile from '../assets/media/default-profile.png'
import ResponsiveNavigation from "../components/ResponsiveNavigation"

import axios from "axios";

import { FiUsers, FiEdit, FiTrash, FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../redux/reducers/profile";

const Profile = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const [preview, setPreview] = useState()

  const previewPicture = (event) => {
    const pictureUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(pictureUrl);
  }

  const removePhoto = (event) => {
    event.preventDefault()
    setPreview(null)
  }


  const [successMessage, setSuccessMessage] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [updateFailed, setUpdateFailed] = useState(false)


  const dataProfile = useSelector(state => state.profile.data)

  const updateProfile = async (event) => {
    event.preventDefault();

    const form = new FormData();
    
    const fields = ['fullName', 'email', 'phoneNumber']
    fields.forEach((field) => {
      if(dataProfile && event.target[field].value && dataProfile[field] !== event.target[field].value){
        form.append(field, event.target[field].value)
      }
    })

    try {
      const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      })

      if(data.results){
        dispatch(setProfile(data.results))
        setSuccessMessage('update profile success')
        setUpdateSuccess(true)
        setTimeout(() => {
          setUpdateSuccess(false)
        }, 2000);
      }

    } catch (error) {
      setErrorMessage(error.response.data.message)
      setUpdateFailed(true)
      setTimeout(() => {
        setUpdateFailed(false)
      }, 2000);
    }
  }


  const updatePicture = async (event) => {
    event.preventDefault()
    const [file] = event.target.picture.files
    console.log(file.type)

    const pictureType = ['image/jpeg', 'image/jpg', 'image/png']
    if(!pictureType.includes(file.type)){
      setErrorMessage('ekstensi file tidak diperbolehkan, pilih jpg, jpeg, atau png')
      setUpdateFailed(true)
      setTimeout(() => {
        setUpdateFailed(false)
      }, 2000);
        return
    }

    if(file.size > 100000){
      setErrorMessage('ukuran file melebihi maximum 100 kb')
      setUpdateFailed(true)
      setTimeout(() => {
        setUpdateFailed(false)
      }, 2000);
        return
    }

    const form  = new FormData()
    form.append('picture', file)

    try {
      const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      dispatch(setProfile(data.results))

      setSuccessMessage('update picture success')
      setUpdateSuccess(true)
      setTimeout(() => {
        setUpdateSuccess(false)
      }, 2000);
      
      setPreview(null)
    } catch (error) {
      setErrorMessage(error.response.data.message)
      setUpdateFailed(true)
      setTimeout(() => {
        setUpdateFailed(false)
      }, 2000);
    }
  }

   return (
     <>
       <Navbar home={false} login={true} dashboard={false} />
       <main className="sm:h-[48rem] flex pt-10">
         <Navigation />

         <section className="relative flex flex-col flex-1 gap-4 mt-4 sm:pl-8">
          <p className={`${updateSuccess ? 'block' : 'hidden'} fixed left-[50%] top-20 z-50 text-lg bg-[#764abc] text-white rounded py-1 px-4 shadow`}>{successMessage}</p>
          <p className={`${updateFailed ? 'block' : 'hidden'} fixed left-[40%] top-20 z-50 text-lg bg-[#D00] text-white rounded py-1 px-4 shadow`}>{errorMessage}</p>
           <div className="items-center hidden gap-4 pt-8 sm:flex">
             <FiUsers size={20} color="#764abc" />
             <div className="font-bold">Profile</div>
           </div>

           <div className="flex flex-col flex-1 gap-1 p-4 sm:border sm:mr-10 sm:mb-10">
             <div className="font-bold">Profile Picture</div>

             <div className="flex flex-col gap-4 p-4 rounded justify-center-center sm:pl-8">
               <form onSubmit={updatePicture} className="flex gap-4">
                 <label className="relative">
                   {!preview && dataProfile && !dataProfile.picture && (
                     <img
                       className="object-cover rounded-full w-28 h-28"
                       src={defaultProfile}
                     ></img>
                   )}
                   {!preview && dataProfile && dataProfile.picture && (
                     <img
                       className="object-cover rounded-full w-28 h-28"
                       src={
                         dataProfile &&
                         `${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${dataProfile.picture}`
                       }
                     ></img>
                   )}
                   {preview && (
                     <img
                       className="object-cover rounded-full w-28 h-28"
                       src={preview}
                     ></img>
                   )}
                   {preview && (
                     <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-full" />
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

                 <div className="flex flex-col justify-center gap-1">
                   <button
                     type="submit"
                     className="text-white bg-[#764abc] rounded flex items-center justify-center gap-1 sm:gap-3 p-2 active:scale-95 transition-all duration-500"
                   >
                     <FiEdit />
                     <p className="text-xs">Change Profile</p>
                   </button>

                   <button
                     onClick={removePhoto}
                     className="text-white border border-[#D00000] rounded flex items-center justify-center gap-1 sm:gap-3 p-2 active:scale-95 transition-all duration-500"
                   >
                     <FiTrash color="#D00000" />
                     <p className="text-xs text-[#D00000]">Delete Profile</p>
                   </button>
                 </div>
               </form>
               <p className="text-xs text-[#4F5665]">
                 The Profile Picture must be 512 × 512 or less
               </p>
             </div>

             <form onSubmit={updateProfile} className="flex flex-col gap-4">
               <label className="flex flex-col">
                 <p className="font-semibold text-[#4F5665]">Full Name</p>
                 <div className="flex items-center w-full gap-2 p-2 border rounded">
                   <FiUser color="#4F5665" />
                   <input
                     type="text"
                     name="fullName"
                     placeholder="Enter Full Name"
                     className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                     defaultValue={dataProfile.fullName}
                   />
                 </div>
               </label>

               <label className="flex flex-col">
                 <p className="font-semibold text-[#4F5665]">Phone</p>
                 <div className="flex items-center w-full gap-2 p-2 border rounded">
                   <FiPhone color="#4F5665" />
                   <input
                     type="text"
                     name="phoneNumber"
                     placeholder="Enter Your Phone Number"
                     className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                     defaultValue={dataProfile.phoneNumber}
                   />
                 </div>
               </label>

               <label className="flex flex-col">
                 <p className="font-semibold text-[#4F5665]">Email</p>
                 <div className="flex items-center w-full gap-2 p-2 border rounded">
                   <FiMail color="#4F5665" />
                   <input
                     type="text"
                     name="email"
                     placeholder="Enter Your Phone Number"
                     className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                     defaultValue={dataProfile.email}
                   />
                 </div>
               </label>

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

               <Button value="Submit" />
             </form>
           </div>
           <ResponsiveNavigation />
         </section>
       </main>
     </>
   );
}

export default Profile;