import { ChevronDown, Mic, MicOff, X } from 'lucide-react';

interface ParticipantsPanelProps {
  micEnabled: boolean;
  onClose: () => void;
}

export const ParticipantsPanel = ({ micEnabled, onClose }: ParticipantsPanelProps) => {
  return (
    <div className="h-full w-4/12 bg-white text-black flex flex-col border-l border-gray-300">
      {/* Top Bar */}
      <div className="px-4 py-3 border-b border-gray-300 font-bold text-lg flex justify-between items-center">
        <div>Participants</div>
        <button onClick={onClose} className="hover:text-red-500">
          <X size={20} />
        </button>
      </div>

      {/* Body */}
      <div className="px-4 py-3 space-y-4">
        {/* In This Meeting Header */}
        <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
          <ChevronDown size={16} />
          <span>In this meeting (1)</span>
        </div>

        {/* Participant Card */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/images/RohitProfile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border"
            />
            <div>
              <div className="font-medium">Rohit Gadekar</div>
              <div className="text-xs text-gray-500">Organiser</div>
            </div>
          </div>

          {/* Mic Icon Syncs with Top Bar */}
          <div className="text-gray-700">
            {micEnabled ? <Mic size={18} /> : <MicOff size={18} />}
          </div>
        </div>
      </div>
    </div>
  );
};
