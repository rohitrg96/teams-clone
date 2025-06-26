import { Video, Phone, Search, MoreHorizontal, UserRoundPlus } from 'lucide-react';
import { CircularName } from './CircularName';

export const ChatHeader = ({ grpName }: { grpName: string }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-3 px-1">
      <div className="flex items-center">
        <CircularName dimension={9} grpName={grpName} chatBox={true} />
        <div className="text-lg font-semibold py-1">{grpName}</div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="p-1 rounded-2xl hover:bg-gray-200">
          <Video className=" m-1 text-purple-700" fill="purple-700" size={20} />
        </button>
        <button className="p-2 rounded-2xl hover:bg-gray-200">
          <Phone className="text-purple-700" fill="purple-700" size={16} />
        </button>
        <button className="p-2 rounded-2xl hover:bg-gray-200">
          <UserRoundPlus size={16} />
        </button>
        <button className="p-2 rounded-2xl hover:bg-gray-200">
          <Search size={16} />
        </button>
        <button className="p-2 rounded-2xl hover:bg-gray-200">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};
