import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add,remove } from '../redux/Slices/cartSlice';
const Product = ({post}) => {

  const{cart} = useSelector((state)=> state);
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart");

  
  }
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-2xl rounded-lg p-3 w-[220px]">
       <div>
        <p className="font-bold text-gray-700 text-large ">{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
       </div>
       <div>
        <p className="text-sm p-2 w-40 text-gray-500">{post.description.split(" ").slice(0,8).join(" ") + "..."}</p>
       </div>
       <div className="h-[180px]">
        <img className="w-full h-full"src = {post.image} alt="Product"/>
       </div>
       <div className="flex gap-11 mt-3 items-center">
       <div>
        <p className="text-green-600 font-bold ">${post.price}</p>
       </div>
        <div className="text-sm bg-black text-white rounded-lg p-1">
          {
              cart.some((p)=> p.id == post.id) ? (<button onClick={removeFromCart}>Remove Item</button>):(<button onClick={addToCart}>Add to Cart</button>)
          }
        </div>
       </div>
       
    </div>
  );
};

export default Product;
