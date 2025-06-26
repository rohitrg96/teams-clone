import { Video, Calendar, Hash } from 'lucide-react';
import MeetCard from '../components/meet/MeetCard';

export const Meet = () => {
  return (
    <div className=" items-center h-screen">
      <div className="w-3/4 m-auto ">
        <h1 className="text-2xl font-bold mb-5">Meet</h1>
        <div className="flex flex-col ">
          <div className="flex flex-wrap gap-4 ">
            <MeetCard
              label="Create a Meeting Link"
              icon={<Video size={24} />}
              bgColor="bg-purple-700"
              textColor="text-white"
              hoverEffect={false}
            />

            <MeetCard
              label="Schedule a Meeting"
              icon={<Calendar size={24} className="text-pink-500" />}
              bgColor="bg-white"
              textColor="text-black"
              hoverEffect="hover:bg-pink-100"
            />

            <MeetCard
              label="Join with Meeting ID"
              icon={<Hash size={24} className="text-blue-500" />}
              bgColor="bg-white"
              textColor="text-black"
              hoverEffect="hover:bg-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
