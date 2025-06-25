interface Message {
  sender: string;
  msg: string;
}

interface ChatBoxProps {
  grpName: string;
  messages: Message[];
}

export const ChatBox = ({ grpName, messages }: ChatBoxProps) => {
  return (
    <div className="w-3/4 h-screen flex flex-col ">
      <div className="flex border-b-1 border-gray-200 py-3 ">
        <div className="ml-5 w-8 h-8 border rounded-full bg-red-100 text-center flex items-center justify-center font-bold mr-3 ">
          JW
        </div>
        <div className="text-lg font-semibold py-1 ">{grpName}</div>
      </div>

      <div className="flex flex-col mt-5 gap-2 overflow-y-auto flex-grow">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2 m-1 max-w-xs ${
                message.sender === 'You'
                  ? 'bg-purple-700 text-white text-end'
                  : 'bg-gray-100 text-black'
              } rounded-lg`}
            >
              <div className="text-xs mb-1 text-red">
                {message.sender === 'You' ? '' : message.sender}
              </div>
              <div>{message.msg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
