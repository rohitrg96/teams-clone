import { useState, useRef, useEffect } from 'react';
import type { Message } from '../../types/chat.type';
import { Smile, Paperclip, Send } from 'lucide-react';

interface ChatViewProps {
  messages: Message[];
}

export const ChatView = ({ messages }: ChatViewProps) => {
  const [input, setInput] = useState('');
  const [localMessages, setLocalMessages] = useState<Message[]>(messages);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
              className={`flex flex-col ${
                message.sender === 'You' ? 'items-end' : 'items-start'
              } ${isFirstOfGroup ? 'mt-4' : 'mt-0'}`} // spacing only when new group starts
            >
              {/* Show sender name for others only on first of group */}
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

      {/* Input with icons */}
      <div className="px-4 sm:px-14 pb-15 pt-6 flex items-center">
        <div className="flex items-center border rounded-xl flex-grow px-2 relative">
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-2 py-2 text-sm focus:outline-none pr-20"
          />

          {/* Icons inside input */}
          <div className="absolute right-3 flex items-center space-x-2">
            <button className="p-1 hover:text-purple-700">
              <Smile size={18} />
            </button>
            <button
              className="p-1 hover:text-purple-700"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip size={18} />
            </button>
            <button className="p-1 hover:text-purple-700" onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setInput(e.target.files[0].name);
            }
          }}
        />
      </div>
    </>
  );
};
