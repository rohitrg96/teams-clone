import { ChatCard } from '../components/chat/ChatCard';
import { groupData } from '../const/chat';
import { ChatBox } from '../components/chat/ChatBox';
import { Filter, Video, Plus, ArrowLeft } from 'lucide-react';
import type { ChatPageProps } from '../types/chat.type';
import { useChatPage } from '../hooks/useChatPage';

export const Chat = ({ onSelectPage, id, setId, setIsMeet }: ChatPageProps) => {
  const {
    chatListWidth,
    showChatBoxMobile,
    setShowChatBoxMobile,
    isDesktop,
    containerRef,
    handleMouseDown,
  } = useChatPage();

  const handleChatSelect = (chatId: number) => {
    setId(chatId);
    setShowChatBoxMobile(true);
  };

  return (
    <div ref={containerRef} className="flex h-screen w-full relative">
      {/* Chat List - Full width on mobile, resizable sidebar on desktop */}
      {(chatListWidth > 0 || !showChatBoxMobile) && (
        <div
          className={`h-full bg-gray-100 ${
            showChatBoxMobile ? 'hidden' : 'block'
          } md:block relative w-full md:w-auto`}
          style={{
            width: isDesktop && chatListWidth > 0 ? chatListWidth : undefined,
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 h-16">
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
                  dateTime={group.dateTime.toISOString()}
                  isActive={group.id === id}
                  onClickChatCard={handleChatSelect}
                />
              );
            })}
          </div>

          {/* Drag Handler only for desktop */}
          {isDesktop && (
            <div
              onMouseDown={handleMouseDown}
              className="cursor-col-resize hidden md:block absolute top-0 right-0"
              style={{ width: '8px', height: '100%', background: 'transparent' }}
            >
              <div className="w-full h-full hover:bg-gray-400"></div>
            </div>
          )}
        </div>
      )}

      {/* ChatBox - Fullscreen on mobile, side-by-side on desktop */}
      <div className={`flex-1 h-full ${showChatBoxMobile ? 'block' : 'hidden'} md:block`}>
        <div className="h-full flex flex-col">
          {/* Back Button for mobile only */}
          <div className="md:hidden flex items-center p-2 border-b">
            <button
              className="p-2 hover:bg-gray-200 rounded"
              onClick={() => setShowChatBoxMobile(false)}
            >
              <ArrowLeft size={20} />
            </button>
            <div className="ml-2 font-semibold">{groupData[id - 1]?.grpName}</div>
          </div>

          {/* ChatBox */}
          <ChatBox
            onSelectPage={onSelectPage}
            grpName={groupData[id - 1]?.grpName}
            messages={groupData[id - 1]?.messages}
            image={groupData[id - 1]?.image}
          />
        </div>
      </div>
    </div>
  );
};
