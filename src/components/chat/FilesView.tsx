import { FileText, ArrowUpToLine } from 'lucide-react';
import { useFileUpload } from '../../hooks/useFileUpload';

export const FilesView = () => {
  const { files, handleUploadClick, handleFileChange } = useFileUpload();

  return (
    <div className="flex flex-col flex-1 p-4 sm:p-8 md:p-10 overflow-y-auto w-full max-w-5xl mx-auto">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleUploadClick}
          className="flex items-center bg-white text-black px-3 py-1 text-sm hover:bg-gray-100 border border-gray-400"
        >
          <ArrowUpToLine className="mr-2" size={16} />
          Upload
        </button>

        <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
      </div>

      {/* Table Header */}
      <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-600 text-sm border-b border-gray-300 pb-2 mb-2">
        <div>File</div>
        <div>Name</div>
        <div>Shared On</div>
        <div>Sent By</div>
      </div>

      {/* Table Rows */}
      {files.map((file, index) => (
        <div
          key={index}
          className="grid grid-cols-2 sm:grid-cols-4 items-center text-sm text-gray-700 border-b border-gray-200 py-2 gap-2"
        >
          {/* File Icon & Name Combined for small screens */}
          <div className="flex items-center">
            <FileText className="text-gray-500 mr-2" size={18} />
            <span className="sm:hidden">{file.name}</span>
          </div>

          {/* Show Name in separate column for larger screens */}
          <div className="hidden sm:block">{file.name}</div>

          <div>{file.date}</div>
          <div>{file.sentBy}</div>
        </div>
      ))}
    </div>
  );
};
