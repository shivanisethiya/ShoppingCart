import { toast } from 'react-hot-toast';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
const CartItem = ({item, itemIndex}) => {
const dispatch= useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }
  return (
    <div className='grid grid-cols-2 gap-0 w-[40vw] border-2 border-gray  mx-10 my-3  justify-evenly p-5 '>
    <div className="  flex  flex-col flex-wrap ">
      <img src={item.image}  className="  justify-center h-[180px] w-[200px]  items-center mx-10"/>
      </div>
      <div className=''>
        <h1 className='text-xl font-semibold'>{item.title}</h1>
        <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
      </div>
      <div>
        <p className=' text-green-500 font-bold text-2xl m-3 ml-10 border-2 w-fit p-1 mt-5 shadow-md'>  Price : ${ item.price}</p>
      </div>
      <div className='flex justify-end'>
        <AiFillDelete onClick={removeFromCart} className=' cursor-pointer text-3xl  mr-3'/>
      </div>
    </div>
    
  );
};

export default CartItem;
