import userPhoto from '../assets/media/user.jpg'
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Button from '../components/Button';

import { FiUsers, FiEdit, FiTrash, FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
   return (
     <>
       <Navbar home={false} login={true} dashboard={false} />
       <main className="h-[48rem] flex pt-10">
         <Navigation />

         <section className="relative flex-1 flex flex-col gap-4 mt-4 pl-8">
           <div className="flex items-center gap-4 pt-8">
             <FiUsers size={20} color="#764abc" />
             <div className="font-bold">Profile</div>
           </div>

           <div className="border flex-1 mr-10 mb-10 p-4 flex flex-col gap-1">
             <div className="font-bold">Profile Picture</div>

             <div className="flex flex-col justify-center-center pl-8 rounded p-4 gap-4">
               <div className="flex gap-4">
                 <div>
                   <img
                     src={userPhoto}
                     className="rounded h-20 w-20 object-cover"
                   />
                 </div>

                 <div className="flex flex-col justify-center gap-1">
                   <button className="text-white bg-[#764abc] rounded flex items-center justify-center gap-3 p-2">
                     <FiEdit />
                     <p className="text-xs">Change Profile</p>
                   </button>

                   <button className="text-white border border-[#D00000] rounded flex items-center justify-center gap-3 p-2">
                     <FiTrash color='#D00000'/>
                     <p className="text-xs text-[#D00000]">Delete Profile</p>
                   </button>
                 </div>
               </div>
               <p className='text-xs text-[#4F5665]'>The Profile Picture must be 512 × 512 or less</p>
               </div>

             <form className="flex flex-col gap-4">
               <label className="flex flex-col gap-2">
                 <p className="font-semibold text-[#4F5665]">Full Name</p>
                 <div className="w-full border rounded flex items-center gap-2 p-2">
                   <FiUser color='#4F5665'/>
                   <input
                     type="text"
                     name="fullName"
                     placeholder="Enter Full Name"
                     className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                   />
                 </div>
               </label>

               <label className="flex flex-col gap-2">
                 <p className="font-semibold text-[#4F5665]">Phone</p>
                 <div className="w-full border rounded flex items-center gap-2 p-2">
                   <FiPhone color='#4F5665'/>
                   <input
                     type="text"
                     name="phoneNumber"
                     placeholder="Enter Your Email"
                     className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                   />
                 </div>
               </label>

               <label className="flex flex-col gap-2">
                 <p className="font-semibold text-[#4F5665]">Email</p>
                 <div className="w-full border rounded flex items-center gap-2 p-2">
                   <FiMail color='#4F5665'/>
                   <input
                     type="text"
                     name="email"
                     placeholder="Enter Your Phone Number"
                     className="text-[#4F5665] w-full outline-none bg-transparent text-sm"
                   />
                 </div>
               </label>

               <div className='flex flex-col'>
                <p className='text-xs'>Password</p>
                <Link to='/change-password' className='text-[#764abc] text-xs'>Change Password</Link>
               </div>

               <div className='flex flex-col'>
                <p className='text-xs'>Pin</p>
                <Link to='/change-pin' className='text-[#764abc] text-xs'>Change Pin</Link>
               </div>

               <Button value="Submit" />
             </form>
           
           </div>
         </section>
       </main>
     </>
   );
}

export default Profile;