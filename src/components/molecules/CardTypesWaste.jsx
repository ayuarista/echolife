import React from "react";
import { TbTrees } from "react-icons/tb";
const CardTypesWaste = (props) => {
  const modalId = `modal_${props.id}`;
  return (
    <div>
      <div className="flex items-center gap-3 mt-14">
        <span className="bg-hero dark:bg-primary rounded-lg px-2 py-2 text-black dark:text-white text-xl">
          <TbTrees/>
        </span>
        <h1 className="font-bold text-2xl md:text-[26px] lg:text-[25px] text-secondary dark:text-hero font-Poppins">
          {props.title}
        </h1>
      </div>
      <div className="mt-3 relative group overflow-hidden rounded-lg w-72">
        <img
          src={props.image}
          alt=""
          className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-125 cursor-pointer"
        />
      </div>
      <div className="flex justify-center">
      <button
        className="bg-primary px-3 py-2 rounded-box text-[13px] text-white flex justify-end font-medium mt-8"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Read More
      </button>
      </div>

      {/* MODAL POP UP */}
      <dialog id={modalId} className="modal dark:text-white">
        <div className="modal-box w-11/12 max-w-5xl lg:max-w-2xl">
          <img
            src={props.image}
            alt={props.image}
            className="w-full h-[30vh] lg:h-[35vh] object-cover rounded-lg"
          />
          <h3 className="font-bold text-xl lg:text-2xl mt-3 text-secondary dark:text-primary">{props.title}</h3>
          <p className="py-4 text-justify leading-relaxed text-gray-500 dark:text-gray-300 text-sm font-medium">{props.desc}</p>
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

export default CardTypesWaste;
