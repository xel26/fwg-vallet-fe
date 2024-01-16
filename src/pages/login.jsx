//import

import React from "react";

function Login() {
  
  }

  return (
    <>
      
      <body className="flex flex-row w-screen">
    <div className="h-screen w-screen flex items-stretch">
      <div className="flex-1 py-5 md:flex-initial md:w-2/3 lg:w-1/2 bg-white font-montserrat mx-5 lg:m-0 lg:p-10 md:rounded-r-full">
        <div className="flex flex-col gap-[13px]">
          <div className="flex items-center gap-[15px]">
            <img src="assets/Logo_tanpanama.png" className="w-5 h-5" alt="e-wallet-logo"/>
            <h1 className="text-[#764abc] font-medium">Vallet</h1>
          </div>
          <p className="text-lg md:text-2xl font-medium">Hello Welcome Back 👋</p>
          <p className="text-sm md:text-base md:leading-6 font-normal">Fill out the form correctly or you can login with several option.</p>
          <div className="flex gap-[15px] justify-center md:flex-col">
            <button className="flex flex-1 border border-[#E8E8E8] bg-white h-[51px] p-[10px] gap-[10px] rounded-full justify-center hover:bg-slate-200">
              <img src="./assets/google-logo.png" alt="google" className="w-25 h-25 object-contain"/>
              <p className="hidden font-medium md:text-lg md:text-[#4F5665] md:block">Sign In With Google</p>
            </button>
            <button className="flex flex-1 border border-[#E8E8E8] h-[51px] p-[10px] gap-[10px] rounded-full justify-center hover:bg-slate-200">
              <img src="./assets/facebook-logo.png" alt="facebook" className="w-25 h-25 object-contain"/>
              <p className="hidden font-medium md:text-lg md:text-[#4F5665] md:block">Sign In With Facebook</p>
            </button>
          </div>
          <div className="flex justify-center">
            <p className="font-normal text-xs text-[#AAAAAA]">Or</p>
          </div>
          <div>
            <form className="flex flex-col gap-[13px]">
              <div className="flex flex-col gap-y-3 relative">
                <label for="email" className="text-sm font-semibold text-dark lg:text-base">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"/>
                <div className="icon-location absolute top-[46px] left-4 lg:top-[50px]">
                  <i data-feather="mail" alt="mail" className="w-4 h-4"></i> 
                </div>
              </div>
              <div className="flex flex-col gap-y-3 relative">
                <label for="password" className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base">Password</label>
                <input type="password" id="password" placeholder="Enter Your Existing Password" className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wider outline-none focus:border-primary placeholder:tracking-wider"/>
                <div className="icon-password absolute top-[46px] left-4 md:top-[50px]">
                  <i data-feather="key" calt="Password" className="w-4 h-4"></i>
                </div>
                  <div className="absolute top-[46px] right-4 md:top-[50px] block cursor-pointer" id="btnHiddenPassword">
                    <i data-feather="eye-off" calt="Password" className="w-4 h-4"></i>
                  </div>
                    <div className="absolute top-[45px] right-[15px] md:top-[49px] hidden cursor-pointer" id="btn-show-password">
                      <i data-feather="eye-off" calt="Password" className="w-4 h-4"></i>
                    </div>
                  </div>
                  <a className="flex justify-end cursor-default" href="/forgotPass"><p className="w-max text-end cursor-pointer hover:text-[#4e4e4e] hover:underline">Forgot Password?</p>
                  </a>
                  <button type="submit" className="w-full p-[10px] h-[50px] text-white bg-[#764abc] hover:bg-violet-400 rounded-md active:ring">Login</button>
                </form>
                <p className="text-center font-normal mt-[13px]">Not Have An Account? <span>
                  <a className="text-blue-700" href="/register">Register</a></span></p>
                </div>
              </div>
            </div>
            <div className="hidden md:bg-cover md:h-full md:flex md:flex-initial md:w-1/3 lg:w-1/2 md:bg-gradient-to-b md:from-[#7645c4] md:to-[#764abc] md:justify-center md:items-center"><img src="./assets/login-side.png" alt="login-img" className="place-self-center object-contain"/>
            </div>
          </div>
      
    </>
  );
}

export default Login;
