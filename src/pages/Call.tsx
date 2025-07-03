import { useState, useRef } from 'react';
import { CallTopBar } from '../components/call/CallTopBar';

export const CallPage = () => {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);

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
      if (videoStreamRef.current) {
        videoStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
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
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      setMicEnabled(false);
    }
  };

  return (
    <div className="flex flex-col h-[528px] rounded-2xl bg-gray-200 text-white shadow-2xl z-10 my-1">
      <CallTopBar
        onToggleVideo={handleToggleVideo}
        onToggleMic={handleToggleMic}
        videoEnabled={videoEnabled}
        micEnabled={micEnabled}
      />

      <div className="flex-1 flex items-center justify-center relative">
        {videoEnabled ? (
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/RohitProfile.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white"
            />
            <p className="text-black text-xl font-bold">Invite people to join you</p>
          </div>
        )}
      </div>
    </div>
  );
};
