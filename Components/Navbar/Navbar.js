import React from 'react';
;

const Navbar = () => {
     const menuItems =
    <React.Fragment>
   
   <li><a>Home</a></li>
          <li><a>Program</a></li>
           <li><a>Blog</a></li>
          <li><a>About us</a></li>
  
       <li><a className="btn btn-primary  text-white text-sm">Login</a></li>
 
   

</React.Fragment> 
    
    return (
        <div className="navbar bg-gradient-to-r from-accent to-neutral flex justify-between">
        <div className="navbar-start pl-5">
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost    lg:hidden">
              <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItems}
             
            </ul>
          </div>
          <a className=" flex normal-case text-xl "><button className='btn btn-secondary text-white btn-sm pl-3'>Gym</button><span className='text-primary text-md font-semibold'>mania</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
         {menuItems}

          </ul>
        </div>
       
      </div>
      
    );
};

export default Navbar;

