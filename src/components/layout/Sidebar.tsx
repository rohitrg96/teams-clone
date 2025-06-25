import { MessageCircle, Users, Calendar, Bell, Video } from 'lucide-react';
import SidebarItem from '../sideBar/SidebarItem';
const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-gray-100 border-r border-gray-200 flex flex-col items-center py-2 space-y-6">
      <SidebarItem icon={<MessageCircle size={24} />} label="Chat" />
      <SidebarItem icon={<Video size={24} />} label="Meet" />
      <SidebarItem icon={<Users size={24} />} label="Community" />
      <SidebarItem icon={<Calendar size={24} />} label="Calendar" />
      <SidebarItem icon={<Bell size={24} />} label="Activity" />
    </div>
  );
};

export default Sidebar;
