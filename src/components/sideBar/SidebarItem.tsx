import type { SidebarItemProps } from '../../types/sideBar.type';

const SidebarItem = ({ icon, label, onClick, isActive }: SidebarItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center font-light cursor-pointer text-sm hover:bg-white w-full m-1 group ${
        isActive ? 'text-white' : 'text-black'
      }`}
    >
      <div className="p-2 rounded group-hover:text-purple-700">{icon}</div>
      <span className="text-[10px]">{label}</span>
    </div>
  );
};

export default SidebarItem;
