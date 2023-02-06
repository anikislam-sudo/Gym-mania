import Image from 'next/image';
import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import bag from"../Assets/1000_F_269284141_qzkCnpbk9rI2RK3rKPFGUYRIBVxZigrO_prev_ui.png";


const brands=[
    "https://i.ibb.co/R6KSCQ4/nike-1.png",
    "https://i.ibb.co/zHBmvkD/adidas-2.png",

    "https://i.ibb.co/MPbrk8R/puma.png",
    "https://i.ibb.co/bQLsSWq/reebok.png",
];

const Banner = () => {
    return (
        <div className="hero    bg-gradient-to-r from-accent to-neutral  ">
       
   {/*     <img  className=" lg:rounded-lg  lg:shadow-2xl "src={bg} alt="" srcset=""> </img> */}
   
<div className="hero-content flex-col lg:flex-row lemon ">

<div >
 <h1 className=" text-5xl font-bold">Healthy in side  <br /><span className='text-secondary' >fresh</span> out side</h1>
 <p className=" text-sm   py-5">Exercise is a very important need for our body. Health and  fitness will be obtained  if you can do regular exercise and run a healthy routine.
</p>
<div className='flex mt-2'>
<button className="btn btn-primary bg-primary text-white text-base ">Get Started <BsFillArrowRightCircleFill className='ml-3'></BsFillArrowRightCircleFill></button>
 
 <button className="btn btn-primary bg-white but  text-primary text-base "><BsFillPlayCircleFill className='mr-3'></BsFillPlayCircleFill> Learn more</button>
</div>

 <p className=' mt-5'>Brands:</p>
 <div className='display mt-5'>
 {
      brands.map((brand,i) =>
      <img className='  h-25 w-25 opacity-50' key={i} src={brand} alt="" srcset="" />
      ) }
      </div>
</div>

<Image  src={bag} className="sm:w-full   lg:w-1/2  rounded-lg " alt='' ></Image>
</div>

</div>
    );
};

export default Banner;