import { ChevronLeft, ChevronRight, ChevronDown, CalendarArrowUp } from 'lucide-react';
import { useState } from 'react';

interface CalendarHeaderBarProps {
  currentView: 'Day' | 'Work Week' | 'Week';
  setView: (view: 'Day' | 'Work Week' | 'Week') => void;
}

export const CalendarHeaderBar = ({ currentView, setView }: CalendarHeaderBarProps) => {
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  const [showViewDropdown, setShowViewDropdown] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(new Date());

  const today = new Date();

  const isToday = (date: Date) =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const changeVisibleMonth = (offset: number) => {
    const newDate = new Date(visibleMonth);
    newDate.setMonth(newDate.getMonth() + offset);
    setVisibleMonth(newDate);
  };

  const getCalendarGrid = () => {
    const grid = [];
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday = 0

    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();

    // Previous month's overflow
    for (let i = startDay - 1; i >= 0; i--) {
      grid.push({ date: new Date(year, month - 1, prevMonthDays - i), isCurrentMonth: false });
    }

    // Current month's days
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      grid.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }

    // Next month's overflow to complete 5 rows
    const totalCells = grid.length;
    const remainingCells = Math.ceil(totalCells / 7) * 7 - totalCells;

    for (let i = 1; i <= remainingCells; i++) {
      grid.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }

    return grid;
  };

  const calendarGrid = getCalendarGrid();

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white shadow-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className=" p-2 rounded-lg">
            <CalendarArrowUp className="text-gray-500" size={16} />
          </div>
          <span className=" text-gray-500 text-sm">Today</span>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-gray-100 rounded text-gray-600" onClick={() => 1}>
            <ChevronLeft size={25} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded text-gray-600" onClick={() => 1}>
            <ChevronRight size={25} />
          </button>
        </div>

        {/* Current Month Label with Calendar Dropdown */}
        <div className="flex items-center space-x-1 relative">
          <span
            className="font-medium cursor-pointer"
            onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
          >
            {visibleMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <ChevronDown
            size={18}
            className="cursor-pointer"
            onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
          />

          {showCalendarDropdown && (
            <div className="absolute top-9 left-0 bg-white rounded shadow-lg p-4 z-10 w-64">
              {/* Header with Month and Year */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-sm">
                  {visibleMonth.toLocaleString('default', { month: 'long' })}{' '}
                  {visibleMonth.getFullYear()}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => changeVisibleMonth(-1)}
                    className="hover:bg-gray-100 p-1 rounded cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => changeVisibleMonth(1)}
                    className="hover:bg-gray-100 p-1 rounded cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Weekday Labels */}
              <div className="grid grid-cols-7 text-center mb-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d) => (
                  <div key={d} className="text-sm font-medium text-gray-500">
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-rows-5 grid-cols-7 text-center  mb-10">
                {Array.from({ length: 5 }).map((_, rowIdx) => (
                  <div key={rowIdx} className="contents group">
                    {calendarGrid
                      .slice(rowIdx * 7, rowIdx * 7 + 7)
                      .map(({ date, isCurrentMonth }) => (
                        <div
                          key={date.toDateString()}
                          className={`relative w-8 h-8 flex items-center justify-center text-sm cursor-pointer
                            group-hover:bg-purple-100
                            ${isToday(date) ? 'bg-purple-700 text-white rounded-full' : ''}
                            ${!isCurrentMonth ? 'text-gray-400' : ''}
                          `}
                        >
                          {date.getDate()}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Section: View Dropdown */}
      <div className="flex items-center space-x-0 relative mr-4">
        <button
          className="px-3  bg-white rounded text-gray-500 hover:text-purple-500 cursor-pointer"
          onClick={() => setShowViewDropdown(!showViewDropdown)}
        >
          {currentView}
        </button>

        <ChevronDown
          size={18}
          className="cursor-pointer"
          onClick={() => setShowViewDropdown(!showViewDropdown)}
        />

        {showViewDropdown && (
          <div className="absolute right-0 mt-40 bg-white py-2 rounded shadow w-40 z-10">
            {['Day', 'Work week', 'Week'].map((option) => (
              <div
                key={option}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setView(option as 'Day' | 'Work Week' | 'Week');
                  setShowViewDropdown(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
