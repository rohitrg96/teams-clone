import { MeetingHeaderBar } from '../components/meetSchedule/MeetingHeaderBar';
import { MeetingScheduleBody } from '../components/meetSchedule/MeetingScheduleBody';
import { MeetingOptionsSidebar } from '../components/meetSchedule/MeetingOptionsSidebar';

export const MeetingSchedulePage = () => {
  const handleSave = () => console.log('Save clicked');
  const handleClose = () => console.log('Close clicked');

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <MeetingHeaderBar onSave={handleSave} onClose={handleClose} />

      <div className="flex-1 flex overflow-y-auto p-4 space-x-6">
        {/* Main Body - 3/4 */}
        <div className="w-9/12 mb-10">
          <MeetingScheduleBody />
        </div>

        {/* Sidebar - 1/4 */}
        <div className="w-3/12 ">
          <MeetingOptionsSidebar />
        </div>
      </div>
    </div>
  );
};
