import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const CardInfo = ({Card}) => {
    const{name,icon,description,bgClass}=Card;
    return (
        <div className={` card lg:card-side p-6 sm:col-span-1    text-white `}>
        <div className='avatar w-20 h-20 mt-6  ml-6'>
        <div className="w-100   rounded-xl bg-success">
    <img className='icon w-20 ' src={icon} />
  </div>
  </div>
        <div className="card-body  ">
          <h2 className="card-title">{name}</h2>
          <div className='flex mt-3'>
           <p className='text-sm opacity-50'>Learn More</p>
           <p className='text-sm opacity-50'><BsArrowRight></BsArrowRight></p>
           
          </div>
         
        </div>
      </div>
    );
};

export default CardInfo;