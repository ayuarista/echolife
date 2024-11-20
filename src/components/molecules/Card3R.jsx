import React from "react";

const Card3R = (props) => {
  const modalId = `modal_${props.id}`; 

  return (
    // CARD 3R
    <div className="items-center lg:w-[23rem] mt-10 dark:bg-base-300 bg-gray-100 p-[0.85rem] rounded-lg">
      <div className="w-[18rem] md:w-[21rem] lg:w-[21rem] h-60 lg:h-60">
        <img
          src={props.image}
          alt={props.image}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-left text-black dark:text-hero text-[18px] lg:text-[20px] border-hero border-l-4 p-2 leading-tracking-widest font-Poppins mt-3 font-semibold">
        {props.title}
      </p>
      <button
        className="bg-primary px-3 py-2 rounded-full text-[13px] text-white flex justify-end font-medium mt-8"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Read More
      </button>
      
      {/* MODAL POP UP */}
      <dialog id={modalId} className="modal text-black dark:text-white">
        <div className="modal-box w-11/12 max-w-5xl lg:max-w-2xl">
          <img
            src={props.image}
            alt={props.image}
            className="w-full h-[30vh] lg:h-[35vh] object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg lg:text-3xl mt-3 dark:text-hero text-primary">{props.title}</h3>
          <p className="py-4 text-justify leading-relaxed">{props.desc}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Card3R;
