import { ChevronDown, PanelRightClose, PanelRightOpen } from 'lucide-react';
import { useState } from 'react';

export const MeetingOptionsSidebar = () => {
  const [bypassOption, setBypassOption] = useState('');
  const [presentOption, setPresentOption] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const bypassOptions = ['People who were invited', 'Everyone', 'Only me'];
  const presentOptions = ['Everyone', 'Only me'];

  const [showBypass, setShowBypass] = useState(false);
  const [showPresent, setShowPresent] = useState(false);

  if (!isOpen) {
    return (
      <div className="flex justify-end px-2 md:px-6">
        <button onClick={() => setIsOpen(true)} className="p-2">
          <PanelRightOpen size={24} className="text-gray-600" />
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-end px-2 md:px-6">
        <button onClick={() => setIsOpen(false)} className="p-2 rounded-md">
          <PanelRightClose size={24} className="text-gray-600" />
        </button>
      </div>

      <div className="space-y-6 p-2 md:p-4 border-gray-200 rounded-lg mx-2 md:mx-6">
        {/* Who can bypass the lobby */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Who can bypass the lobby?
          </label>
          <div
            className="relative border border-gray-300 rounded-lg cursor-pointer"
            onClick={() => setShowBypass(!showBypass)}
          >
            <div className="flex justify-between items-center px-2 py-2">
              <span className={`text-sm ${bypassOption ? 'text-black' : 'text-gray-500'}`}>
                {bypassOption || 'People who were invited'}
              </span>
              <ChevronDown size={16} className="text-gray-600" />
            </div>

            {showBypass && (
              <div className="absolute left-0 right-0 border border-gray-300 bg-white rounded-lg mt-1 z-10">
                {bypassOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setBypassOption(opt);
                      setShowBypass(false);
                    }}
                    className="px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    style={{ color: opt === bypassOption ? '#000' : '#6B7280' }}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Who can present */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">Who can present?</label>
          <div
            className="relative border border-gray-300 rounded-lg cursor-pointer"
            onClick={() => setShowPresent(!showPresent)}
          >
            <div className="flex justify-between items-center px-2 py-2">
              <span className={`text-sm ${presentOption ? 'text-black' : 'text-gray-500'}`}>
                {presentOption || 'Everyone'}
              </span>
              <ChevronDown size={16} className="text-gray-600" />
            </div>

            {showPresent && (
              <div className="absolute left-0 right-0 border border-gray-300 bg-white rounded-lg mt-1 z-10">
                {presentOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setPresentOption(opt);
                      setShowPresent(false);
                    }}
                    className="px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    style={{ color: opt === presentOption ? '#000' : '#6B7280' }}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
