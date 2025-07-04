import React, { useState, useRef, useEffect } from 'react';
import { ChatCard } from '../components/chat/ChatCard';
import { groupData } from '../const/chat';
import { ChatBox } from '../components/chat/ChatBox';
import { Filter, Video, Plus } from 'lucide-react';
import type { ChatPageProps } from '../types/chat.type';

export const Chat = ({ onSelectPage, id, setId, setIsMeet }: ChatPageProps) => {
  const [chatListWidth, setChatListWidth] = useState(400);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const MIN_WIDTH = 280;
  const MAX_WIDTH_FACTOR = 0.5;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const newWidth = e.clientX - containerRect.left;

    if (newWidth < MIN_WIDTH) {
      setChatListWidth(0);
    } else if (newWidth <= containerWidth * MAX_WIDTH_FACTOR) {
      setChatListWidth(newWidth);
    } else {
      setChatListWidth(containerWidth * MAX_WIDTH_FACTOR);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.body.style.cursor = 'default';
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex h-screen w-full relative">
      {chatListWidth > 0 && (
        <div
          className="h-full bg-gray-100 hidden md:block relative"
          style={{ width: chatListWidth }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 h-16 ">
            <div className="text-lg font-bold">Chat</div>
            <div>
              <button className="bg-white hover:shadow-xl p-2 m-1 rounded-lg">
                <Filter size={20} />
              </button>
              <button
                className="bg-white hover:shadow-xl p-2 m-1 rounded-lg"
                onClick={() => {
                  setIsMeet(true);
                  onSelectPage('CallPage');
                }}
              >
                <Video size={20} />
              </button>
              <button className="bg-white hover:shadow-xl p-2 m-1 rounded-lg">
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Chat List */}
          <div className="overflow-y-auto h-[calc(100%-64px)] px-3 pb-10">
            {groupData.map((group) => {
              const lastMsg = group.messages[group.messages.length - 1]?.msg || '';
              return (
                <ChatCard
                  key={group.id}
                  grpName={group.grpName}
                  msg={lastMsg}
                  chatId={group.id}
                  image={group.image}
                  dateTime={group.dateTime}
                  isActive={group.id === id}
                  onClickChatCard={setId}
                />
              );
            })}
          </div>

          <div
            onMouseDown={handleMouseDown}
            className="cursor-col-resize hidden md:block absolute top-0 right-0"
            style={{ width: '8px', height: '100%', background: 'transparent' }}
          >
            <div className="w-full h-full hover:bg-gray-400"></div>
          </div>
        </div>
      )}

      {/* Drag button when collapsed */}
      {chatListWidth === 0 && (
        <div
          className="cursor-col-resize absolute left-0 top-0 h-full flex items-center justify-center"
          onMouseDown={handleMouseDown}
        >
          <div className="w-1 h-full bg-transparent hover:bg-gray-400 absolute left-0 top-0"></div>
          <div
            className="w-3 h-16 bg-gray-500 hover:bg-gray-700 flex items-center justify-center text-xs text-white absolute left-0"
            style={{ top: '40%', transform: 'translateY(-50%)' }}
            title="Select or drag to expand"
          >
            &gt;
          </div>
        </div>
      )}

      {/* ChatBox */}
      <div className="flex-1 h-full">
        <ChatBox
          onSelectPage={onSelectPage}
          grpName={groupData[id - 1].grpName}
          messages={groupData[id - 1].messages}
          image={groupData[id - 1].image}
        />
      </div>
    </div>
  );
};
