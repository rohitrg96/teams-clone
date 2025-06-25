import type { ChatCardProps } from '../../types/chat.type';
import { getInitials } from '../../utils/helperfunction';
export const ChartCard = ({ grpName, msg }: ChatCardProps) => {
  // Extract first letters

  return (
    <div className=" border-gray-500 p-2 m-1 h-15 bg-gray-100 flex hover:bg-white hover:shadow-xl rounded-xl">
      <div className="w-10 h-10 border rounded-full bg-red-100 text-center flex items-center justify-center font-bold">
        {getInitials(grpName)}
      </div>

      <div className="px-2 flex flex-col justify-center overflow-hidden">
        <div className="font-medium truncate max-w-[200px]">{grpName}</div>
        <div className="text-sm text-gray-500 truncate max-w-[200px]">{msg}</div>
      </div>
    </div>
  );
};
