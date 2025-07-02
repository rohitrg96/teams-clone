import { useState } from 'react';
import { Link2, CalendarDays, Hash, Link, X, Info } from 'lucide-react';
import MeetCard from '../components/meet/MeetCard';

export const Meet = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [showJoinCard, setShowJoinCard] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState('Meeting with Rohit');
  const [meetingId, setMeetingId] = useState('');
  const [passcode, setPasscode] = useState('');

  return (
    <div className="items-center h-screen overflow-y-auto">
      <div className="w-3/4 md:w-full md:m-5 lg:w-3/4 m-auto lg:m-auto">
        <div className="flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-4">
          {/* Meet Label */}
          <h1 className="text-2xl font-semibold my-5">Meet</h1>

          {/* Action Cards */}
          <div className="flex justify-between gap-2 mb-8 w-full relative">
            {/* Create a Meeting Card */}
            <MeetCard
              label="Create a Meeting Link"
              icon={<Link2 size={24} />}
              bgColor="bg-purple-700"
              textColor="text-white"
              hoverEffect="hover:shadow-xl"
              onClick={() => {
                setShowCreateCard(!showCreateCard);
                setShowJoinCard(false); // close join card if open
              }}
            />

            {/* Schedule a Meeting */}
            <MeetCard
              label="Schedule a Meeting"
              icon={<CalendarDays size={24} className="text-pink-500" />}
              bgColor="bg-white"
              textColor="text-black"
              hoverEffect="hover:shadow-xl"
            />

            {/* Join with Meeting ID */}
            <MeetCard
              label="Join with Meeting ID"
              icon={<Hash size={24} className="text-blue-500" />}
              bgColor="bg-white"
              textColor="text-black"
              hoverEffect="hover:shadow-xl"
              onClick={() => {
                setShowJoinCard(!showJoinCard);
                setShowCreateCard(false); // close create card if open
              }}
            />

            {/* Create Meeting Dropdown Card */}
            {showCreateCard && (
              <div className="absolute top-15 w-10/12 sm:w-75 bg-white border border-gray-300 shadow-xl rounded-lg p-3 z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-md font-semibold">Give your meeting a title</h3>
                  <X
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setShowCreateCard(false)}
                  />
                </div>
                <input
                  type="text"
                  value={meetingTitle}
                  onChange={(e) => setMeetingTitle(e.target.value)}
                  className="w-full bg-gray-200 p-2 rounded-lg mb-4 outline-none"
                />
                <button className="w-full bg-purple-700 cursor-pointer text-white py-2 rounded-lg hover:shadow-xl">
                  Create and Copy Link
                </button>
              </div>
            )}

            {/* Join Meeting Dropdown Card */}
            {showJoinCard && (
              <div className="absolute top-15 right-0 w-10/12 sm:w-75 bg-white border border-gray-300 shadow-xl rounded-lg p-3 z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-md font-semibold">Join a meeting with an ID</h3>
                  <X size={20} className="cursor-pointer" onClick={() => setShowJoinCard(false)} />
                </div>

                {/* Meeting ID Label with Info */}
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-700">Meeting ID</span>
                  <Info size={14} className="ml-1 text-gray-500" />
                </div>

                {/* Meeting ID Input */}
                <input
                  type="text"
                  placeholder="Type a meeting ID"
                  value={meetingId}
                  onChange={(e) => setMeetingId(e.target.value)}
                  className="w-full bg-gray-200 p-2 rounded-lg mb-4 outline-none"
                />

                {/* Passcode Label */}
                <span className="text-sm text-gray-700">Type a meeting passcode</span>

                {/* Passcode Input */}
                <input
                  type="text"
                  placeholder="Type a meeting passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-gray-200 p-2 rounded-lg mb-4 outline-none mt-1"
                />

                {/* Join Meeting Button */}
                <button className="w-full bg-purple-700 text-white cursor-pointer py-2 rounded-lg hover:shadow-xl">
                  Join Meeting
                </button>
              </div>
            )}
          </div>

          {/* Rest of the UI (unchanged) */}

          {/* Meeting Links Section */}
          <div className="w-full mb-6">
            <h2 className="text-lg font-semibold mb-3">Meeting links</h2>
            <div className="bg-white rounded-xl shadow-md px-5 py-10 transition-all hover:shadow-xl">
              <div className="items-center mb-3">
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
              <h2 className="text-lg lg:text-lg font-semibold mb-3">Scheduled meetings</h2>
              <div className="flex items-center mt-3 sm:mt-0">
                <CalendarDays size={20} className="mr-2" />
                <button className="cursor-pointer text-sm hidden sm:block">View in calendar</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row rounded-xl shadow-md transition-all hover:shadow-xl">
              <div className="w-full sm:w-1/2 flex justify-center items-center min-h-36">
                <p className="text-gray-700 text-center">You don't have anything scheduled.</p>
              </div>
              <div className="hidden sm:flex w-full sm:w-1/2 justify-center items-center">
                <img
                  src="/images/schmeet.webp"
                  alt="No Meetings"
                  className="h-full w-full max-h-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
