import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMapMarkerAlt, faShoppingBag, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const CardsPage = () => {
  return (
    <div className="w-[100%] mt-10 flex justify-center flex-wrap gap-7">
      <div className="Card hover:text-white hover:bg-[#8064A2] w-[350px] sm:w-[400px] md:w-[600px] rounded-[8px] border-[1px] flex flex-col justify-around p-8 border-gray-300 gap-4">
        <div className="text-[18px] sm:text-[24px] font-semibold flex items-center gap-2">
          <FontAwesomeIcon className="h-[40px] w-[40px] text-[#8064A2] icon" icon={faUsers} />
          People
        </div>
        <div className="text-[12px] sm:text-[18px]">
          Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
        </div>
        <div></div>
      </div>
      <div className="Card hover:text-white hover:bg-[#77933C] w-[350px] sm:w-[400px] md:w-[600px] rounded-[8px] border-[1px] flex flex-col justify-around p-8 border-gray-300 gap-4">
        <div className="text-[18px] sm:text-[24px] font-semibold flex items-center gap-2">
          <FontAwesomeIcon className="h-[40px] w-[40px] text-[#77933C] icon" icon={faMapMarkerAlt} />
          Place
        </div>
        <div className="text-[12px] sm:text-[18px]">
          Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
        </div>
        <div></div>
      </div>
      <div className="Card hover:text-white hover:bg-[#C0504D] w-[350px] sm:w-[400px] md:w-[600px] rounded-[8px] border-[1px] flex flex-col justify-around p-8 border-gray-300 gap-4">
        <div className="text-[18px] sm:text-[24px] font-semibold flex items-center gap-2">
          <FontAwesomeIcon className="h-[40px] w-[40px] text-[#C0504D] icon" icon={faShoppingBag} />
          Product
        </div>
        <div className="text-[12px] sm:text-[18px]">
          Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
        </div>
        <div></div>
      </div>
      <div className="Card hover:text-white hover:bg-[#0096C8] w-[350px] sm:w-[400px] md:w-[600px] rounded-[8px] border-[1px] flex flex-col justify-around p-8 border-gray-300 gap-4">
        <div className="text-[18px] sm:text-[24px] font-semibold flex items-center gap-2">
          <FontAwesomeIcon className="h-[40px] w-[40px] text-[#0096C8] icon" icon={faCalendarAlt} />
          Program
        </div>
        <div className="text-[12px] sm:text-[18px]">
          Find events, meetups and workshops related to your hobby. Register or buy tickets online.
        </div>
        <div></div>
      </div>
      <div className="bg-[#F7FDFF] flex justify-center ">
        <div className="Card hover:text-white hover:bg-red-500 w-[350px] lg:w-[90%] md:w-[600px] bg-white mx-6 my-20 h-[auto] md:h-[297px] rounded-[8px] border-[1px] flex flex-col justify-around p-8 border-gray-300 gap-4">
          <div className="text-[18px] sm:text-[24px] font-semibold flex items-center gap-2">
            <FontAwesomeIcon className="h-[40px] w-[40px] text-red-500 icon" icon={faPlus} />
            Add your own
          </div>
          <div className="text-[12px] sm:text-[18px]">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
          </div>
          <div>
            <button className="text-[12px] sm:text-base flex h-[40px] w-[110px] justify-center items-center rounded-[8px] border-[1px] border-[#8064A2] font-semibold text-[#8064A2]">
              Add new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
