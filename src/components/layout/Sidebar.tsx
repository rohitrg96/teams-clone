import { MessageCircle, Users, Calendar, Bell, Video } from 'lucide-react';
import SidebarItem from '../sideBar/SidebarItem';
import type { SidebarProps } from '../../types/sideBar.type';

const sidebarItems = [
  { icon: <MessageCircle size={24} />, label: 'Chat' },
  { icon: <Video size={24} />, label: 'Meet' },
  { icon: <Users size={24} />, label: 'Community' },
  { icon: <Calendar size={24} />, label: 'Calendar' },
  { icon: <Bell size={24} />, label: 'Activity' },
];

const Sidebar = ({ isMobile, onSelectPage }: SidebarProps) => {
  return (
    <div
      className={`h-screen bg-gray-100 border-r border-gray-300 flex flex-col items-center py-2 space-y-6
      ${isMobile ? 'fixed top-12 left-0 z-20 w-17' : 'hidden'}
      lg:flex lg:static lg:w-17`}
    >
      {/* Teams Icon at Top */}
      <div className="m-1">
        <img src="/images/logo.png" alt="Teams" className="w-12 h-12 object-contain" />
      </div>

      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          onClick={() => onSelectPage(item.label)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
