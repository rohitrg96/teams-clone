import { Link2, CalendarDays, Hash, Link } from 'lucide-react';
import MeetCard from '../components/meet/MeetCard';

export const Meet = () => {
  return (
    <div className="items-center h-screen overflow-y-auto">
      <div className=" w-3/4 md:w-full md:m-5 lg:w-3/4 m-auto lg:m-auto ">
        <div className="flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-4 ">
          {/* Meet Label */}
          <h1 className="text-2xl font-bold mb-5">Meet</h1>

          {/* Action Cards - Consistent Grid */}
          <div className="flex justify-between gap-2 mb-8 w-full">
            <MeetCard
              label="Create a Meeting Link"
              icon={<Link2 size={24} />}
              bgColor="bg-purple-700"
              textColor="text-white"
              hoverEffect="hover:shadow-xl"
            />

            <MeetCard
              label="Schedule a Meeting"
              icon={<CalendarDays size={24} className="text-pink-500" />}
              bgColor="bg-white"
              textColor="text-black"
              hoverEffect="hover:shadow-xl"
            />

            <MeetCard
              label="Join with Meeting ID"
              icon={<Hash size={24} className="text-blue-500" />}
              bgColor="bg-white"
              textColor="text-black"
              hoverEffect="hover:shadow-xl"
            />
          </div>

          {/* Meeting Links Section */}
          <div className="w-full mb-6">
            <h2 className="text-lg font-semibold mb-3">Meeting links</h2>
            <div className="bg-white  rounded-xl shadow-md px-5 py-10  transition-all hover:shadow-xl">
              <div className=" items-center mb-3">
                <Link size={32} className="text-purple-700 mr-2 mb-5" />
                <p className="text-gray-600 font-bold">
                  Quickly create, save, and share links with anyone.
                </p>
              </div>
              <button className="text-purple-500 cursor-pointer text-sm mt-2 font-bold">
                Learn more about meeting links
              </button>
            </div>
          </div>

          {/* Scheduled Meetings Section */}
          <div className="w-full mb-20">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-3">Scheduled meetings</h2>
              <div className="flex items-center mt-3 sm:mt-0">
                <CalendarDays size={20} className=" mr-2" />
                <button className=" cursor-pointer text-sm">View in calendar</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row rounded-xl shadow-md transition-all hover:shadow-xl">
              {/* Centered Text Section */}
              <div className="w-full sm:w-1/2 flex justify-center items-center min-h-36">
                <p className="text-gray-700 text-center">You don't have anything scheduled.</p>
              </div>

              {/* Image Hidden on Small Screens */}
              <div className="hidden sm:flex w-full sm:w-1/2 justify-center items-center">
                <img
                  src="/src/assets/schmeet.webp"
                  alt="No Meetings"
                  className="h-full w-full  max-h-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
