import { useState } from 'react';
import type { UploadedFile } from '../types/chat.type';

export const useFileUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([
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

      const newFile: UploadedFile = {
        name: uploadedFile.name,
        date: new Date().toISOString().split('T')[0],
        sentBy: 'You',
      };

      setFiles((prev) => [newFile, ...prev]);
    }
  };

  return {
    files,
    handleUploadClick,
    handleFileChange,
  };
};
