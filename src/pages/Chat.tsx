import React from 'react';
import { ChartCard } from '../components/chat/ChatCard';
import { groupData } from '../const/chat';
import { ChatBox } from '../components/chat/ChatBox';

export const Chat: React.FC = () => {
  return (
    <>
      <div className="flex ">
        <div className=" w-1/4 h-screen bg-gray-100">
          {groupData.map((group) => {
            const lastMsg = group.messages.length - 1;
            return (
              <>
                <ChartCard
                  grpName={group.grpName}
                  msg={group.messages[lastMsg].msg}
                  key={group.id}
                />
              </>
            );
          })}
        </div>
        <ChatBox grpName={groupData[0].grpName} messages={groupData[0].messages} />
      </div>
    </>
  );
};
