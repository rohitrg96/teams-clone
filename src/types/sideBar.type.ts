import type { ReactNode } from 'react';
export interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface SidebarProps {
  isMobile?: boolean;
  onSelectPage: (page: string) => void; // Pass selected page back to Layout
}
