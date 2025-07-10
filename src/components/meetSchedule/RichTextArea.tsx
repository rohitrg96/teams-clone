import {
  Bold,
  Italic,
  Underline,
  Highlighter,
  Type,
  TextQuote,
  List,
  ListOrdered,
  Link,
  Table,
  Minus,
  Plus,
  Pilcrow,
  PaintBucket,
} from 'lucide-react';
import { useState } from 'react';
import type { RichTextAreaProps } from '../../types/meet.types';

export const RichTextArea = ({ value, onChange, placeholder }: RichTextAreaProps) => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);

  return (
    <div className="space-y-2 bg-gray-100 w-11/12">
      {/* Toolbar */}
      <div className="flex flex-wrap space-x-2 mb-2 items-center">
        <button
          onClick={() => setIsBold(!isBold)}
          className={`p-1 rounded hover:bg-gray-100 ${isBold ? 'text-purple-700' : 'text-gray-600'} cursor-pointer`}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          onClick={() => setIsItalic(!isItalic)}
          className={`p-1 rounded hover:bg-gray-100 ${isItalic ? 'text-purple-700' : 'text-gray-600'} cursor-pointer`}
          title="Italic"
        >
          <Italic size={16} />
        </button>
        <button
          onClick={() => setIsUnderline(!isUnderline)}
          className={`p-1 rounded hover:bg-gray-100 ${isUnderline ? 'text-purple-700' : 'text-gray-600'} cursor-pointer`}
          title="Underline"
        >
          <Underline size={16} />
        </button>
        <button
          onClick={() => setIsHighlight(!isHighlight)}
          className={`p-1 rounded hover:bg-gray-100 ${isHighlight ? 'text-purple-700' : 'text-gray-600'} cursor-pointer`}
          title="Highlight"
        >
          <Highlighter size={16} />
        </button>

        {/* Additional Icons */}
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Font Color"
        >
          <PaintBucket size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Font Size"
        >
          <Type size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Paragraph"
        >
          <Pilcrow size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Decrease Indent"
        >
          <Minus size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Increase Indent"
        >
          <Plus size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Bulleted List"
        >
          <List size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Quote"
        >
          <TextQuote size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Insert Link"
        >
          <Link size={16} />
        </button>
        <button
          className="p-1 rounded hover:bg-gray-100 text-gray-600 cursor-pointer"
          title="Insert Table"
        >
          <Table size={16} />
        </button>
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Add description'}
        className={`w-full h-[240px] px-2 py-2 bg-gray-100 rounded-t-lg border-b-2 outline-none text-sm resize-none ${
          value ? 'border-purple-700' : 'border-gray-300 focus:border-purple-700'
        }`}
        style={{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          backgroundColor: isHighlight ? '#FEF3C7' : '',
        }}
      />
    </div>
  );
};
