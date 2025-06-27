import { MessageCircle, Users, Calendar, Bell, Video } from 'lucide-react';
import SidebarItem from '../sideBar/SidebarItem';
import type { SidebarProps } from '../../types/sideBar.type';

const Sidebar = ({ isMobile, onSelectPage }: SidebarProps) => {
  return (
    <div
      className={`h-screen bg-gray-100 border-r border-gray-200 flex flex-col items-center py-2 space-y-6
      ${isMobile ? 'fixed top-12 left-0 z-20 w-20' : 'hidden'}
      lg:flex lg:static lg:w-20`}
    >
      <SidebarItem
        icon={<MessageCircle size={24} />}
        label="Chat"
        onClick={() => onSelectPage('Chat')}
      />
      <SidebarItem icon={<Video size={24} />} label="Meet" onClick={() => onSelectPage('Meet')} />
      <SidebarItem
        icon={<Users size={24} />}
        label="Community"
        onClick={() => onSelectPage('Community')}
      />
      <SidebarItem
        icon={<Calendar size={24} />}
        label="Calendar"
        onClick={() => onSelectPage('Calendar')}
      />
      <SidebarItem
        icon={<Bell size={24} />}
        label="Activity"
        onClick={() => onSelectPage('Activity')}
      />
    </div>
  );
};

export default Sidebar;
