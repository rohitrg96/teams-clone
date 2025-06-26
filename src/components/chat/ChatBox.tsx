import type { ChatBoxProps } from '../../types/chat.type';
import { ChatHeader } from './ChatHeader';

export const ChatBox = ({ grpName, messages }: ChatBoxProps) => {
  return (
    <div className="w-3/4 h-screen flex flex-col">
      {/* Chat Header */}
      <ChatHeader grpName={grpName} />

      {/* Chat Messages - Scrollable Area */}
      <div className="flex flex-col gap-2 overflow-y-auto flex-grow px-14 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2 max-w-xs ${
                message.sender === 'You'
                  ? 'bg-purple-700 text-white m-1 text-end'
                  : 'bg-gray-100 text-black ml-5'
              } rounded-lg`}
            >
              <div className="text-xs mb-1">{message.sender === 'You' ? '' : message.sender}</div>
              <div>{message.msg}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input - Fixed at Bottom */}
      <div className="px-14 py-4 flex bg-red-200 items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow border rounded-xl px-4 py-2 focus:outline-none focus:border-b-purple-700 focus:border-b-2"
        />
      </div>
    </div>
  );
};
