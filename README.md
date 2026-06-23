# AI YouTube Platform

A full-featured YouTube-like video streaming platform with integrated AI capabilities.

## Features

### Core Platform
- ✅ User authentication & profiles
- ✅ Video upload & streaming
- ✅ User subscriptions
- ✅ Comments & replies
- ✅ Likes & favorites
- ✅ Watch history & recommendations
- ✅ Playlists
- ✅ Search functionality

### AI Features
- 🤖 AI-powered video recommendations
- 🤖 Auto-generated captions & subtitles
- 🤖 Video summarization
- 🤖 Content moderation
- 🤖 Auto-tagging & classification
- 🤖 Spam detection
- 🤖 Thumbnail generation

## Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Video Player**: HLS.js / Video.js

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT + Bcrypt
- **File Storage**: AWS S3 / MinIO
- **Queue**: Bull (Redis)

### AI/ML
- **Video Processing**: FFmpeg
- **AI APIs**: Google Cloud Video AI, Azure Video Indexer
- **NLP**: Hugging Face Transformers
- **Image Processing**: OpenCV, PIL

### DevOps
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Monitoring**: Winston (logging)

## Project Structure

```
ai-youtube-platform/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── ai/
│   │   ├── utils/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+
- Redis
- AWS S3 or MinIO (for file storage)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ERABEATS98/ai-youtube-platform.git
cd ai-youtube-platform
```

2. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Start with Docker Compose**
```bash
docker-compose up -d
```

4. **Run migrations**
```bash
cd backend
npm run db:migrate
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Docs: http://localhost:5000/api/docs

## API Documentation

See [API.md](./docs/API.md) for detailed API endpoint documentation.

## Development

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
npm install
npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License
