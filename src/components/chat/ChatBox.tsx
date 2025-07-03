import type { ChatBoxProps } from '../../types/chat.type';
import { ChatHeader } from './ChatHeader';

export const ChatBox = ({ grpName, messages }: ChatBoxProps) => {
  return (
    <div className="w-full md:w-1/2 md:p-3 lg:w-3/4 h-screen flex flex-col shadow-2xl rounded-3xl">
      {/* Chat Header */}
      <ChatHeader grpName={grpName} />

      {/* Chat Messages */}
      <div className="flex flex-col gap-2 overflow-y-auto flex-grow sm:px-14 pr-2 py-4">
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

      {/* Chat Input */}
      <div className="px-4 sm:px-14 pb-15 pt-6 flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow border rounded-xl px-4 py-2 focus:outline-none focus:border-b-purple-700 focus:border-b-2"
        />
      </div>
    </div>
  );
};
