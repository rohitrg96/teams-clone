import {
  ShieldCheck,
  MessageSquareMore,
  UserPlus,
  Hand,
  Smile,
  Grid2x2,
  Ellipsis,
  Video,
  VideoOff,
  Mic,
  MicOff,
  SquareArrowUp,
  PhoneOff,
  Share2,
} from 'lucide-react';
import { useState } from 'react';

interface CallTopBarProps {
  onToggleVideo: () => void;
  onToggleMic: () => void;
}

interface CallTopBarProps {
  onToggleVideo: () => void;
  onToggleMic: () => void;
  videoEnabled: boolean;
  micEnabled: boolean;
}

export const CallTopBar = ({
  onToggleVideo,
  onToggleMic,
  videoEnabled,
  micEnabled,
}: CallTopBarProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="h-15 flex items-center justify-between bg-white text-black px-3 py-4 shadow-md w-full relative overflow-hidden">
      {/* Left Side */}
      <div className="flex items-center space-x-2">
        <ShieldCheck size={22} className="text-black" />
        <span className="text-sm">00:15</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-6 relative overflow-x-hidden">
        <div className="hidden sm:flex items-center space-x-6">
          <MessageSquareMore size={22} className="cursor-pointer hover:text-gray-700" />
          <UserPlus size={22} className="cursor-pointer hover:text-gray-700" />
          <Hand size={22} className="cursor-pointer hover:text-gray-700" />
          <Smile size={22} className="cursor-pointer hover:text-gray-700" />
          <Grid2x2 size={22} className="cursor-pointer hover:text-gray-700" />
          <Ellipsis size={22} className="cursor-pointer hover:text-gray-700" />
        </div>

        <div className="h-6 w-px bg-gray-400 hidden sm:block"></div>

        {/* Essential Icons */}
        <div className="flex items-center space-x-4">
          <div className="h-6 w-6 flex items-center justify-center">
            {videoEnabled ? (
              <Video
                size={22}
                className="cursor-pointer hover:text-gray-700"
                onClick={onToggleVideo}
              />
            ) : (
              <VideoOff
                size={22}
                className="cursor-pointer hover:text-gray-700"
                onClick={onToggleVideo}
              />
            )}
          </div>

          <div className="h-6 w-6 flex items-center justify-center">
            {micEnabled ? (
              <Mic size={22} className="cursor-pointer hover:text-gray-700" onClick={onToggleMic} />
            ) : (
              <MicOff
                size={22}
                className="cursor-pointer hover:text-gray-700"
                onClick={onToggleMic}
              />
            )}
          </div>

          <SquareArrowUp size={22} className="cursor-pointer hover:text-gray-700" />
          <Share2 size={22} className="cursor-pointer hover:text-gray-700" />

          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="flex items-center space-x-1 bg-red-600 text-white px-6 py-2 rounded-md text-sm hover:bg-red-700 cursor-pointer"
            >
              <PhoneOff size={16} />
              <span className="hidden sm:flex">Leave</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
