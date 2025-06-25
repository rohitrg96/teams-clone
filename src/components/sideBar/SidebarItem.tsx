import type { SidebarItemProps } from '../../types/sideBar.type';

const SidebarItem = ({ icon, label, onClick, isActive }: SidebarItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 cursor-pointer ${
        isActive ? 'text-blue-500' : 'text-white'
      }`}
    >
      <div className="p-2 hover:bg-gray-700 rounded">{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default SidebarItem;
