import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
            <input
              type="text"
              name="avatar"
              placeholder="avatar..."
              id="avatar"
              className="w-full p-2 border rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
