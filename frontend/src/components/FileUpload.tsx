const FileUpload = () => {
  return (
    <button className="mx-2 px-4 py-2 text-sm rounded text-gray-800 border focus:outline-none hover:bg-gray-100 inline-flex items-center justify-between">
      Upload file
      <svg
        className="w-4 h-4 fill-current ml-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z" />
      </svg>
    </button>
  );
};

export default FileUpload;
