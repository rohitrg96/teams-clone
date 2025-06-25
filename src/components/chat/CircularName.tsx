import type { CircularNameProps } from '../../types/chat.type';
import { getInitials } from '../../utils/helperfunction';

export const CircularName = ({ dimension, grpName, chatBox }: CircularNameProps) => {
  const ifChatBox = chatBox ? ' ml-5 mr-3' : '';
  const classString =
    `border rounded-full bg-red-100 text-center flex items-center justify-center font-bold h-${dimension} w-${dimension}` +
    ifChatBox;

  return (
    <>
      <div className={classString}>{getInitials(grpName)}</div>
    </>
  );
};
