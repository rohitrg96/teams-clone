import { render, screen, fireEvent } from '@testing-library/react';
import { CalendarBody } from '../components/calendar/CalendarBody';
import { describe, it, expect, vi } from 'vitest';

const visibleDate = new Date('2025-07-10T00:00:00');

describe('CalendarBody', () => {
  it('renders correctly in Day view', () => {
    render(<CalendarBody view="Day" visibleDate={visibleDate} />);

    // Use getAllByText to avoid ambiguity
    const dateLabels = screen.getAllByText('10');
    expect(dateLabels.length).toBeGreaterThan(0);

    // Ensure "Thursday" is visible
    expect(screen.getByText('Thursday')).toBeInTheDocument();

    // Ensure 48 slot buttons (24 × 2 halves)
    const slotButtons = screen.getAllByRole('button');
    expect(slotButtons.length).toBe(48);
  });

  it('calls onSlotClick when a time slot is clicked', () => {
    const onSlotClick = vi.fn();
    render(<CalendarBody view="Day" visibleDate={visibleDate} onSlotClick={onSlotClick} />);

    const firstSlot = screen.getByLabelText('Hour 0 First Half');
    fireEvent.click(firstSlot);

    expect(onSlotClick).toHaveBeenCalledTimes(1);
    expect(onSlotClick).toHaveBeenCalledWith(expect.any(Date), 0, false);
  });
});
