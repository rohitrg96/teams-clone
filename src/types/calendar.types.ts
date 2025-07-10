export interface CalendarBodyProps {
  view: 'Day' | 'Work Week' | 'Week';
  visibleDate: Date;
  onSlotClick?: (date: Date, hour: number, isSecondHalf: boolean) => void;
}

export interface CalendarHeaderBarProps {
  currentView: 'Day' | 'Work Week' | 'Week';
  setView: (view: 'Day' | 'Work Week' | 'Week') => void;
  visibleDate: Date;
  setVisibleDate: (date: Date) => void;
}
