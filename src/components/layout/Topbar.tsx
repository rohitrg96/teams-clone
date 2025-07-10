import { Menu, Ellipsis, Search } from 'lucide-react';

const Topbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  return (
    <div className="h-14 w-full bg-gray-100 flex items-center px-4  relative">
      {/* Sidebar toggle only on small screens */}
      <button className="lg:hidden p-1" onClick={onToggleSidebar}>
        <Menu size={20} />
      </button>

      {/* Center Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-5/12">
          <Search size={15} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="h-8 pl-15 border-1 border-gray-200 bg-white px-3 py-1 w-full rounded-lg focus:outline-none text-sm placeholder:text-sm"
          />
        </div>
      </div>
      {/* Right Corner Icons */}
      <div className="flex items-center space-x-3 absolute right-4">
        <div className="p-1 rounded-full hover:bg-white cursor-pointer">
          <Ellipsis size={20} className="text-black" />
        </div>

        <img
          src="/images/RohitProfile.jpg"
          alt="Profile picture of Rohit"
          width={36}
          height={36}
          className="w-9 h-9 rounded-full object-cover border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Topbar;
