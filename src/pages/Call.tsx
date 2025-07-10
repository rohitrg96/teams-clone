import { CallTopBar } from '../components/call/CallTopBar';
import type { CallPageProps } from '../types/call.types';
import { MeetingChat } from '../components/chat/MeetingChat';
import { ParticipantsPanel } from '../components/chat/ParticipantsPanel';
import { useCallPage } from '../hooks/useCallPage';
import { CircularName } from '../components/chat/CircularName';

export const CallPage = ({ onSelectPage, id, isMeet, setIsMeet }: CallPageProps) => {
  const {
    videoEnabled,
    micEnabled,
    showChat,
    showParticipants,
    seconds,
    videoRef,
    user,
    userName,
    userImage,
    formatTime,
    setShowChat,
    setShowParticipants,
    handleToggleMic,
    handleToggleVideo,
  } = useCallPage(id, isMeet);

  return (
    <div className="flex flex-col h-full rounded-2xl bg-gray-200 text-white shadow-2xl z-10 my-1">
      <CallTopBar
        setIsMeet={setIsMeet}
        onToggleVideo={handleToggleVideo}
        onSelectPage={onSelectPage}
        onToggleMic={handleToggleMic}
        videoEnabled={videoEnabled}
        micEnabled={micEnabled}
        timer={formatTime(seconds)}
        onToggleChat={() => setShowChat((prev) => !prev)}
        onToggleParticipants={() => setShowParticipants((prev) => !prev)}
      />

      <div className="flex flex-1 h-full w-full">
        {/* Main Video/Profile Area */}
        <div className={`h-full ${showChat ? 'w-9/12' : 'w-full'} transition-all duration-300`}>
          {videoEnabled ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            />
          ) : (
            <div className="flex flex-col h-full items-center justify-center">
              <CircularName dimension={12} grpName={userName} image={userImage} />
              <p className="text-black text-xl font-bold">{userName}</p>
            </div>
          )}
        </div>

        {/* Chat Panel */}
        {showChat && user && (
          <MeetingChat
            messages={user.messages}
            onClose={() => setShowChat(false)}
            isMeet={isMeet}
          />
        )}

        {/* Participants Panel */}
        {showParticipants && (
          <ParticipantsPanel micEnabled={micEnabled} onClose={() => setShowParticipants(false)} />
        )}
      </div>
    </div>
  );
};
