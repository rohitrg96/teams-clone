import Sidebar from './Sidebar';
import Topbar from './Topbar';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1  overflow-auto bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
