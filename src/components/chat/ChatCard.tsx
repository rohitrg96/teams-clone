import type { ChatCardProps } from '../../types/chat.type';
import { CircularName } from './CircularName';

export const ChatCard = ({ grpName, msg, onClickChatCard, chatId }: ChatCardProps) => {
  return (
    <div
      className="border-gray-500 p-2 m-1 h-15 flex md:w-full md:text-sm hover:bg-white hover:shadow-xl cursor-pointer rounded-xl"
      onClick={() => onClickChatCard(chatId)}
    >
      <CircularName dimension={10} grpName={grpName} />
      <div className="px-2 flex flex-col justify-center overflow-hidden">
        <div className="font-medium text-sm truncate max-w-[150px] sm:max-w-[200px]">{grpName}</div>
        <div className="text-sm text-gray-500 truncate max-w-[150px] sm:max-w-[200px]">{msg}</div>
      </div>
    </div>
  );
};
