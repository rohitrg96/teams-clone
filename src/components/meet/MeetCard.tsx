interface MeetCardProps {
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  hoverEffect?: string | boolean;
}

const MeetCard = ({ label, icon, bgColor, textColor, hoverEffect }: MeetCardProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-xl cursor-pointer shadow-md ${bgColor} ${textColor} 
      ${hoverEffect ? hoverEffect : ''} transition-all w-30  sm:w-65 text-center`}
    >
      {icon}
      <span className="hidden sm:inline text-sm font-medium">{label}</span>
    </div>
  );
};

export default MeetCard;
