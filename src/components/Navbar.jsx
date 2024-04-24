import { FiSearch, FiShoppingCart, FiChevronDown, FiUser, FiLogOut, FiMenu } from 'react-icons/fi'

import axios from "axios";

import { Link } from "react-router-dom";
import { useState } from "react";

import defaultProfile from '../assets/media/default-profile.png'
import walletIcon from "../assets/media/wallet.png"

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../redux/reducers/auth";
import { removeProfile } from "../redux/reducers/profile";
import { setProfile } from "../redux/reducers/profile";

const Navbar = () => {

  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [dropDownMenu, setDropDownMenu] = useState(false)
  const handleDropDownMenu = () => {
      setDropDownMenu(!dropDownMenu)
  }

  const logoutProcess = () => {
    dispatch(removeProfile())
    dispatch(logoutAction())
    navigate('/')
  }

  const [navSearch, setNavSearch] = useState(false)
  const [showMoreNav, setShowMoreNav] = useState(false)


  const dataProfile = useSelector(state => state.profile.data)

  const getProfile =  async () => {
    if(token){
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        console.log(data)
        dispatch(setProfile(data.results))
      } catch (error) {
        console.log(error)
      }
    }
  }


  useEffect(() => {
    getProfile()
  },[])

  return (
    <>
      <nav
        className={`fixed w-full h-fit py-1 sm:py-0 sm:h-14 flex flex-col gap-4 items-center shadow-[0px_3px_5px_0px_rgba(0,0,0,0.08)] bg-white sm:border-b z-40`}
      >
        <div className={`flex justify-between items-center sm:h-full w-11/12 `}>
          {/* mobile */}

          <Link to="/" className="flex items-center gap-1 sm:gap-2 sm:flex">
            <img src={walletIcon} alt="wallet icon" className="h-7 sm:h-8" />

            <p className={`font-semibold text-[#764abc]`}>Vallet</p>
          </Link>

          <div className="relative flex gap-4">
            {token ? (
              <>
                <div className="flex items-center gap-4 ">
                  {document.URL.includes("dashboard") ? (
                    <>
                      <form
                        className={`${
                          !navSearch ? "hidden" : "flex"
                        } absolute items-center right-32 border border-[#4F5665] rounded w-48 py-1 px-1.5 transition-all`}
                      >
                        <input
                          className="bg-transparent text-[#4F5665] placeholder-white text-base w-11/12 flex px-1 outline-none "
                          type="text"
                          placeholder="search"
                        />
                        <button className="hidden" type="submit"></button>
                      </form>
                      <FiSearch
                        onClick={() => setNavSearch(!navSearch)}
                        size={18}
                        className={`${
                          document.URL.endsWith("/")
                            ? "text-white"
                            : "text-[#4F5665]"
                        } z-50 hidden sm:block`}
                      />

                      <Link>
                        <FiShoppingCart
                          size={18}
                          className={`${
                            document.URL.endsWith("/")
                              ? "text-white"
                              : "text-[#4F5665]"
                          } hidden sm:block`}
                        />
                      </Link>
                    </>
                  ) : (
                    <div
                      className={`text-black hidden sm:block`}
                    >
                      {dataProfile?.fullName}
                    </div>
                  )}
                  <div>
                    <img
                      // src={dataProfile?.picture ? `${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${dataProfile.picture}` : defaultProfile}
                      src={
                        dataProfile?.picture
                          ? dataProfile.picture
                          : defaultProfile
                      }
                      className="hidden object-cover w-10 h-10 rounded-full sm:block"
                    />
                  </div>
                  <FiChevronDown
                    onClick={handleDropDownMenu}
                    size={24}
                    className={`text-[#4F5665] hidden sm:block active:scale-90 transition-all duration-500`}
                  />
                </div>

                <div
                  className={`fixed right-10 top-16 flex flex-col bg-white shadow-md p-2 rounded-md gap-2 w-fit ${
                    dropDownMenu ? "block" : "hidden"
                  }`}
                >
                  <Link
                    to="/profile"
                    className="flex items-center justify-center gap-2 rounded border border-[#764abc] text-[#764abc] p-2 active:scale-95 transition-all"
                  >
                    <div>
                      <FiUser size={18} />
                    </div>
                    <div>Profile</div>
                  </Link>

                  <button onClick={logoutProcess} className='flex items-center justify-center gap-2 rounded bg-[#764abc] text-white p-2 active:scale-95 transition-all'>Logout</button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden px-3 py-2 text-sm text-[#764abc] transition-all border border-[#764abc] rounded sm:block active:scale-95"
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  className="bg-[#764abc] py-2 px-3 text-white text-sm rounded hidden sm:block active:scale-95 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}

            <FiMenu
              onClick={() => setShowMoreNav(!showMoreNav)}
              className={`text-[#764abc] text-xl sm:hidden active:scale-95 transition-all`}
            />
          </div>
        </div>

        <div
          className={` ${
            showMoreNav ? "block" : "hidden"
          } sm:hidden bg-white text-[#764abc] flex flex-col w-full px-4 pb-2 gap-4 z-50`}
        >
          {token ? (
            <>
              <Link
                to="/dashboard"
                className="rounded p-1 border border-[#764abc] flex justify-center items-center text-sm active:scale-95 transition-all"
              >
                Dashboard
              </Link>
              <button
                onClick={logoutProcess}
                className="rounded p-1 border bg-[#764abc] text-white flex justify-center items-center text-sm active:scale-95 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded p-1 border border-[#764abc] flex justify-center items-center active:scale-95 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="rounded p-1 bg-[#764abc] text-white flex justify-center items-center active:scale-95 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar