import { useEffect, useRef, useState } from 'react';
import { groupData } from '../const/chat';

export const useCallPage = (id: number | undefined, isMeet: boolean) => {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);

  const user = groupData.find((group) => group.id === id);
  const userName = isMeet ? 'Invite people to join you' : (user?.grpName ?? '');
  const userImage = isMeet ? '/images/RohitProfile.jpg' : user?.image;

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

  return {
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
  };
};
