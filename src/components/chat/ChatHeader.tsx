import { Video, Phone, Search, MoreHorizontal, UserRoundPlus } from 'lucide-react';
import { CircularName } from './CircularName';

export const ChatHeader = ({ grpName }: { grpName: string }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2 px-2 sm:px-4">
      {/* Left Side */}
      <div className="flex items-center overflow-hidden">
        <CircularName dimension={9} grpName={grpName} chatBox={true} />

        <div className="text-base sm:text-lg font-semibold py-1 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">
          {grpName}
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button className="p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <Video className="text-purple-700" fill="purple" size={18} />
        </button>

        <button className="p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <Phone className="text-purple-700" fill="purple" size={16} />
        </button>

        {/* Hide this button on very small screens */}
        <button className="hidden sm:block p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <UserRoundPlus size={16} />
        </button>

        <button className="p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <Search size={16} />
        </button>

        <button className="p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};
