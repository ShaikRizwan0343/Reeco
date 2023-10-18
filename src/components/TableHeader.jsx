
import { twMerge } from "tailwind-merge";

const TableHeader = (props) => {
  const {
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    headerContainer,
  } = props;
  return (
    <div className={twMerge(`w-full text-gray py-[1%]`, headerContainer)}>
      <div className="grid grid-cols-12  ">
        <div className="md:col-span-1  flex items-center justify-center"></div>
        <div className="md:col-span-4  flex items-center ">{heading1}</div>
        <div className="md:col-span-1  flex items-center">{heading2} </div>
        <div className="md:col-span-1 flex items-center">{heading3}</div>
        <div className="md:col-span-1 flex items-center">{heading4}</div>
        <div className="md:col-span-1 flex items-center">{heading5}</div>
        <div className="md:col-span-3 flex items-center">{heading6}</div>
      </div>
    </div>
  );
};

export default TableHeader;
