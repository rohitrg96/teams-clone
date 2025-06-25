import { CircularName } from './CircularName';
import type { ChatBoxProps } from '../../types/chat.type';
export const ChatBox = ({ grpName, messages }: ChatBoxProps) => {
  return (
    <div className="w-3/4 h-screen flex flex-col ">
      <div className="flex border-b-1 border-gray-200 py-3 ">
        <CircularName dimension={8} grpName={grpName} chatBox={true} />
        <div className="text-lg font-semibold py-1 ">{grpName}</div>
      </div>

      <div className="flex flex-col mt-5 gap-2 overflow-y-auto flex-grow">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2  max-w-xs ${
                message.sender === 'You'
                  ? 'bg-purple-700 text-white m-1 text-end'
                  : 'bg-gray-100 text-black ml-5'
              } rounded-lg`}
            >
              <div className="text-xs mb-1">{message.sender === 'You' ? '' : message.sender}</div>
              <div className="">{message.msg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
