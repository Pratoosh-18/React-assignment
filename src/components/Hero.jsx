import React, { useState } from "react";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isJoinIn, setIsJoinIn] = useState(false);
  const signIn = () => {
    setIsSignIn(true);
    setIsJoinIn(false);
  };
  const joinIn = () => {
    setIsSignIn(false);
    setIsJoinIn(true);
  };

  return (
    <div className="bg-[#F7F5F9] mt-[80px] pt-10 px-7 flex justify-center gap-16 flex-col lg:flex-row items-center">
      <div className="w-[380px] sm:w-[500px] lg:w-[700px] justify-between flex flex-col">
        <p className="flex gap-1 text-[25px] md:text-[36px] font-semibold my-6">
          Explore <p>your</p> <p className="text-[#0096C8]">hobby</p>or
          <p className="text-[#8064A2]">passion</p>
        </p>
        <p className="flex flex-col gap-4 flex-wrap">
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </p>
        <img className="hidden lg:block" src={heroimg} alt="" />
      </div>
      <div className="w-[350px] md:w-[410px] flex flex-col gap-3 justify-center">
        <p className="flex gap-5">
          <p onClick={signIn} className="hover:cursor-pointer">
            {isSignIn ? (
              <p className="text-[20px] font-semibold text-[#8064A2]">
                Sign In <hr className="bg-[#8064A2] h-[4px]" />{" "}
              </p>
            ) : (
              <p className="text-[20px] font-semibold text-[#939CA3]">
                Sign In
              </p>
            )}
          </p>

          <p onClick={joinIn} className="hover:cursor-pointer">
            {isJoinIn ? (
              <p className="text-[20px] font-semibold text-[#8064A2]">
                Join In <hr className="bg-[#8064A2] h-[4px]" />{" "}
              </p>
            ) : (
              <p className="text-[20px] font-semibold text-[#939CA3]">
                Join In
              </p>
            )}
          </p>
        </p>
        <button className="text-[14px] h-[40px] rounded-[8px] font-semibold border-[1px] border-[#8064A2] flex items-center justify-around">
          <img
            className="h-[20px] w-[20px]"
            src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
            alt=""
          />
          Continue with Google
          <p></p>
        </button>
        <button className="text-[14px] h-[40px] rounded-[8px] font-semibold border-[1px] border-[#8064A2] flex items-center justify-around">
          <img
            className="h-[20px] w-[20px]"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
            alt=""
          />
          Continue with Facebook
          <p></p>
        </button>
        <p className="font-semibold text-[12px] text-center">
          ---------- Or connect with ----------
        </p>
        <input
          className="text-[14px] h-[40px] rounded-[8px] flex items-center justify-around px-4"
          type="email"
          placeholder="Email"
        />
        <input
          className="text-[14px] h-[40px] rounded-[8px] flex items-center justify-around px-4"
          type="password"
          placeholder="Password"
        />

        <div className="flex justify-between text-[12px]">
          <div className="flex items-center gap-1">
            {" "}
            <input type="checkbox" />
            Remember me?
          </div>
          <div>Forgot passsword</div>
        </div>

        <button className="text-[16px] h-[40px] rounded-[8px] font-semibold border-[1px] border-[#8064A2] flex items-center justify-around">
          Continue
        </button>
        <img className="block lg:hidden" src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
