import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VideoPlayer from './pages/VideoPlayer';

const App: React.FC = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen">
        {/* Navigation */}
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="text-red-600 text-2xl font-bold">▶️ AI YouTube</Link>
            <div className="flex gap-4">
              {token && user ? (
                <>
                  <span className="text-white py-2">{user.username}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</Link>
                  <Link to="/register" className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
