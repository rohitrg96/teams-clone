import type { CircularNameProps } from '../../types/chat.type';
import { getInitials } from '../../utils/helperfunction';

export const CircularName = ({ dimension, grpName, chatBox, image }: CircularNameProps) => {
  const ifChatBox = chatBox ? ' ml-5 mr-3 text-[12px]' : '';
  const dimensionClass =
    dimension === 9
      ? 'h-9 w-9'
      : dimension === 10
        ? 'h-10 w-10'
        : dimension === 12
          ? 'h-12 w-12'
          : '';

  const classString = `border rounded-full bg-red-100 text-center flex items-center justify-center font-bold overflow-hidden ${dimensionClass}${ifChatBox}`;

  return (
    <div className={classString}>
      {image ? (
        <img src={image} alt="Profile" className="h-full w-full object-cover" />
      ) : (
        getInitials(grpName)
      )}
    </div>
  );
};
