import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { CircularName } from './CircularName';
import type { ChatCardProps } from '../../types/chat.type';

export const ChatCard = ({
  grpName,
  msg,
  onClickChatCard,
  chatId,
  image,
  dateTime,
}: ChatCardProps) => {
  const [hover, setHover] = useState(false);

  const getTimeOrDate = () => {
    const now = new Date();
    const msgDate = new Date(dateTime);

    const isToday = now.toDateString() === msgDate.toDateString();

    if (isToday) {
      const hours = msgDate.getHours() % 12 || 12;
      const minutes = msgDate.getMinutes().toString().padStart(2, '0');
      const ampm = msgDate.getHours() >= 12 ? 'PM' : 'AM';
      return `${hours}:${minutes} ${ampm}`;
    } else {
      const day = msgDate.getDate().toString().padStart(2, '0');
      const month = (msgDate.getMonth() + 1).toString().padStart(2, '0');
      return `${day}-${month}`;
    }
  };

  return (
    <div
      className="border-gray-500 p-2 m-1 h-15 flex md:w-full md:text-sm hover:bg-white hover:shadow-xl cursor-pointer rounded-xl justify-between items-center"
      onClick={() => onClickChatCard(chatId)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center">
        <CircularName dimension={10} grpName={grpName} image={image} />
        <div className="px-2 flex flex-col justify-center overflow-y-auto">
          <div className="font-medium text-sm truncate max-w-[150px] sm:max-w-[200px]">
            {grpName}
          </div>
          <div className="text-sm text-gray-500 truncate max-w-[150px] sm:max-w-[200px]">{msg}</div>
        </div>
      </div>

      <div className="flex items-center ml-2 min-w-[70px] justify-end">
        {hover ? (
          <>
            <div title="More options" className="mx-1 hover:text-purple-600">
              <MoreHorizontal size={16} />
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-xs">{getTimeOrDate()}</div>
        )}
      </div>
    </div>
  );
};
