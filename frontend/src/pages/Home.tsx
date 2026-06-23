import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { videoAPI } from '../services/api';

const Home: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await videoAPI.getAll();
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Recommended Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <Link key={video.id} to={`/video/${video.id}`}>
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 cursor-pointer">
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-sm truncate">{video.title}</h3>
                  <p className="text-gray-400 text-xs">{video.creator?.username}</p>
                  <p className="text-gray-500 text-xs">{video.views} views</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
