import { useRef } from 'react';
import { Smile, Paperclip, Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  pt?: string;
  pb?: string;
}

export const ChatInput = ({
  input,
  setInput,
  onSend,
  pt = 'pt-6',
  pb = 'pb-15',
}: ChatInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`px-4 sm:px-14 ${pt} ${pb} flex items-center`}>
      <div className="flex items-center border rounded-xl flex-grow px-2 relative">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-2 py-2 text-sm focus:outline-none pr-20"
        />

        <div className="absolute right-3 flex items-center space-x-2">
          <button className="p-1 hover:text-purple-700">
            <Smile size={18} />
          </button>
          <button
            className="p-1 hover:text-purple-700"
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip size={18} />
          </button>
          <button className="p-1 hover:text-purple-700" onClick={onSend}>
            <Send size={18} />
          </button>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setInput(e.target.files[0].name);
          }
        }}
      />
    </div>
  );
};
