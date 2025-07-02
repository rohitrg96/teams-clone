interface MeetCardProps {
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  hoverEffect?: string | boolean;
  onClick?: () => void;
}

const MeetCard = ({ label, icon, bgColor, textColor, hoverEffect, onClick }: MeetCardProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 rounded-xl cursor-pointer shadow-md 
      ${bgColor} ${textColor} ${hoverEffect ? hoverEffect : ''} transition-all 
      w-20 sm:w-30 md:w-55 lg:w-55 xl:w-68 text-center`}
      onClick={onClick}
    >
      {icon}
      <span className="hidden md:inline text-sm font-medium">{label}</span>
    </div>
  );
};

export default MeetCard;
