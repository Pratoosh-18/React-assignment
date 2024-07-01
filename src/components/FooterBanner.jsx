import React from 'react'
import footerbanner from "../assets/footerbanner.png"

const FooterBanner = () => {
  return (
    <div className='w-full p-8 sm:p-20 bg-[#F7FDFF]'>
        
        <p className="flex flex-wrap gap-1 text-[18px] sm:text-[25px] md:text-[36px] font-semibold my-6">
          Your<p className="text-[#8064A2]">Hobby,</p>Your
          <p className="text-[#0096C8]">Community...</p>
        </p>
        <button className="text-[12px] sm:text-base bg-[#8064A2] flex h-[28px] sm:h-[46px] w-[104px] sm:w-[147px] justify-center items-center rounded-[8px] border-[1px] border-[#8064A2] font-semibold text-white">
            Get Started
          </button>

        <img src={footerbanner} alt="" />
        
    </div>
  )
}

export default FooterBanner