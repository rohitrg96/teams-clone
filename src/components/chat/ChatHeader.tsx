import { Video, Phone, Search, MoreHorizontal, UserRoundPlus } from 'lucide-react';
import { CircularName } from './CircularName';
import { useState } from 'react';

interface ChatHeaderProps {
  grpName: string;
  image?: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ChatHeader = ({ grpName, image, activeTab, setActiveTab }: ChatHeaderProps) => {
  const tabs = ['Chat', 'Files', 'Photos'];
  const [hoverTab, setHoverTab] = useState<string | null>(null);

  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2 px-2 sm:px-4 relative">
      <div className="flex items-center overflow-hidden relative space-x-4">
        <CircularName dimension={9} grpName={grpName} image={image} chatBox />

        <div className="flex items-center space-x-4 relative">
          <div className="text-base sm:text-lg font-semibold truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">
            {grpName}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab}
              className="text-sm text-gray-500 cursor-pointer relative pb-1"
              onMouseEnter={() => setHoverTab(tab)}
              onMouseLeave={() => setHoverTab(null)}
              onClick={() => setActiveTab(tab)}
            >
              {tab}

              {hoverTab === tab && (
                <div
                  className="absolute left-0 w-full h-2 bg-gray-400"
                  style={{ bottom: '-12px' }}
                ></div>
              )}

              {activeTab === tab && (
                <div
                  className="absolute left-0 w-full h-2  bg-purple-700"
                  style={{ bottom: '-12px' }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <button className="p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <Video className="text-purple-700" fill="purple" size={18} />
        </button>
        <button className="p-1 sm:p-2 rounded-2xl hover:bg-gray-200">
          <Phone className="text-purple-700" fill="purple" size={16} />
        </button>
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
