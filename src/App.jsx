import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import SearchBar from "./components/SearchBar";
import { LuPrinter } from "react-icons/lu";
import CustomButton from "./components/CustomButton";
import SubHeader from "./components/SubHeader";
import data from "../src/data/Data.json";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "./redux/productSlice";
import PopUp from "./components/PopUp";
import ItemList from "./components/ItemList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductData(data));
  }, []);

  const productData = useSelector((state) => state.productData.data);

  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSuccess = (id) => () => {
    const approvedData = productData.map((item) => {
      if (item.id === id) {
        return { ...item, status: 1 };
      }
      return item;
    });
    dispatch(setProductData(approvedData));
  };
  const handleRemove = (id) => () => {
    setShowModal(true);
    setProductId(id);
  };

  const handlePopApproved = () => {
    const missingData = productData.map((item) => {
      if (item.id === productId) {
        return { ...item, status: 0 };
      }
      return item;
    });
    dispatch(setProductData(missingData));
    handlePopReject();
  };
  const handlePopReject = () => {
    setShowModal(false);
    setProductId(null);
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="max-w-[1920px] mx-auto bg-body w-full h-full">
      <Navbar />
      <div className="w-[90%] mx-auto mt-[2%]">
        <SubHeader />
      </div>
      <div className="h-full w-[90%]  mx-auto px-[5%] flex flex-col  shadow-card  mt-[2%] rounded_8px bg-white ">
        <div className="w-full flex items-center justify-between mt-[2%]">
          <SearchBar
            searchContainer=" px-[1.5%] py-[0.5%] w-[30%] border-[1px] border-gray "
            handleSearchInput={handleSearchInput}
            searchValue={searchValue}
          />
          <div className="flex items-center justify-end w-[20%]  ">
            <CustomButton
              btnContainer={
                "py-[2.5%] w-[30%] rounded-full px-[1%]  border-[1px] border-green"
              }
              btnText={"text-[10px] leading-[13px] font-semibold text-green"}
              title={"Add item"}
            />
            <LuPrinter className="text_24 text-green ml-[20%]" />
          </div>
        </div>
        <TableHeader
          heading1="Product name"
          heading2="Price"
          heading3="Brand"
          heading4="Quantity"
          heading5="Total"
          heading6="Status"
          headerContainer={
            "rounded-t-xl text_20 border-gray border-[1px] mt-[2%]"
          }
        />
        {productData.map((item) => {
          const id = item.id;
          const name = item.name;
          const brand = item.brand;
          const price = item.price;
          const quantity = item.quantity;
          const total = item.total;
          const status = item.status;
          const image = item.image;
          return (
            <ItemList
              id={id}
              name={name}
              price={price}
              brand={brand}
              quantity={quantity}
              total={total}
              status={status}
              image={image}
              container={"bg-yellow-200 text_16"}
              onClickCross={handleRemove}
              onClickCheck={handleSuccess}
              key={id}
            />
          );
        })}
      </div>
      {showModal ? (
        <PopUp
          popUpheading="Missing product"
          waringMessage="is'Chicken Breast,Boneless...'urgent?"
          onClickSuccess={handlePopApproved}
          onClickReject={handlePopReject}
        />
      ) : null}
    </div>
  );
}

export default App;
