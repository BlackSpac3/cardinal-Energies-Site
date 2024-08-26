const SearchBox = ({ placeholder, onKeyDown, onChange }) => {
  return (
    <div className="relative flex items-center w-full">
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="bg-gray-50 rounded-md py-2 pl-10 outline-none text-sm w-full"
      />
      <i class="fi fi-rr-search absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-[14px] text-placeholder"></i>
    </div>
  );
};
export default SearchBox;
