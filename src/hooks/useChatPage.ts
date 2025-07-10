import { useEffect, useRef, useState } from 'react';

export const useChatPage = () => {
  const [chatListWidth, setChatListWidth] = useState(400);
  const [showChatBoxMobile, setShowChatBoxMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const MIN_WIDTH = 280;
  const MAX_WIDTH_FACTOR = 0.5;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const newWidth = e.clientX - containerRect.left;

    if (newWidth < MIN_WIDTH) {
      setChatListWidth(0);
    } else if (newWidth <= containerWidth * MAX_WIDTH_FACTOR) {
      setChatListWidth(newWidth);
    } else {
      setChatListWidth(containerWidth * MAX_WIDTH_FACTOR);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.body.style.cursor = 'default';
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return {
    chatListWidth,
    setChatListWidth,
    showChatBoxMobile,
    setShowChatBoxMobile,
    isDesktop,
    containerRef,
    handleMouseDown,
  };
};
