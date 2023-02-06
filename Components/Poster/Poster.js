import Image from 'next/image';
import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import bg from"../Assets/1000_F_269284141_qzkCnpbk9rI2RK3rKPFGUYRIBVxZigrO-removebg-preview.png";
const Poster = () => {
    return (
        <div className="hero    mt-16 ">
       
        {/*     <img  className=" lg:rounded-lg  lg:shadow-2xl "src={bg} alt="" srcset=""> </img> */}
        
     <div className="hero-content flex-col lg:flex-row-reverse lemon ">
     
     <div >
      <h1 className=" text-5xl font-bold">Best full body workout to lose fat</h1>
      <p className=" text-sm  py-4">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
     </p>
     <div className='flex mt-2'>
     <button className="btn btn-primary bg-primary text-white text-base ">Get Started <BsFillArrowRightCircleFill className='ml-3'></BsFillArrowRightCircleFill></button>
      
     
     </div>
     </div>
     <Image src={bg} className="sm:w-full   lg:w-3/4  rounded-lg " alt='' ></Image>
     </div>
   
     </div>
    );
};

export default Poster;