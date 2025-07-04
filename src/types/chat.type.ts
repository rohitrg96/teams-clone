import type { ReactNode } from 'react';

export interface ChatCardProps {
  grpName: string;
  msg: string;
  onClickChatCard: (id: number) => void;
  chatId: number;
  image?: string;
  dateTime: Date;
  isActive: boolean;
}

export interface Message {
  sender: string;
  msg: string;
}

export interface ChatBoxProps {
  grpName: string;
  image?: string;
  messages: Message[];
}

export interface CircularNameProps {
  dimension: number;
  grpName: string;
  chatBox?: boolean;
  image?: string;
}

export interface LayoutProps {
  children: ReactNode;
}
