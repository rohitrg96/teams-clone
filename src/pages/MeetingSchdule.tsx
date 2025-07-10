import { MeetingHeaderBar } from '../components/meetSchedule/MeetingHeaderBar';
import { MeetingScheduleBody } from '../components/meetSchedule/MeetingScheduleBody';
import { MeetingOptionsSidebar } from '../components/meetSchedule/MeetingOptionsSidebar';

interface MeetingScheduleBodyProps {
  prefillDate?: string;
  prefillStartTime?: string;
  prefillEndTime?: string;
  setShowMeetingForm: (a: boolean) => void;
}
export const MeetingSchedulePage = ({
  prefillDate,
  prefillStartTime,
  prefillEndTime,
  setShowMeetingForm,
}: MeetingScheduleBodyProps) => {
  const handleSave = () => console.log('Save clicked');
  const handleClose = () => setShowMeetingForm(false);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <MeetingHeaderBar onSave={handleSave} onClose={handleClose} />

      <div className="flex-1 flex overflow-y-auto p-4 space-x-6">
        {/* Main Body - 3/4 */}
        <div className="w-9/12 mb-10">
          <MeetingScheduleBody
            prefillDate={prefillDate}
            prefillStartTime={prefillStartTime}
            prefillEndTime={prefillEndTime}
          />
        </div>

        {/* Sidebar - 1/4 */}
        <div className="w-3/12 ">
          <MeetingOptionsSidebar />
        </div>
      </div>
    </div>
  );
};
