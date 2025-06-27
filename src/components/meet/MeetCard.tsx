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
      className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 rounded-xl cursor-pointer shadow-md ${bgColor} ${textColor} 
      ${hoverEffect ? hoverEffect : ''} transition-all w-20 sm:w-30 md:w-55 lg:w-55 xl:w-68  text-center`}
    >
      {icon}
      <span className="hidden sm:hidden  md:inline lg:inline text-sm font-medium">{label}</span>
    </div>
  );
};

export default MeetCard;
