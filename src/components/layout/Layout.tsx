import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Chat } from '../../pages/Chat';
import { Meet } from '../../pages/Meet.tsx';
import { Community } from '../../pages/Community';
import { CalendarPage } from '../../pages/Calendar.tsx';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Chat'); // Manage active page

  const renderPage = () => {
    switch (activePage) {
      case 'Chat':
        return <Chat />;
      case 'Meet':
        return <Meet />;
      case 'Community':
        return <Community />;
      case 'Calendar':
        return <CalendarPage />;
      default:
        return <Chat />;
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Permanent sidebar on lg screens */}
      <div className="hidden lg:flex">
        <Sidebar onSelectPage={setActivePage} />
      </div>

      {/* Toggle Sidebar on small/medium screens */}
      {isSidebarOpen && <Sidebar isMobile={true} onSelectPage={setActivePage} />}

      <div className="flex flex-col flex-1">
        <Topbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-hidden bg-gray-50">{renderPage()}</main>
      </div>
    </div>
  );
};

export default Layout;
