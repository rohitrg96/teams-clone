import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import type { LayoutProps } from '../../types/chat.type';

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Permanent sidebar on lg screens */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Toggle Sidebar on small/medium screens */}
      {isSidebarOpen && <Sidebar isMobile={true} />}

      <div className="flex flex-col flex-1">
        <Topbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-hidden bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
