import { useState, useEffect } from 'react';
import type { Message } from '../../types/chat.type';
import { ChatInput } from './ChatInput';
import type { ChatViewProps } from '../../types/chat.type';

export const ChatView = ({ messages }: ChatViewProps) => {
  const [input, setInput] = useState('');
  const [localMessages, setLocalMessages] = useState<Message[]>(messages);

  useEffect(() => {
    setLocalMessages(messages);
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setLocalMessages((prev) => [...prev, { sender: 'You', msg: input }]);
    setInput('');
  };

  return (
    <>
      <div className="flex flex-col overflow-y-auto flex-grow sm:px-14 pr-2 py-4">
        {localMessages.map((message, index) => {
          const isFirstOfGroup = index === 0 || localMessages[index - 1].sender !== message.sender;

          return (
            <div
              key={index}
              className={`flex flex-col ${message.sender === 'You' ? 'items-end' : 'items-start'} ${
                isFirstOfGroup ? 'mt-4' : 'mt-0'
              }`}
            >
              {message.sender !== 'You' && isFirstOfGroup && (
                <div className="text-gray-500 text-xs mb-1 ml-6">{message.sender}</div>
              )}

              <div
                className={`p-2 max-w-xs text-sm ${
                  message.sender === 'You'
                    ? 'bg-purple-700 text-white text-end m-[1px]'
                    : 'bg-gray-100 text-black ml-5 m-[1px]'
                } rounded-lg`}
              >
                {message.msg}
              </div>
            </div>
          );
        })}
      </div>

      <ChatInput input={input} setInput={setInput} onSend={handleSend} />
    </>
  );
};
