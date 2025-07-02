import {
  Info,
  Pencil,
  UserPlus,
  Clock3,
  ArrowRight,
  Repeat,
  MapPin,
  AlignRight,
} from 'lucide-react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { RichTextArea } from './RichTextArea';

interface MeetingScheduleBodyProps {
  prefillDate?: string;
  prefillStartTime?: string;
  prefillEndTime?: string;
}

export const MeetingScheduleBody = ({
  prefillDate,
  prefillStartTime,
  prefillEndTime,
}: MeetingScheduleBodyProps) => {
  const [title, setTitle] = useState('');
  const [participant, setParticipant] = useState('');
  const [startDate, setStartDate] = useState(prefillDate ?? '');
  const [startTime, setStartTime] = useState(prefillStartTime ?? '');
  const [endDate, setEndDate] = useState(prefillDate ?? '');
  const [endTime, setEndTime] = useState(prefillEndTime ?? '');
  const [allDay, setAllDay] = useState(false);
  const [repeatOption, setRepeatOption] = useState('Does not repeat');
  const [showRepeatDropdown, setShowRepeatDropdown] = useState(false);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const repeatOptions = ['Does not repeat', 'Daily', 'Weekly', 'Monthly', 'Yearly', 'Custom'];

  return (
    <div className="p-2 sm:p-4 space-y-6">
      {/* Timezone Section */}
      <div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-sm text-gray-600">
            Time zone:&nbsp;
            <span className="font-medium">(UTC+5:30) Chennai, Kolkata, Mumbai, New Delhi</span>
          </div>
        </div>
        <hr className="mt-3 border-gray-300" />
      </div>

      {/* Teams Plan Info */}
      <div className="border border-gray-300 p-2 flex items-start sm:items-center space-x-2 sm:w-10/12">
        <div className="p-1">
          <Info className="text-gray-600" />
        </div>

        <div className="flex-1">
          <div className="text-sm text-gray-700">
            With your current Teams plan, you get up to 60 minutes per meeting with up to 100
            participants.
          </div>
          <div className="underline text-sm text-gray-700 cursor-pointer">Learn More</div>
        </div>
      </div>

      {/* Form Inputs Section */}
      <div className="space-y-4">
        {/* Title Input */}
        <div className="flex items-center space-x-3 flex-wrap">
          <div className="p-2">
            <Pencil className="text-gray-500" size={20} />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add title"
              className={`w-full sm:w-9/12 px-2 py-2 bg-gray-100 rounded-t-lg border-b-2 outline-none text-sm ${
                title ? 'border-purple-700' : 'border-gray-300 focus:border-purple-700'
              }`}
            />
          </div>
        </div>

        {/* Participant Input */}
        <div className="flex items-center space-x-3 flex-wrap">
          <div className="p-2">
            <UserPlus className="text-gray-500" size={20} />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              value={participant}
              onChange={(e) => setParticipant(e.target.value)}
              placeholder="Enter name, email or phone number"
              className={`w-full sm:w-9/12 px-2 py-2 bg-gray-100 rounded-t-lg border-b-2 outline-none text-sm ${
                participant ? 'border-purple-700' : 'border-gray-300 focus:border-purple-700'
              }`}
            />
          </div>
        </div>

        {/* Date-Time Row */}

        <div className="flex flex-wrap items-center  w-full sm:w-10/12">
          {/* Clock icon beside first input only on small screens */}
          <div className="w-8 p-2 flex justify-center sm:hidden ">
            <Clock3 className="text-gray-500" size={20} />
          </div>

          {/* Entire inputs block */}
          <div className="flex flex-wrap items-center gap-2 flex-1 ml-4 sm:ml-1 sm:p-1">
            {/* Clock icon inside inputs only for medium and up */}
            <div className="hidden sm:flex w-8 justify-center">
              <Clock3 className="text-gray-500" size={20} />
            </div>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-2 py-2 bg-gray-100 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-sm rounded-t-lg"
            />

            {!allDay && (
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="px-2 py-2 bg-gray-100 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-sm rounded-t-lg"
              />
            )}

            {/* Arrow hidden on small screens */}
            <ArrowRight className="text-gray-500 hidden sm:inline" size={16} />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-2 py-2 bg-gray-100 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-sm rounded-t-lg"
            />

            {!allDay && (
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="px-2 py-2 bg-gray-100 border-b-2 border-gray-300 focus:border-purple-700 outline-none text-sm rounded-t-lg"
              />
            )}

            <div className="flex items-center space-x-2 ml-2 mt-2 sm:mt-0">
              <Switch
                checked={allDay}
                onChange={setAllDay}
                className={`${
                  allDay ? 'bg-purple-700' : 'bg-gray-300'
                } relative inline-flex h-5 w-10 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    allDay ? 'translate-x-5' : 'translate-x-1'
                  } inline-block h-3 w-3 transform rounded-full bg-white transition`}
                />
              </Switch>
              <span className="text-sm text-gray-700">All day</span>
            </div>
          </div>
        </div>

        {/* Repeat Row */}
        <div className="flex items-center space-x-3 w-full sm:w-10/12 relative flex-wrap">
          <div className="p-2">
            <Repeat className="text-gray-500" size={20} />
          </div>
          <div className="flex-1 min-w-[200px] relative">
            <input
              readOnly
              value={repeatOption}
              placeholder="Does not repeat"
              onClick={() => setShowRepeatDropdown(!showRepeatDropdown)}
              className="w-full sm:w-4/12 px-2 py-2 bg-gray-100 rounded-t-lg border-b-2 border-gray-300 focus:border-purple-700 outline-none text-sm cursor-pointer"
            />
            {showRepeatDropdown && (
              <div className="absolute w-full sm:w-4/12 left-0 right-0 mt-1 border border-gray-300 bg-white rounded-lg z-10">
                {repeatOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setRepeatOption(opt);
                      setShowRepeatDropdown(false);
                    }}
                    className="px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    style={{ color: opt === repeatOption ? '#000' : '#6B7280' }}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Location Row */}
        <div className="flex items-center space-x-3 flex-wrap">
          <div className="p-2">
            <MapPin className="text-gray-500" size={20} />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Add location"
              className={`w-full sm:w-9/12 px-2 py-2 bg-gray-100 rounded-t-lg border-b-2 outline-none text-sm ${
                location ? 'border-purple-700' : 'border-gray-300 focus:border-purple-700'
              }`}
            />
          </div>
        </div>

        {/* Description Row */}
        <div className="flex items-start space-x-3 flex-wrap w-full sm:w-10/12">
          <div className="p-2">
            <AlignRight className="text-gray-500" size={20} />
          </div>
          <div className="flex-1 min-w-[200px] mb-16">
            <RichTextArea
              value={description}
              onChange={setDescription}
              placeholder="Add meeting description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
