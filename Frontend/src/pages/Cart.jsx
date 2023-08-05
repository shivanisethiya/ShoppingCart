import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem';
import { useEffect, useState } from "react";
const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=> acc+ curr.price, 0));
  },[cart]);
  return (
    <div>
  {
    cart.length > 0 ?
    (
      <div className="flex flex-wrap mt-28 ml-8">
    <div >
       {
        cart.map((item,index) =>(
          <CartItem key={item.id} item={item} itemIndex={index}/>
        ))
       }
       </div>
       <div className="h-[40%] fixed right-24 summary">
        <div className="flex flex-col gap-5 w-[30vw]  mt-4 border-2 h-fit p-5 shadow-lg">
          <p className=" text-gray-400 font-extrabold text-[23px] uppercase">Price Details</p>
          <div className="text-green-700 font-bold text-3xl border "></div>
          <div  className=" flex gap-7 flex-col">
         
         <div className=" flex justify-between">
         <span className="text-xl">
              Total Items : 
            </span>
          <span className="font-semibold"> {cart.length}</span>
         </div>

         
         <div className=" flex justify-between">
         <span className="text-xl">
         Delivery Charges :
            </span>
            <span className="font-semibold"> FREE</span>
         </div>
         <div className="text-green-700 font-bold text-3xl border"></div>
         <div className=" flex justify-between">
         <span className="text-xl">
         Total Amount : 
            </span>
            <span className="font-semibold"> ${totalAmount}</span>
         </div>
      
           
          </div>
          <div className="text-green-700 font-bold text-3xl border"></div>
          <div className="flex justify-center">
          <button className="bg-green-500 text-white text-xl p-3 rounded-lg w-3/4">Check Out</button>
          </div>
       
       
        </div>
         <div className=" mt-5 flex gap-3">
         <img src="../assets/download.webp" className="w-[40px] h-[40px]"/>
         <div className="text-gray-400 text-lg">
        
         Safe and Secure Payments.Easy returns.100% 
        <div>
        Authentic products.
        </div>
       
         
     </div>
         </div>
    
        

        </div>
      

    </div>):(<div className="h-[80vh] w-full flex flex-col  items-center gap-3 mt-28">
    <img src="../assets/cart.png" width={400}/ >
    <h1 className="text-2xl font-semibold"> Your Cart is empty !</h1>
    <div className="text-gray-400 text-xl">Explore our wide selection and find something you like</div>
    <NavLink to="/">
    <button className="bg-green-500 text-white p-3 rounded-lg mt-10">Shop Now</button>
    </NavLink>
 
    </div>)
  }
    </div>
  );
};

export default Cart;
