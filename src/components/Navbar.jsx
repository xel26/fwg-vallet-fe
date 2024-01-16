import { FaWallet } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useState } from "react";

import userPhoto from '../assets/media/user.jpg'

const Navbar = ({home, login, dashboard}) => {
    const [dropDownMenu, setDropDownMenu] = useState(false)
    const handleDropDownMenu = () => {
        setDropDownMenu(!dropDownMenu)
    }

    const [navSearch, setNavSearch] = useState(false)
    return(
        <nav
        className={`fixed w-full h-fit py-3 sm:py-0 sm:h-14 flex flex-col gap-4 items-center ${
          home ? "bg-[#764abc]" : "bg-white border border-b"
        } z-50`}
      >
        <div className="flex justify-between items-center sm:h-full w-11/12">
          <div className="flex items-center gap-4">
            <FaWallet
              className={`${home ? "text-white" : "text-[#764abc]"}`}
            />
            <div className={`${home ? "text-white" : "text-[#764abc]"}`}>
              E-Wallet
            </div>
          </div>

          <div className="relative flex gap-4">
            {login ? (
              <>
                <div className=" flex items-center gap-4">
                  {dashboard ? (
                    <>
                      <form className={`${!navSearch ? "hidden" : "flex"} absolute items-center right-32 border border-[#4F5665] rounded w-48 py-1 px-1.5 transition-all`}>
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
                        className={`${home ? "text-white" : "text-[#4F5665]"} z-50`}
                      />

                      <Link>
                      <FiShoppingCart
                        size={18}
                        className={`${home ? "text-white" : "text-[#4F5665]"}`}
                      />
                      </Link>
                    </>
                  ) : (
                    <div>Ghaluh Wizard</div>
                  )}
                  <div>
                    <img
                      src={userPhoto}
                      className="rounded-full object-cover w-10 h-10"
                    />
                  </div>
                  <FiChevronDown
                    onClick={handleDropDownMenu}
                    size={24}
                    className={`${home ? "text-white" : "text-[#4F5665]"}`}
                  />
                </div>

                <div
                  className={`absolute right-0 top-14 flex flex-col bg-white shadow-md p-2 rounded-md gap-2 w-full ${
                    dropDownMenu ? "block" : "hidden"
                  }`}
                >
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 rounded bg-[#764abc] text-white p-2"
                  >
                    <FiUser size={18} />
                    <div>Profile</div>
                  </Link>
                  <button className="text-red-600 flex items-center gap-2 p-2">
                    <FiLogOut size={18} />
                    <div>Keluar</div>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white border border-white py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-white py-2 px-3 text-[#764abc] text-sm rounded hidden sm:block active:scale-95 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    )
}

export default Navbar