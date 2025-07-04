import type { Message } from '../../types/chat.type';

interface ChatViewProps {
  messages: Message[];
}

export const ChatView = ({ messages }: ChatViewProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 overflow-y-auto flex-grow sm:px-14 pr-2 py-4">
        {messages.map((message, index) => {
          const isFirstOfGroup = index === 0 || messages[index - 1].sender !== message.sender;

          return (
            <div
              key={index}
              className={`flex flex-col ${message.sender === 'You' ? 'items-end' : 'items-start'}`}
            >
              {message.sender !== 'You' && isFirstOfGroup && (
                <div className="text-gray-500 text-xs mb-1 ml-6">{message.sender}</div>
              )}

              <div
                className={`p-2 max-w-xs text-sm ${
                  message.sender === 'You'
                    ? 'bg-purple-700 text-white m-1 text-end'
                    : 'bg-gray-100 text-black ml-5'
                } rounded-lg`}
              >
                {message.msg}
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 sm:px-14 pb-15 pt-6 flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-b-purple-700 focus:border-b-2"
        />
      </div>
    </>
  );
};
