import type { ReactNode } from 'react';
export interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}
