import { render, screen, fireEvent } from '@testing-library/react';
import { CallTopBar } from '../components/call/CallTopBar'; // adjust path
import { describe, it, expect, vi } from 'vitest';

describe('CallTopBar', () => {
  const setup = (propsOverride = {}) => {
    const props = {
      onToggleVideo: vi.fn(),
      onToggleMic: vi.fn(),
      videoEnabled: true,
      micEnabled: true,
      onSelectPage: vi.fn(),
      timer: '00:12',
      onToggleChat: vi.fn(),
      onToggleParticipants: vi.fn(),
      setIsMeet: vi.fn(),
      ...propsOverride,
    };

    render(<CallTopBar {...props} />);
    return props;
  };

  it('renders timer and essential icons', () => {
    setup();

    expect(screen.getByText('00:12')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /leave/i })).toBeInTheDocument();
  });

  it('calls onToggleChat when chat icon is clicked', () => {
    const { onToggleChat } = setup();
    const chatIcon = screen.getByTestId('chat-icon');
    fireEvent.click(chatIcon);
    expect(onToggleChat).toHaveBeenCalled();
  });

  it('calls onToggleParticipants when participants icon is clicked', () => {
    const { onToggleParticipants } = setup();
    const participantsIcon = screen.getByTestId('participants-icon');
    fireEvent.click(participantsIcon);
    expect(onToggleParticipants).toHaveBeenCalled();
  });

  it('calls onSelectPage and setIsMeet when Leave button is clicked', () => {
    const { onSelectPage, setIsMeet } = setup();
    const leaveBtn = screen.getByRole('button', { name: /leave/i });

    fireEvent.click(leaveBtn);
    expect(onSelectPage).toHaveBeenCalledWith('Chat');
    expect(setIsMeet).toHaveBeenCalledWith(false);
  });
});
