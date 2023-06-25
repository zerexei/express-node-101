import React, { useState } from 'react';
import FileUploadButton from '@components/FileUploadButton';

const FileUpload = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  }

  async function upload() {
    if (!avatar) return;
    const formData = new FormData();
    formData.append('avatar', avatar);
    const res = await fetch('http://127.0.0.1:3002/users/1/avatar', {
      method: 'POST',
      body: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
    });
    console.log(res);
  }
  return (
    <form action="#">
      <div className="mb-6">
        <label
          htmlFor="avatar
  "
          className="block mb-1 text-sm font-bold text-gray-500"
        >
          Avatar
        </label>
        <FileUploadButton
          preview={avatarPreview}
          handleFileUpload={uploadAvatar}
        />
      </div>
      <button
        onClick={upload}
        className="rounded bg-blue-500 px-3.5 py-2.5 text-sm font-semibold capitalize text-white shadow-sm hover:bg-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-400"
      >
        Upload Avatar
      </button>
    </form>
  );
};

export default FileUpload;
