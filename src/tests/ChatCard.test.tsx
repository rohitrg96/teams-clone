import { render, screen, fireEvent } from '@testing-library/react';
import { ChatCard } from '../components/chat/ChatCard';
import { vi } from 'vitest';

// Mock dropdownOptions inside ChatCard
vi.mock('../../const/chat', () => ({
  dropdownOptions: [{ label: 'Mock Option', icon: () => <span>MockIcon</span>, action: vi.fn() }],
}));

describe('ChatCard', () => {
  const onClickChatCard = vi.fn();

  const baseProps = {
    grpName: 'Dev Group',
    msg: 'Last message here',
    chatId: 123,
    onClickChatCard,
    image: '',
    dateTime: new Date(),
    isActive: false,
  };

  it('renders group name and message', () => {
    render(<ChatCard {...baseProps} />);
    expect(screen.getByTestId('chat-card-group')).toHaveTextContent('Dev Group');
    expect(screen.getByTestId('chat-card-msg')).toHaveTextContent('Last message here');
  });

  it('calls onClickChatCard when main chat area is clicked', () => {
    render(<ChatCard {...baseProps} />);
    fireEvent.click(screen.getByTestId('chat-card-click'));
    expect(onClickChatCard).toHaveBeenCalledWith(123); // Corrected value
  });

  it('shows dropdown on clicking more icon', () => {
    render(<ChatCard {...baseProps} />);
    const card = screen.getByTestId('chat-card');
    fireEvent.mouseEnter(card); // Simulate hover
    fireEvent.click(screen.getByTestId('chat-card-more'));
    expect(screen.getByTestId('chat-card-dropdown')).toBeInTheDocument();
  });
});
