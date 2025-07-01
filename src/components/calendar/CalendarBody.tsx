interface CalendarBodyProps {
  view: 'Day' | 'Work Week' | 'Week';
  visibleDate: Date;
}

export const CalendarBody = ({ view, visibleDate }: CalendarBodyProps) => {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}`);

  const weekdaysFull = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const getWeekDates = () => {
    const start = new Date(visibleDate);
    const day = start.getDay();
    const offset = day === 0 ? -6 : 1 - day; // Shift to Monday
    start.setDate(start.getDate() + offset);

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const getWorkWeekDates = () => {
    const start = new Date(visibleDate);
    const day = start.getDay();
    const offset = day === 0 ? -6 : 1 - day;
    start.setDate(start.getDate() + offset);

    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const renderColumns = () => {
    const formattedDate = (date: Date) => date.getDate().toString().padStart(2, '0'); // Converts to 2-digit format

    if (view === 'Day') {
      return (
        <div className="flex flex-col w-full border-l border-gray-300  justify-between">
          <div className="h-12 flex flex-col items-start justify-center  py-8 px-2 border-b border-gray-300">
            <span
              className={`text-2xl font-semibold ${isToday(visibleDate) ? 'text-purple-700' : ''}`}
            >
              {formattedDate(visibleDate)}
            </span>
            <span className={`text-sm ${isToday(visibleDate) ? 'text-purple-700' : ''}`}>
              {weekdaysFull[(visibleDate.getDay() + 6) % 7]}
            </span>
          </div>

          {hours.map((hr) => (
            <div key={hr} className="h-24 relative border-b border-gray-200 text-xs ">
              <div className="absolute left-0 right-0 top-1/2 border-t border-dotted border-gray-300"></div>
            </div>
          ))}
        </div>
      );
    }

    const dates = view === 'Week' ? getWeekDates() : getWorkWeekDates();

    return (
      <div className="flex w-full">
        {dates.map((date) => (
          <div key={date.toDateString()} className="flex-1 border-l   border-gray-300">
            <div className="h-12 flex flex-col items-start justify-center px-2 py-8  border-b border-gray-300">
              <span className={`text-2xl font-semibold ${isToday(date) ? 'text-purple-700' : ''}`}>
                {formattedDate(date)}
              </span>
              <span className={`text-sm ${isToday(date) ? 'text-purple-700' : ''}`}>
                {weekdaysFull[(date.getDay() + 6) % 7]}
              </span>
            </div>

            {hours.map((hr) => (
              <div key={hr} className="h-24 relative border-b border-gray-200 text-xs px-2">
                <div className="absolute left-0 right-0 top-1/2 border-t border-dotted border-gray-300"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-y-auto ">
      <div className="flex h-[400px]">
        {/* Time Column */}
        <div className="w-16 border-r border-gray-300">
          <div className="h-12"></div>
          {hours.map((hr) => (
            <div
              key={hr}
              className="h-24 relative  border-gray-200 text-xs p-1 flex items-start justify-center"
            >
              {hr}
            </div>
          ))}
        </div>

        <div className="flex-1">{renderColumns()}</div>
      </div>
    </div>
  );
};
