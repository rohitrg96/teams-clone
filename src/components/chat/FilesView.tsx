import { FileText, ArrowUpToLine } from 'lucide-react';
import { useState } from 'react';

export const FilesView = () => {
  const [files, setFiles] = useState([
    { name: 'Report.pdf', date: '2024-07-03', sentBy: 'John Doe' },
    { name: 'Invoice.pdf', date: '2024-06-28', sentBy: 'Alice Smith' },
    { name: 'Presentation.pdf', date: '2024-06-20', sentBy: 'Michael Brown' },
  ]);

  const handleUploadClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];

      const newFile = {
        name: uploadedFile.name,
        date: new Date().toISOString().split('T')[0],
        sentBy: 'You',
      };

      setFiles((prev) => [newFile, ...prev]);
    }
  };

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
