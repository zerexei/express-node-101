import '@/App.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="min-h-screen antialiased text-gray-700 bg-gray-100">
      <div className="flex h-full">
        <div className="w-[20rem] h-screen p-4">
          <Sidebar />
        </div>
        <div className="flex-1">
          <div className="relative w-full py-4 mx-auto transition duration-200 bg-white max-w-screen-2xl md:bg-transparent lg:py-6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
