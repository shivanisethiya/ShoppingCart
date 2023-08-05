import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Navbar = (props) => {
  const{cart} = useSelector((state)=> state);
  let login= props.login;
  let setLogin=props.setLogin;
  return (
    <div className="relative">

    
    <div className="flex justify-center bg-slate-900 text-xl p-2 fixed top-0 w-[100vw]">
      <div className="flex justify-between w-[65vw]">
        <NavLink to="/">
          <img src="../assets/logo.png" className="h-14" />
        </NavLink>
        <div className="text-[white] flex  items-center gap-10">
          <NavLink to="/" className="hover:text-[#FFD300]">
            <p>Home</p>
          </NavLink>
       
   
        
           
        { login &&
           <Link className='hover:text-[#FFD300]' to="/">
               <button onClick={()=>{
                   setLogin(false);
                   toast.success("Logged out");
               }}>
                   Log Out
               </button>
           </Link>
       }
       { login &&
           <Link className='hover:text-[#FFD300]' to="/dashboard">
               <button>
                   Dashboard
               </button>
           </Link>
       } 
        {!login &&
           <Link className='hover:text-[#FFD300]' to="/login">
               <button >
                   Login
               </button>
           </Link>
       }
       { !login &&
           <Link className='hover:text-[#FFD300]' to="/signup">
               <button>
                   Sign Up
               </button>
           </Link>
       }
     
       
   
      
    

           
   <NavLink to="/cart" className="relative hover:text-[#FFD300]">
          {
            cart.length > 0 ? (<span className="absolute bg-green-600 rounded-full text-xs p-1 border-2  left-6 bottom-2  w-5 h-5 animate-bounce flex justify-center items-center border-white">{cart.length}</span>):(<span></span>)
          }
          <FaShoppingCart  />
          </NavLink>  
        
          </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
