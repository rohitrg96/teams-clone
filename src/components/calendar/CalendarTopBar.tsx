import { CalendarDays, Hash, Video, Plus } from 'lucide-react';

export const CalendarTopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md border-b border-gray-300">
      {/* Left: Calendar Icon & Label */}
      <div className="flex items-center space-x-3">
        <div className="bg-purple-700 p-2 rounded-lg">
          <CalendarDays className="text-white" size={20} />
        </div>
        <h2 className="text-xl font-semibold">Calendar</h2>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-4">
        {/* Join with ID Button */}
        <button className="flex items-center space-x-1 bg-white hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer border border-gray-300">
          <Hash size={16} />
          <span>Join with ID</span>
        </button>

        {/* Meet Now Button */}
        <button className="flex items-center space-x-1 bg-white hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer border border-gray-300">
          <Video size={16} />
          <span>Meet Now</span>
        </button>

        {/* New Meeting Button */}
        <button className="flex items-center space-x-1 bg-purple-700 cursor-pointer text-white px-3 py-2 rounded-lg text-sm font-medium hover:shadow-xl border border-gray-300">
          <Plus size={16} />
          <span>New Meeting</span>
        </button>
      </div>
    </div>
  );
};
