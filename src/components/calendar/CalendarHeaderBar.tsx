import { ChevronLeft, ChevronRight, ChevronDown, CalendarArrowUp } from 'lucide-react';
import { useState } from 'react';

interface CalendarHeaderBarProps {
  currentView: 'Day' | 'Work Week' | 'Week';
  setView: (view: 'Day' | 'Work Week' | 'Week') => void;
  visibleDate: Date;
  setVisibleDate: (date: Date) => void;
}

export const CalendarHeaderBar = ({
  currentView,
  setView,
  visibleDate,
  setVisibleDate,
}: CalendarHeaderBarProps) => {
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  const [showViewDropdown, setShowViewDropdown] = useState(false);

  const changeVisibleDate = (offset: number) => {
    const newDate = new Date(visibleDate);

    if (currentView === 'Day') {
      newDate.setDate(newDate.getDate() + offset);
    } else if (currentView === 'Work Week' || currentView === 'Week') {
      newDate.setDate(newDate.getDate() + offset * 7);
    } else {
      newDate.setMonth(newDate.getMonth() + offset);
    }

    setVisibleDate(newDate);
  };

  const getDateLabel = () => {
    if (currentView === 'Day') {
      return visibleDate.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      });
    }

    if (currentView === 'Work Week' || currentView === 'Week') {
      const start = new Date(visibleDate);
      start.setDate(start.getDate() - start.getDay() + 1);
      const end = new Date(start);
      end.setDate(start.getDate() + (currentView === 'Week' ? 6 : 4));

      const startLabel = `${start.toLocaleString('default', { month: 'long' })} ${start.getFullYear()}`;
      const endLabel = `${end.toLocaleString('default', { month: 'long' })} ${end.getFullYear()}`;

      return startLabel === endLabel ? startLabel : `${startLabel} - ${endLabel}`;
    }

    return visibleDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg">
            <CalendarArrowUp className="text-gray-500" size={16} />
          </div>
          <span className="text-gray-500 text-sm">Today</span>
        </div>

        <div className="flex items-center space-x-1">
          <button
            className="p-1 hover:bg-gray-100 rounded text-gray-600"
            onClick={() => changeVisibleDate(-1)}
          >
            <ChevronLeft size={25} />
          </button>
          <button
            className="p-1 hover:bg-gray-100 rounded text-gray-600"
            onClick={() => changeVisibleDate(1)}
          >
            <ChevronRight size={25} />
          </button>
        </div>

        <div className="flex items-center space-x-1 relative">
          <span
            className="font-medium cursor-pointer"
            onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
          >
            {getDateLabel()}
          </span>
          <ChevronDown
            size={18}
            className="cursor-pointer"
            onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-0 relative mr-4">
        <button
          className="px-3 bg-white rounded text-gray-500 hover:text-purple-500 cursor-pointer"
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
            {['Day', 'Work Week', 'Week'].map((option) => (
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
