import React from "react";
import testimonials from "../assets/icons/testimonials.png"
import playerbanner from "../assets/playerbanner.png"
import playerbannerbig from "../assets/playerbannerbig.png"
import dancer from "../assets/dancer.png"

const Testimonials = () => {
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="Card w-[350px] lg:w-[90%] md:w-[600px] bg-[#F7F5F9] mx-6 my-20 h-[auto] rounded-[8px] border-[1px] flex flex-col justify-around p-8 border-gray-300 gap-4">
          <div className="text-[18px] sm:text-[24px] font-semibold flex items-center gap-2">
            <img className="h-[40px] w-[40px]" src={testimonials} alt="" />
            Testimonials
          </div>
          <div className="text-[12px] font-light sm:text-[18px]">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </div>
          <div>
            
        <div className="flex flex-col gap-4 lg:flex-row justify-around mt-4">
          <img className="hidden lg:block h-[100px]" src={playerbannerbig} alt="" />
          <img className="block lg:hidden h-[64px] w-[264px]" src={playerbanner} alt="" />
          <div className="flex justify-center items-center gap-4">
            <img className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-full overflow-hidden" src={dancer} alt="" />
            <div>
              <p className="text-[#8064A2] text-[18px] font-semibold">Shubha Nagarajan</p>
              <p className="text-[#0096C8] text-[14px]">Classical Dancer</p>
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
