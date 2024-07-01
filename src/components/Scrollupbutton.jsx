import React from "react";
import "./Scrollupbutton.css";

const Scrollupbutton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed z-10 bottom-10 right-10 flex flex-col items-center">
      <button
        onClick={scrollToTop}
        className="h-[50px] w-[50px] bg-white border-[2px] border-black rounded-full flex justify-center items-center text-[20px] font-bold animate-bounce"
      >
        &uarr;
      </button>
      <p className="text-[14px] mt-2">Back to top</p>
    </div>
  );
};

export default Scrollupbutton;
