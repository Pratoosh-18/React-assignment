import React from "react";

import socials from "../assets/socials.png"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around my-10 px-4 md:px-8">
        <div className="text-[14px] flex flex-col gap-4 md:gap-2">
          <p className="text-[14px] font-bold pt-10 md:py-0">Hobbycue</p>
          <p>About us</p>
          <p>Our services</p>
          <p>Work with us</p>
          <p>FAQ</p>
          <p>Contect Us</p>
        </div>
        <div className="text-[14px] flex flex-col gap-4 md:gap-2">
          <p className="text-[14px] font-bold pt-10 md:py-0">How Do I</p>
          <p>Sign Up</p>
          <p>Add a Listing</p>
          <p>Claim Listing</p>
          <p>Post a Query</p>
          <p>Add a Blog Post</p>
          <p>Other Queries</p>
        </div>
        <div className="text-[14px] flex flex-col gap-4 md:gap-2">
          <p className="text-[14px] font-bold pt-10 md:py-0">Quick Links</p>
          <p>Listings</p>
          <p>Blog Posts</p>
          <p>Shop / Store</p>
          <p>Community</p>
        </div>
        <div className="text-[14px] flex flex-col justify-around">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-bold pt-10 md:py-0">Social Media</p>
            <p className="flex">
              <img className="h-[34px]" src={socials} alt="" />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-bold pt-10 md:py-0">
              Invite Friends
            </p>
            <div className="h-[40px] flex justify-center items-center">
              <input
                className="w-[300px] h-[40px] border-[1px] border-[#8064A2] rounded-l-[8px] px-4"
                type="email"
                placeholder="Email ID"
              />
              <button className="w-[60px] text-white font-semibold text-[12px] h-[40px] bg-[#8064A2] rounded-r-[8px] flex justify-center items-center">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] md:h-[78px] bg-[#F7F5F9] flex justify-center items-center font-medium text-[12px] md:text-[14px]">
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
