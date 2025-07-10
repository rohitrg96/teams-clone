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
} from 'lucide-react';

interface CallTopBarProps {
  onToggleVideo: () => void;
  onToggleMic: () => void;
  videoEnabled: boolean;
  micEnabled: boolean;
  onSelectPage: (page: string) => void;
  timer: string;
  onToggleChat: () => void;
  onToggleParticipants: () => void;
  setIsMeet: (isMeet: boolean) => void;
}

export const CallTopBar = ({
  onToggleVideo,
  onToggleMic,
  videoEnabled,
  micEnabled,
  onSelectPage,
  timer,
  onToggleChat,
  onToggleParticipants,
  setIsMeet,
}: CallTopBarProps) => {
  return (
    <div className="h-12 flex items-center justify-between bg-white text-black px-3 shadow-md w-full relative overflow-hidden">
      {/* Left Side */}
      <div className="flex items-center space-x-2">
        <ShieldCheck size={22} className="text-black" />
        <span className="text-sm">{timer}</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-6 relative overflow-x-hidden">
        <div className="hidden sm:flex items-center space-x-6">
          <MessageSquareMore
            data-testid="chat-icon"
            size={22}
            className="cursor-pointer hover:text-purple-500"
            onClick={onToggleChat}
          />
          <UserPlus
            data-testid="participants-icon"
            size={22}
            className="cursor-pointer hover:text-purple-700"
            onClick={onToggleParticipants}
          />
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
                data-testid="video-icon"
                size={22}
                className="cursor-pointer hover:text-gray-700 w-full h-full"
                onClick={onToggleVideo}
              />
            ) : (
              <VideoOff
                data-testid="videoff-icon"
                size={22}
                className="cursor-pointer hover:text-gray-700 w-full h-full"
                onClick={onToggleVideo}
              />
            )}
          </div>

          <div className="h-6 w-6 flex items-center justify-center">
            {micEnabled ? (
              <Mic
                data-testid="mic-icon"
                size={22}
                className="cursor-pointer hover:text-gray-700 w-full h-full"
                onClick={onToggleMic}
              />
            ) : (
              <MicOff
                size={22}
                className="cursor-pointer hover:text-gray-700 w-full h-full"
                onClick={onToggleMic}
              />
            )}
          </div>

          <SquareArrowUp size={22} className="cursor-pointer hover:text-gray-700" />

          <div className="relative">
            <button
              onClick={() => {
                onSelectPage('Chat');
                setIsMeet(false);
              }}
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
