import { render, screen, fireEvent } from '@testing-library/react';
import SidebarItem from '../components/sideBar/SidebarItem';
import { Home } from 'lucide-react';

describe('SidebarItem', () => {
  it('renders label and icon correctly', () => {
    render(
      <SidebarItem
        icon={<Home data-testid="icon" />}
        label="Home"
        onClick={() => {}}
        isActive={false}
      />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies active class when isActive is true', () => {
    const { container } = render(
      <SidebarItem icon={<Home />} label="Dashboard" onClick={() => {}} isActive={true} />
    );
    expect(container.firstChild).toHaveClass('text-white');
  });

  it('applies inactive class when isActive is false', () => {
    const { container } = render(
      <SidebarItem icon={<Home />} label="Dashboard" onClick={() => {}} isActive={false} />
    );
    expect(container.firstChild).toHaveClass('text-black');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <SidebarItem icon={<Home />} label="ClickTest" onClick={handleClick} isActive={false} />
    );

    fireEvent.click(screen.getByText('ClickTest'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
