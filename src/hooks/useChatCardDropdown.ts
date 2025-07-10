import { useEffect, useRef, useState } from 'react';

export const useChatCard = (dateTime: string) => {
  const [hover, setHover] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getTimeOrDate = () => {
    const now = new Date();
    const msgDate = new Date(dateTime);
    const isToday = now.toDateString() === msgDate.toDateString();

    if (isToday) {
      const hours = msgDate.getHours() % 12 || 12;
      const minutes = msgDate.getMinutes().toString().padStart(2, '0');
      const ampm = msgDate.getHours() >= 12 ? 'PM' : 'AM';
      return `${hours}:${minutes} ${ampm}`;
    } else {
      const day = msgDate.getDate().toString().padStart(2, '0');
      const month = (msgDate.getMonth() + 1).toString().padStart(2, '0');
      return `${day}-${month}`;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  return {
    hover,
    setHover,
    showDropdown,
    setShowDropdown,
    dropdownRef,
    getTimeOrDate,
  };
};
