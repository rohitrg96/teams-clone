interface CalendarBodyProps {
  view: 'Day' | 'Work Week' | 'Week';
}

export const CalendarBody = ({ view }: CalendarBodyProps) => {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const today = new Date();
  const weekdaysFull = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Week View
  const getWeekDates = () => {
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  // Work Week View
  const getWorkWeekDates = () => {
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay() + 1); // Monday start
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
            {weekdaysFull[today.getDay()]} {today.toLocaleDateString()}
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
      {/* Hour Labels */}
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

      {/* Calendar Columns */}
      <div className="flex-1">{renderColumns()}</div>
    </div>
  );
};
