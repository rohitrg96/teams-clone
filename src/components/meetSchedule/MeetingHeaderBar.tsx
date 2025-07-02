import { Calendar } from 'lucide-react';

interface MeetingHeaderBarProps {
  onSave: () => void;
  onClose: () => void;
}

export const MeetingHeaderBar = ({ onSave, onClose }: MeetingHeaderBarProps) => {
  return (
    <div className="flex items-center justify-between border-b border-purple-300 px-4 py-3 bg-white shadow-sm">
      {/* Left: Icon and Labels */}
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-purple-700 rounded-md text-white">
          <Calendar size={20} />
        </div>
        <div>
          <span className="font-semibold text-lg">New Meeting</span>
          <span className="text-sm border-b-2 ml-5 border-purple-700 w-fit">Details</span>
        </div>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center space-x-3">
        <button
          className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 text-sm"
          onClick={onSave}
        >
          Save
        </button>
        <button
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
