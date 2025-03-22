# Reverse Career Mapping

## Overview
Reverse Career Mapping is a web application designed to help professionals navigate their career growth by providing insights into required skills, possible next roles, skills to learn, and salary growth based on their current position. Additionally, the platform offers a job trending analysis feature updated on a weekly basis.

## Features
- Select your current role to explore career progression paths.
- View required skills, next possible roles, and skills to learn.
- Get insights into salary growth potential.
- Weekly job trending analysis to understand market demand.
- AI-powered career recommendations using advanced AI models.

## Tech Stack
### Frontend:
- React
- Tailwind CSS

### Backend:
- FastAPI (Python)
- Express.js (Node.js)

### Database:
- MongoDB

### Authentication:
- Server-based authentication with JWT

### API Architecture:
- RESTful API

### AI Stack:
- Grok
- Replit AI
- DeepSeek
- Mistral AI

## Installation & Setup
### Prerequisites:
- Node.js & npm
- Python & pip
- MongoDB

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-url.git
   cd reverse-career-mapping
   ```
2. Install frontend dependencies:
   ```sh
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```sh
   cd backend
   pip install -r requirements.txt
   ```
4. Start the frontend:
   ```sh
   npm run dev
   ```
5. Start the backend:
   ```sh
   uvicorn main:app --reload
   ```
6. Ensure MongoDB is running and connected.

## API Endpoints
- **GET /roles** - Fetch available roles
- **POST /analyze** - Analyze career growth
- **GET /trending-jobs** - Fetch weekly trending job insights



