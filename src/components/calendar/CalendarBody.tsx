interface CalendarBodyProps {
  view: 'Day' | 'Work Week' | 'Week';
  visibleDate: Date;
}

export const CalendarBody = ({ view, visibleDate }: CalendarBodyProps) => {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const weekdaysFull = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const getWeekDates = () => {
    const start = new Date(visibleDate);
    start.setDate(start.getDate() - start.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const getWorkWeekDates = () => {
    const start = new Date(visibleDate);
    start.setDate(start.getDate() - start.getDay() + 1);
    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const renderColumns = () => {
    if (view === 'Day') {
      return (
        <div className="flex flex-col w-full border-l border-gray-300">
          <div className="h-12 flex items-center justify-center font-medium border-b border-gray-300">
            {weekdaysFull[visibleDate.getDay()]} {visibleDate.toLocaleDateString()}
          </div>
          {hours.map((hr) => (
            <div key={hr} className="h-12 border-b border-gray-200 text-xs px-2 flex items-center">
              {hr}
            </div>
          ))}
        </div>
      );
    }

    const dates = view === 'Week' ? getWeekDates() : getWorkWeekDates();

    return (
      <div className="flex w-full">
        {dates.map((date) => (
          <div key={date.toDateString()} className="flex-1 border-l border-gray-300">
            <div className="h-12 flex items-center justify-center font-medium border-b border-gray-300">
              {weekdaysFull[date.getDay()]} {date.getDate()}
            </div>
            {hours.map((hr) => (
              <div key={hr} className="h-12 border-b border-gray-200 text-xs px-2"></div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="w-16 border-r border-gray-300">
        <div className="h-12"></div>
        {hours.map((hr) => (
          <div
            key={hr}
            className="h-12 border-b border-gray-200 text-xs px-1 flex items-start justify-center"
          >
            {hr}
          </div>
        ))}
      </div>

      <div className="flex-1">{renderColumns()}</div>
    </div>
  );
};
