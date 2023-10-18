import { twMerge } from "tailwind-merge";

const CustomButton = (props) => {
  const { title, btnContainer, btnText, onBtnClick } = props;

  return (
    <div
      onClick={onBtnClick}
      className={twMerge(
        `w-full flex items-center justify-center text-white cursor-pointer`,
        btnContainer
      )}
    >
      <p className={twMerge(`text-white`, btnText)}>{title}</p>
    </div>
  );
};

export default CustomButton;
