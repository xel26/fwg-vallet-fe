import { FaWallet } from "react-icons/fa";

import { FiSearch, FiShoppingCart, FiChevronDown, FiUser, FiLogOut, FiMenu } from 'react-icons/fi'

import { Link } from "react-router-dom";
import { useState } from "react";

import userPhoto from '../assets/media/user.jpg'

const Navbar = () => {
  let login = true
  if(document.URL.endsWith("/")){
    login = false
  }

    const [dropDownMenu, setDropDownMenu] = useState(false)
    const handleDropDownMenu = () => {
        setDropDownMenu(!dropDownMenu)
    }
    // const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    // const handleHamburgerMenu = () => {
    //     setShowHamburgerMenu(!showHamburgerMenu);
    // }

    const [navSearch, setNavSearch] = useState(false)

    const [showMoreNav, setShowMoreNav] = useState(false)
    return (
      <>
        <nav
          className={`fixed w-full h-fit py-3 sm:py-0 sm:h-14 flex flex-col gap-4 items-center ${
            document.URL.endsWith("/")
              ? "bg-[#764abc]"
              : "bg-[#764abc] sm:bg-white"
          } z-50`}
        >
          <div
            className={`flex justify-between items-center sm:h-full w-11/12 `}
          >
            {document.URL.endsWith("/") ? (
              <div className="flex items-center gap-2 sm:hidden">
                <FaWallet
                  className={`${
                    document.URL.endsWith("/") ? "text-white" : "text-[#764abc]"
                  }`}
                />
                <div
                  className={`${
                    document.URL.endsWith("/") ? "text-white" : "text-[#764abc]"
                  }`}
                >
                  E-Wallet
                </div>
              </div>
            ) : document.URL.includes("dashboard") ? (
              <div className="flex gap-2 items-center sm:hidden">
                <div>
                  <img
                    src={userPhoto}
                    className="rounded-full object-cover w-10 h-10 sm:hidden"
                  />
                </div>
                <div className="flex flex-col text-white">
                  <p className="text-xs">Hello,</p>
                  <p className="text-base">Ghaluh Wizard</p>
                </div>
              </div>
            ): (
              <p className="text-white text-sm sm:hidden">{document.URL.includes("transfer") ? 'Transfer' 
              : document.URL.includes("top-up") ? 'Top-Up' : document.URL.includes('history-transaction') ? 'History Transaction' : 'Profile'}</p>
            )}

            <div className="items-center gap-4 hidden sm:flex">
              <FaWallet
                className={`${
                  document.URL.endsWith("/") ? "text-white" : "text-[#764abc]"
                }`}
              />
              <div
                className={`${
                  document.URL.endsWith("/") ? "text-white" : "text-[#764abc]"
                }`}
              >
                E-Wallet
              </div>
            </div>

            <div className="relative flex gap-4">
              {login ? (
                <>
                  <div className=" flex items-center gap-4">
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
                        className={`${
                          document.URL.endsWith("/")
                            ? "text-white"
                            : "text-black"
                        } hidden sm:block`}
                      >
                        Ghaluh Wizard
                      </div>
                    )}
                    <div>
                      <img
                        src={userPhoto}
                        className="rounded-full object-cover w-10 h-10 hidden sm:block"
                      />
                    </div>
                    <FiChevronDown
                      onClick={handleDropDownMenu}
                      size={24}
                      className={`${
                        document.URL.endsWith("/")
                          ? "text-white"
                          : "text-[#4F5665]"
                      } hidden sm:block active:scale-90 transition-all duration-500`}
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
                    <Link to='/' className="text-red-600 flex items-center gap-2 p-2">
                      <FiLogOut size={18} />
                      <div>Keluar</div>
                    </Link>
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

              <FiMenu
                onClick={() => setShowMoreNav(!showMoreNav)}
                className={`${
                  document.URL.endsWith("/") ? "block" : "hidden"
                } text-white text-xl sm:hidden active:scale-95 transition-all`}
              />
            </div>
          </div>
        </nav>

        {/* nav mobile */}
        <div
          className={` ${
            showMoreNav ? "block" : "hidden"
          } fixed bg-white text-[#764abc] flex flex-col w-full p-4 gap-4 top-12 z-50`}
        >
          {login ? (
            <>
              <Link
                to="/profile"
                className="rounded p-1 border border-[#764abc] flex justify-center items-center"
              >
                Profile
              </Link>
              <button
                to="/login"
                className="rounded p-1 border border-[#D00] text-[#D00] flex justify-center items-center"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded p-1 border border-[#764abc] flex justify-center items-center"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="rounded p-1 border border-[#764abc] flex justify-center items-center"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </>
    );
}

export default Navbar