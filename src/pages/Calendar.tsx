import { CalendarTopBar } from '../components/calendar/CalendarTopBar';
import { CalendarHeaderBar } from '../components/calendar/CalendarHeaderBar';
import { CalendarBody } from '../components/calendar/CalendarBody';
import { MeetingSchedulePage } from './MeetingSchdule';
import { useCalendarPage } from '../hooks/useCalendarPage';

export const CalendarPage = () => {
  const {
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
  } = useCalendarPage();

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
