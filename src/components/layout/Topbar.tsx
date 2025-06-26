import { Menu } from 'lucide-react';

const Topbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  return (
    <div
      className="h-12 w-full bg-gray-100 flex items-center px-4 shadow 
     justify-between lg:justify-center"
    >
      {/* Toggle button only visible below lg */}
      <button className="lg:hidden p-1" onClick={onToggleSidebar}>
        <Menu size={20} />
      </button>

      <input
        type="text"
        placeholder="Search"
        className="h-7 bg-white px-3 py-1 w-1/3 border rounded focus:outline-none"
      />
    </div>
  );
};

export default Topbar;
