import { useState } from 'react';

type CalendarView = 'Day' | 'Work Week' | 'Week';

export const useCalendarPage = () => {
  const [view, setView] = useState<CalendarView>('Week');
  const [visibleDate, setVisibleDate] = useState(new Date());
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSlotClick = (date: Date, hour: number, isSecondHalf: boolean) => {
    const formattedDate = date.toISOString().split('T')[0];
    const startHr = String(hour).padStart(2, '0');
    const startMin = isSecondHalf ? '30' : '00';

    const end = new Date(date);
    end.setHours(hour);
    end.setMinutes(isSecondHalf ? 30 : 0);
    end.setMinutes(end.getMinutes() + 30);

    const endHr = String(end.getHours()).padStart(2, '0');
    const endMin = String(end.getMinutes()).padStart(2, '0');

    setSelectedDate(formattedDate);
    setStartTime(`${startHr}:${startMin}`);
    setEndTime(`${endHr}:${endMin}`);
    setShowMeetingForm(true);
  };

  return {
    view,
    setView,
    visibleDate,
    setVisibleDate,
    showMeetingForm,
    setShowMeetingForm,
    selectedDate,
    startTime,
    endTime,
    handleSlotClick,
  };
};
