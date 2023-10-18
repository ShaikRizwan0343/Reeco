
import { twMerge } from "tailwind-merge";
import { FiSearch } from "react-icons/fi";

const SearchBar = (props) => {
  const { searchContainer,handleSearchInput, searchValue} = props;

  return (
    <div
      className={twMerge(
        `w-full rounded-full flex items-center justify-between `,
        searchContainer
      )}
    >
     <input className="outline-none w-full px-[2%]" onChange={handleSearchInput} value={searchValue} placeholder="Search..."/>

      <FiSearch />
    </div>
  );
};

export default SearchBar;
