import { ChatHeader } from './ChatHeader';
import { FilesView } from './FilesView';
import { PhotosView } from './PhotosView';
import { ChatView } from './ChatView';
import { useState } from 'react';
import type { ChatBoxProps } from '../../types/chat.type';

export const ChatBox = ({ grpName, messages, image, onSelectPage }: ChatBoxProps) => {
  const [activeTab, setActiveTab] = useState('Chat');

  return (
    <div className="w-full h-screen flex flex-col shadow-2xl rounded-3xl">
      <ChatHeader
        onSelectPage={onSelectPage}
        grpName={grpName}
        image={image}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'Chat' && <ChatView messages={messages} />}
      {activeTab === 'Files' && <FilesView />}
      {activeTab === 'Photos' && <PhotosView />}
    </div>
  );
};
