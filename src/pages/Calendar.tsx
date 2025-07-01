import { useState } from 'react';
import { CalendarTopBar } from '../components/calendar/CalendarTopBar';
import { CalendarHeaderBar } from '../components/calendar/CalendarHeaderBar';
import { CalendarBody } from '../components/calendar/CalendarBody';

export const CalendarPage = () => {
  const [view, setView] = useState<'Day' | 'Work Week' | 'Week'>('Week');
  const [visibleDate, setVisibleDate] = useState(new Date());

  return (
    <div className="h-screen flex flex-col">
      <CalendarTopBar />
      <CalendarHeaderBar
        currentView={view}
        setView={setView}
        visibleDate={visibleDate}
        setVisibleDate={setVisibleDate}
      />
      <div className="flex-1 bg-gray-50">
        <CalendarBody view={view} visibleDate={visibleDate} />
      </div>
    </div>
  );
};
