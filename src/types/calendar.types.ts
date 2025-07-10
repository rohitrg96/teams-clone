export interface CalendarBodyProps {
  view: 'Day' | 'Work Week' | 'Week';
  visibleDate: Date;
  onSlotClick?: (date: Date, hour: number, isSecondHalf: boolean) => void;
}
