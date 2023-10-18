import React from "react";
import { twMerge } from "tailwind-merge";

const SubHeader = (props) => {
  const { headerContainer } = props;
  return (
    <div
      className={twMerge(
        `grid grid-cols-6 shadow-card py-[2%] rounded_8px`,
        headerContainer
      )}
    >
      <div className="px-[20%] border-r-[1px] border-gray  ">
        <div className="font-bold text-gray">Supplier</div>
        <div className="mt-[3%]">East caost fruits & vegetable</div>
      </div>
      <div className="px-[20%] border-r-[1px] border-gray  ">
        <div className="font-bold text-gray">Shipping date</div>
        <div className="mt-[3%]">Thu,Feb 10</div>
      </div>
      <div className="px-[20%] border-r-[1px] border-gray  ">
        <div className="font-bold text-gray">Total</div>
        <div className="mt-[3%]">$15,028.3</div>
      </div>
      <div className="px-[20%] border-r-[1px] border-gray  ">
        <div className="font-bold text-gray">Category</div>
      </div>
      <div className="px-[20%] border-r-[1px] border-gray  ">
        <div className="font-bold text-gray">Department</div>
        <div className="mt-[3%]">300-400-678</div>
      </div>
      <div className="px-[20%] border-r-[1px] border-gray  ">
        <div className="font-bold text-gray">Status</div>
        <div className="mt-[3%]">Awaiting your approval</div>
      </div>
    </div>
  );
};

export default SubHeader;
