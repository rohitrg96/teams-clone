import { MoreHorizontal } from 'lucide-react';
import { CircularName } from './CircularName';
import type { ChatCardProps } from '../../types/chat.type';
import { dropdownOptions } from '../../const/chat';
import { useChatCard } from '../../hooks/useChatCardDropdown';

export const ChatCard = ({
  grpName,
  msg,
  onClickChatCard,
  chatId,
  image,
  dateTime,
  isActive,
}: ChatCardProps) => {
  const { hover, setHover, showDropdown, setShowDropdown, dropdownRef, getTimeOrDate } =
    useChatCard(dateTime);

  return (
    <div
      className={`p-2 m-1 h-15 flex md:w-full md:text-sm hover:bg-white hover:shadow-xl cursor-pointer rounded-xl justify-between items-center relative ${
        isActive ? 'shadow-lg bg-white' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-testid="chat-card"
    >
      <div
        className="flex items-center"
        onClick={() => onClickChatCard(chatId)}
        data-testid="chat-card-click"
      >
        <CircularName dimension={10} grpName={grpName} image={image} />
        <div className="px-2 flex flex-col justify-center overflow-y-auto">
          <div
            className="font-medium text-sm truncate max-w-[150px] sm:max-w-[200px]"
            data-testid="chat-card-group"
          >
            {grpName}
          </div>
          <div
            className="text-sm text-gray-500 truncate max-w-[150px] sm:max-w-[200px]"
            data-testid="chat-card-msg"
          >
            {msg}
          </div>
        </div>
      </div>

      <div className="flex items-center ml-2 min-w-[70px] justify-end relative" ref={dropdownRef}>
        {hover ? (
          <div
            title="More options"
            className="mx-1 hover:text-purple-600"
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown((prev) => !prev);
            }}
            data-testid="chat-card-more"
          >
            <MoreHorizontal size={16} />
          </div>
        ) : (
          <div className="text-gray-500 text-xs" data-testid="chat-card-time">
            {getTimeOrDate()}
          </div>
        )}

        {showDropdown && (
          <div
            className="absolute top-6 right-0 bg-white shadow-lg z-50 w-45 p-2"
            data-testid="chat-card-dropdown"
          >
            {dropdownOptions.map((option, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 hover:border-2 hover:border-black hover:text-purple-700 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                  option.action();
                }}
              >
                <option.icon size={16} />
                <span className="text-sm">{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
