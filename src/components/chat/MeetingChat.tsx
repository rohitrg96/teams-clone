import { ChatView } from './ChatView';
import type { Message } from '../../types/chat.type';
import { X, UserPlus, Pencil, Video } from 'lucide-react';

interface MeetingChatProps {
  messages: Message[];
  onClose: () => void;
  isMeet: boolean; // New optional prop
}

export const MeetingChat = ({ messages, onClose, isMeet }: MeetingChatProps) => {
  return (
    <div className="w-3/12 h-full bg-white text-black border-l border-gray-300 shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center h-12 px-4 border-b border-gray-300">
        <div className="font-semibold">Meeting Chat</div>
        <X className="cursor-pointer" onClick={onClose} size={18} />
      </div>

      {/* Chat View or Default Message */}
      <div className="flex-1 overflow-y-auto">
        {isMeet ? (
          <div className="flex flex-col h-full">
            {/* Main Scrollable Content */}
            <div className="flex-1 overflow-y-auto">{/* Your chat messages here */}</div>

            {/* System Message Block Fixed at Bottom */}
            <div className="px-4 py-10  border-gray-200 text-sm text-gray-600 bg-white space-y-2">
              <div className="flex items-center space-x-2">
                <UserPlus size={16} className="text-gray-500" />
                <span>Rohit Gadekar joined the conversation.</span>
              </div>

              <div className="flex items-center space-x-2">
                <Pencil size={20} className="text-gray-500" />
                <span>
                  Rohit Gadekar named the meeting <strong>Meeting with Rohit Gadekar.</strong>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Video size={16} className="text-gray-500" />
                <span>Meeting started</span>
              </div>
            </div>
          </div>
        ) : (
          <ChatView messages={messages} />
        )}
      </div>
    </div>
  );
};
