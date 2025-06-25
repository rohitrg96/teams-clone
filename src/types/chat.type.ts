import type { ReactNode } from 'react';

export interface ChatCardProps {
  grpName: string;
  msg: string;
  onClickChatCard: (id: number) => void;
  chatId: number;
}

export interface Message {
  sender: string;
  msg: string;
}

export interface ChatBoxProps {
  grpName: string;
  messages: Message[];
}

export interface CircularNameProps {
  dimension: number;
  grpName: string;
  chatBox?: boolean;
}

export interface LayoutProps {
  children: ReactNode;
}
