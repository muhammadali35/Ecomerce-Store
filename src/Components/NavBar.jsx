import React from "react";
import {useSelector} from 'react-redux'
import Cart from '../Components/cart/Cart'
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
 const totalAmount=useSelector((state)=>state.cart.totalAmount)
  const handleOpen = () => setOpen(true);
  return (
    <div className="w-full ">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-lg">
        Welcome ALL
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white text-black flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">STORE</div>

        {/* User Options */}
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300">Logout</button>
          <button className="hover:text-gray-300">Wish List</button>
          <button
  className="relative flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
  onClick={handleOpen}
>
  <span className="flex items-center gap-2">
    Shopping Bag
    {totalAmount > 0 && (
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {totalAmount}
      </span>
    )}
  </span>
</button>

        </div>
      </div>
         {open && 
          <Cart open={open} setOpen={setOpen}/>
         }

      {/* Bottom Bar */}
      <div className="bg-black text-white flex justify-around py-2 text-sm">
        <span>50% OFF</span>
        <span>Free shipping and returns</span>
        <span>Different payment methods</span>
      </div>
    </div>
  );
};

export default NavBar;
