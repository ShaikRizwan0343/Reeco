
import { RxCross2 } from "react-icons/rx";
import CustomButton from "./CustomButton";
import { twMerge } from "tailwind-merge";

const PopUp = (props) => {
  const {
    waringMessage,
    popUpheading,
    onClickSuccess,
    onClickReject,
    popUpContainer,
  } = props;
  return (
    <div
      className={twMerge(
        `fixed inset-0  flex items-center justify-center text_24 bg-[rgba(0,0,0,0.5)] z-50`,
        popUpContainer
      )}
    >
      <div className="w-[600px] h-[250px] rounded_8px p-[2%] bg-white">
        <div className="flex items-center justify-between">
          <div className=" font-bold">{popUpheading}</div>
          <RxCross2 onClick={onClickReject} className="cursor-pointer"/>
        </div>
        <div className="mt-[4%] ">{waringMessage}</div>

        <div className="flex items-end justify-end   pl-[70%] mt-[8%]  ">
          <CustomButton
            title="No"
            btnText={"font-bold text-black"}
            onBtnClick={onClickReject}
            onClickSuccess
          />
          <CustomButton
            title="Yes"
            btnText={"font-bold text-black"}
            onBtnClick={onClickSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
