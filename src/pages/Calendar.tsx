import { useState } from 'react';
import { CalendarTopBar } from '../components/calendar/CalendarTopBar';
import { CalendarHeaderBar } from '../components/calendar/CalendarHeaderBar';
import { CalendarBody } from '../components/calendar/CalendarBody';
import { MeetingSchedulePage } from './MeetingSchdule';

export const CalendarPage = () => {
  const [view, setView] = useState<'Day' | 'Work Week' | 'Week'>('Week');
  const [visibleDate, setVisibleDate] = useState(new Date());
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSlotClick = (date: Date, hour: number, isSecondHalf: boolean) => {
    const formattedDate = date.toISOString().split('T')[0]; // yyyy-mm-dd
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

  return (
    <div className="h-screen flex flex-col">
      {showMeetingForm ? (
        <MeetingSchedulePage
          prefillDate={selectedDate}
          prefillStartTime={startTime}
          prefillEndTime={endTime}
          setShowMeetingForm={setShowMeetingForm}
        />
      ) : (
        <>
          <CalendarTopBar />
          <CalendarHeaderBar
            currentView={view}
            setView={setView}
            visibleDate={visibleDate}
            setVisibleDate={setVisibleDate}
          />
          <div className="flex-1 bg-gray-50">
            <CalendarBody view={view} visibleDate={visibleDate} onSlotClick={handleSlotClick} />
          </div>
        </>
      )}
    </div>
  );
};
