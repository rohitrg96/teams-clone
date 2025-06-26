import React, { useState } from 'react';
import { ChatCard } from '../components/chat/ChatCard';
import { groupData } from '../const/chat';
import { ChatBox } from '../components/chat/ChatBox';
import { Filter, Video, Plus } from 'lucide-react';

export const Chat: React.FC = () => {
  const [id, setId] = useState(1);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Hidden on small screens, shown on md and above */}
      <div className="hidden md:block  md:w-2/6 md:p-4 h-screen bg-gray-100 ">
        <div className="flex justify-between mr-3">
          <div className="ml-5 text-lg mb-5 font-bold p-2">Chat</div>
          <div>
            <button className="bg-white hover:shadow-xl p-2 m-1 rounded-lg">
              <Filter size={20} />
            </button>
            <button className="bg-white p-2 m-1 rounded-lg hover:shadow-xl">
              <Video size={20} />
            </button>
            <button className="bg-white p-2 m-1 rounded-lg">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Chat List */}
        <div className="flex-1 overflow-y-auto">
          {groupData.map((group) => {
            const lastMsg = group.messages.length - 1;
            return (
              <ChatCard
                grpName={group.grpName}
                msg={group.messages[lastMsg].msg}
                key={group.id}
                onClickChatCard={setId}
                chatId={group.id || 0}
              />
            );
          })}
        </div>
      </div>

      {/* ChatBox always visible */}
      <ChatBox grpName={groupData[id - 1].grpName} messages={groupData[id - 1].messages} />
    </div>
  );
};
