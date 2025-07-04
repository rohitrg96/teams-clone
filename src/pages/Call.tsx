import { useState, useRef, useEffect } from 'react';
import { CallTopBar } from '../components/call/CallTopBar';
import type { ChangePageProps } from '../types/chat.type';
import { MeetingChat } from '../components/chat/MeetingChat';
import { ParticipantsPanel } from '../components/chat/ParticipantsPanel';
import { groupData } from '../const/chat';

interface CallPageProps extends ChangePageProps {
  id?: number;
  isMeet: boolean;
  setIsMeet: (isMeet: boolean) => void;
}

export const CallPage = ({ onSelectPage, id, isMeet, setIsMeet }: CallPageProps) => {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);

  // Find user only if id is provided
  const user = groupData.find((group) => group.id === id);

  const userName = isMeet == true ? 'Invite people to join you' : user?.grpName;
  const userImage = isMeet == true ? '/images/RohitProfile.jpg' : user?.image;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleToggleVideo = async () => {
    if (!videoEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoStreamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        setVideoEnabled(true);
      } catch (err) {
        console.log('Camera permission denied', err);
      }
    } else {
      videoStreamRef.current?.getTracks().forEach((track) => track.stop());
      if (videoRef.current) videoRef.current.srcObject = null;
      setVideoEnabled(false);
    }
  };

  const handleToggleMic = async () => {
    if (!micEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioStreamRef.current = stream;
        setMicEnabled(true);
      } catch (err) {
        console.log('Microphone permission denied', err);
      }
    } else {
      audioStreamRef.current?.getTracks().forEach((track) => track.stop());
      setMicEnabled(false);
    }
  };

  return (
    <div className="flex flex-col h-[528px] rounded-2xl bg-gray-200 text-white shadow-2xl z-10 my-1">
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
              <img
                src={userImage}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white"
              />
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
