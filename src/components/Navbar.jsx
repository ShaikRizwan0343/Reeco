
import { TfiShoppingCart } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="max-w-[1920px] w-full h-[86px] bg-green-300 px-[5%] flex items-center justify-between text_24 bg-green text-white  ">
      <div className="flex items-center justify-between gap-[50%] ">
        <div className="cursor-pointer">Recco</div>
        <div className="cursor-pointer">Store</div>
        <div className="cursor-pointer">Orders</div>
        <div className="cursor-pointer">Analytics</div>
      </div>
      <div className=" flex items-center justify-between gap-[20%]">
        <div>
          <TfiShoppingCart className="text-[24px] cursor-pointer" />
        </div>
        <div>Hello,james</div>
      </div>
    </div>
  );
};

export default Navbar;
