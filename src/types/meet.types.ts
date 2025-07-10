export interface MeetCardProps {
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  hoverEffect?: string | boolean;
  onClick?: () => void;
}

export interface MeetingHeaderBarProps {
  onSave: () => void;
  onClose: () => void;
}

export interface MeetingScheduleBodyProps {
  prefillDate?: string;
  prefillStartTime?: string;
  prefillEndTime?: string;
}

export interface RichTextAreaProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}
