import type { ReactNode } from 'react';

export interface ChatCardProps {
  grpName: string;
  msg: string;
  onClickChatCard: (id: number) => void;
  chatId: number;
  image?: string;
  dateTime: string;
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
  onSelectPage: (page: string) => void;
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

export interface ChatPageProps {
  onSelectPage: (page: string) => void;
  id: number;
  setId: (id: number) => void;
  setIsMeet: (isMeet: boolean) => void;
}

export interface ChangePageProps {
  onSelectPage: (page: string) => void; // Pass selected page back to Layout
  id?: number;
}

export interface ChatHeaderProps {
  grpName: string;
  image?: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectPage: (page: string) => void;
}
export interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  pt?: string;
  pb?: string;
}

export interface ChatViewProps {
  messages: Message[];
}

export interface UploadedFile {
  name: string;
  date: string;
  sentBy: string;
}
