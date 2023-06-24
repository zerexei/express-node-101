import '@/App.css';
import FileUpload from '@components/FileUpload';

function App() {
  return (
    <>
      <div>
        <form action="#">
          <div className="mb-6">
            <label
              htmlFor="avatar
  "
              className="block mb-1 text-sm font-bold text-gray-500"
            >
              Avatar
            </label>
            <FileUpload />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
