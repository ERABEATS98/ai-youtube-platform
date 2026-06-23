import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { videoAPI, commentAPI } from '../services/api';

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await videoAPI.getById(id!);
        setVideo(response.data);
        const commentsResponse = await commentAPI.getByVideoId(id!);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching video:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;
  if (!video) return <div className="text-white text-center mt-20">Video not found</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-4">
        <div className="aspect-video bg-black rounded-lg mb-6 overflow-hidden">
          <video src={video.videoUrl} controls className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
        <p className="text-gray-400 mb-4">{video.description}</p>
        <div className="flex gap-4 mb-6">
          <span className="bg-gray-800 px-3 py-1 rounded">👁️ {video.views} views</span>
          <span className="bg-gray-800 px-3 py-1 rounded">👍 {video.likes} likes</span>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-bold mb-4">Comments ({comments.length})</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-800 p-4 rounded">
                <p className="font-semibold">{comment.author?.username}</p>
                <p className="text-gray-300">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
