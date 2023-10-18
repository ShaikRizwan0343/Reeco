
import { twMerge } from "tailwind-merge";
import { BsCheck2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "./CustomButton";
import { Status } from "../constants/constant";

const ItemList = (props) => {
  const {
    id,
    name,
    price,
    brand,
    quantity,
    total,
    status,
    image,
    container,
    onClickCheck,
    onClickCross,
  } = props;

  const handleStatus = (status) => {

    switch (status) {
      case Status.approved :
        return "Approved";
      case Status.missing :
        return "Missing";
      case Status.missingUrgent :
        return "Missing-Urgent";
      default:
        return null;
    }
  };

  return (
    <div className={twMerge(`w-full `, container)} key={id}>
      <div className="grid grid-cols-12 py-[1%] border-b-[1px]  ">
        <div className="md:col-span-1  flex items-center justify-center">
          {image ? (
            <div className="w-[25%] h-[55%]">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </div>
        <div className="md:col-span-4  flex items-center">{name}</div>
        <div className="md:col-span-1  flex items-center">{price} </div>
        <div className="md:col-span-1 flex items-center">{brand}</div>
        <div className="md:col-span-1 flex items-center">{quantity}</div>
        <div className="md:col-span-1 flex items-center">{total}</div>
        <div className="md:col-span-3 flex items-center justify-between bg-body  ">
          {status !==null ?<CustomButton
            btnContainer={` rounded-full py-[1.5%] ${
              status
                ? "bg-success   ml-[5%] w-[30%]"
                : " bg-red py-[1.5%]  ml-[8%] w-[25%]"
            }`}
            title={handleStatus(status)}
          />:<div className="w-[30%]"></div>}

          <div className="flex items-center justify-around w-[50%] h-full">
            <BsCheck2
              className={`cursor-pointer ${status === Status.approved ? "text-success" : ""}`}
              onClick={onClickCheck(id)}
            />
            <RxCross2
              className={`cursor-pointer ${status === Status.missing ? "text-red" : ""}`}
              onClick={onClickCross(id)}
            />
            <div>Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
