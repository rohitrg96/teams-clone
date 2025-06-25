const Topbar = () => {
  return (
    <div className="h-12 w-full bg-gray-100 flex items-center px-4 shadow justify-center">
      <input
        type="text"
        placeholder="Search"
        className="h-7 bg-white px-3 py-1 w-1/3 border rounded focus:outline-none "
      />
    </div>
  );
};

export default Topbar;
