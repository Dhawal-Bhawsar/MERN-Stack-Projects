# ✨ AI-Powered Habit Tracker

An intelligent habit-tracking application built using the **MERN Stack** that helps users build consistency, monitor daily routines, analyze their progress, and improve productivity with AI-powered insights.

The application combines habit management, progress visualization, streak tracking, and personalized AI assistance through Google Gemini to create a smarter habit-building experience.

## 🚀 Features

### 1. User Authentication
- User registration and login.
- Secure password hashing using bcrypt.
- JWT-based authentication.
- Protected routes and user-specific data.
- Profile management.

### 2. Habit Management
- Create, edit, and delete habits.
- Organize habits using categories.
- Customize habits with icons and colors.
- Set habit frequency and weekly targets.
- Archive and restore habits.
- Search and filter habits.
- Reorder habits.

### 3. Daily Habit Tracking
- Mark habits as completed or incomplete.
- Monitor daily completion progress.
- Track current and longest streaks.
- View weekly habit completion grids.
- Visualize activity through a 90-day contribution heatmap.
- Celebrate completed habits with interactive confetti animations.

### 4. AI-Powered Features (Google Gemini)

The application integrates Google Gemini to provide personalized habit coaching and intelligent recommendations.

- **AI Weekly Reports:** Generate personalized weekly progress reports with performance analysis, patterns, and actionable suggestions.
- **Smart Habit Suggestions:** Receive recommendations for new habits based on existing habit history and activity.
- **Streak Recovery Plans:** Get personalized guidance to rebuild consistency after breaking a habit streak.
- **AI Habit Assistant:** Ask questions about your habit-tracking data and receive contextual responses.
- **Morning Motivation:** Receive motivational messages to encourage daily consistency.

### 5. Analytics & Insights
- Weekly and monthly progress monitoring.
- Habit completion statistics.
- Current and longest streak analysis.
- Daily activity comparisons.
- Habit-wise performance breakdown.
- Interactive charts and visualizations.

### 6. User Interface
- Modern and responsive dashboard.
- Light and dark mode.
- Interactive progress rings.
- Weekly overview and statistics pages.
- Clean navigation and reusable React components.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML, CSS |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| AI Integration | Google Gemini API |
| HTTP Client | Axios |
| Routing | React Router |
| Data Visualization | Recharts |
| Date Management | date-fns |
| Icons | Lucide React, React Icons |
| Animations | Canvas Confetti |

## 🏗️ Application Architecture

The application follows a client-server architecture:

1. **React Frontend:** Handles the user interface, habit management, dashboard, analytics, and AI interactions.
2. **Express Backend:** Provides RESTful APIs for authentication, habit operations, activity logs, and AI functionality.
3. **MongoDB Database:** Stores user accounts, habits, completion logs, and AI-generated insights.
4. **Google Gemini:** Processes user habit data to generate personalized reports, suggestions, recovery plans, and conversational responses.

## 📸 Screenshots

### Home Page

![Home Page - Light Mode](Screenshots/Home%20Page%20(Light%20Mode).png)

![Home Page - Dark Mode](Screenshots/Home%20Page%20(Dark%20Mode).png)

### Dashboard

![Dashboard](Screenshots/Home%20Page%20(with%20activity).png)

### Habit Management

![Habit Management](Screenshots/Habit%20Page.png)

### Weekly Overview

![Weekly Overview](Screenshots/Weekly%20Overview%20Page.png)

### AI Insights

![Weekly Insights](Screenshots/Weekly%20Insights%20Page.png)

### Authentication

![Login Page](Screenshots/Login%20Page.png)

![Sign Up Page](Screenshots/Sign%20Up%20Page.png)

## 📂 Project Structure

```text
AI-Powered Habit Tracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── aiController.js
│   │   ├── authController.js
│   │   ├── HabitController.js
│   │   └── logController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Habit.js
│   │   ├── HabitLog.js
│   │   └── AlInsight.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── habits.js
│   │   ├── logs.js
│   │   └── ai.js
│   │
│   ├── utils/
│   │   ├── aiService.js
│   │   └── dateHelpers.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Screenshots/
└── README.md
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- npm
- MongoDB (local installation or MongoDB Atlas account)
- Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Dhawal-Bhawsar/MERN-Stack-Projects.git
```

Navigate to the project directory:

```bash
cd MERN-Stack-Projects/AI-Powered%20Habit%20Tracker
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRATION=30d

GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-3.8-flash

CLIENT_URL=http://localhost:5173
```

**Environment Variables:**

| Variable | Description |
|---|---|
| PORT | Backend server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT authentication |
| JWT_EXPIRATION | JWT token expiration duration |
| GEMINI_API_KEY | Google Gemini API key |
| GEMINI_MODEL | Gemini model identifier |
| CLIENT_URL | Allowed frontend origin for CORS |

Start the backend development server:

```bash
npm run dev
```

The backend will run at:

`http://localhost:8000`

Health check:

`http://localhost:8000/api/health`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will run at:

`http://localhost:5173`

**Note:** The frontend Axios configuration currently uses `http://localhost:8000/api` as its API base URL. Update `frontend/src/api/axios.js` if you deploy the backend to another address.

## 🔌 API Endpoints

All protected endpoints require a JWT access token in the Authorization header:

```http
Authorization: Bearer <your_token>
```

### Authentication APIs

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Authenticate user | Public |
| GET | `/api/auth/me` | Get logged-in user | Protected |
| PUT | `/api/auth/profile` | Update user profile | Protected |

### Habit Management APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/habits` | Retrieve habits |
| POST | `/api/habits` | Create a new habit |
| PUT | `/api/habits/:id` | Update a habit |
| DELETE | `/api/habits/:id` | Delete a habit |
| PUT | `/api/habits/:id/archive` | Archive or restore a habit |
| PUT | `/api/habits/reorder` | Reorder habits |

### Habit Tracking & Analytics APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/logs` | Mark a habit as completed |
| DELETE | `/api/logs` | Remove a completion log |
| GET | `/api/logs/today` | Get today's completed habits |
| GET | `/api/logs/range` | Retrieve logs within a date range |
| GET | `/api/logs/heatmap` | Get 90-day activity data |
| GET | `/api/logs/stats` | Get overall habit statistics |
| GET | `/api/logs/stats/:habitId` | Get individual habit statistics |

### AI APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/ai/weekly-report` | Generate an AI weekly report |
| POST | `/api/ai/suggest-habits` | Generate personalized habit suggestions |
| POST | `/api/ai/recovery-plan` | Generate a streak recovery plan |
| POST | `/api/ai/chat` | Interact with the AI habit assistant |
| GET | `/api/ai/morning` | Generate a motivational message |

All AI endpoints require authentication.

## 🗄️ Database Models

The application uses MongoDB with Mongoose to manage the following collections:

- **User:** Stores user account information, authentication details, and profile preferences.
- **Habit:** Stores habit names, descriptions, categories, frequencies, targets, colors, and archive status.
- **HabitLog:** Stores individual habit completion records and dates.
- **AIInsight:** Stores AI-generated reports, suggestions, recovery plans, and chat insights.

## 🤖 AI Integration Workflow

The AI functionality is implemented through the Google Gemini API.

1. The authenticated user requests an AI feature.
2. The backend retrieves relevant habit and completion history from MongoDB.
3. The habit data is processed and formatted into contextual prompts.
4. Google Gemini generates a personalized response.
5. The generated insight is returned to the frontend.
6. The response is saved in the AIInsight collection.

If the Gemini API key is not configured, AI functionality returns an appropriate disabled-feature response.

## 🔒 Security

- Password hashing with bcryptjs.
- JWT-based authentication.
- Protected backend routes.
- User-specific database queries.
- CORS configuration for permitted frontend origins.
- Environment variables for sensitive configuration.

**Important:** Never commit your `.env` files, API keys, database credentials, or JWT secrets to GitHub.

## 🎯 Project Objective

The objective of this project is to develop an intelligent habit management platform that goes beyond traditional habit tracking.

By combining full-stack web development, data visualization, and generative AI, the application helps users understand their behavioral patterns, identify areas for improvement, and receive personalized guidance to maintain long-term consistency.

## 👨‍💻 Author

**Dhawal Bhawsar**

- GitHub: [@Dhawal-Bhawsar](https://github.com/Dhawal-Bhawsar)
- LinkedIn: [Dhawal Bhawsar](https://www.linkedin.com/in/dhawal-bhawsar-10b8b324b/)

---

⭐ If you find this project interesting, consider giving the repository a star!
