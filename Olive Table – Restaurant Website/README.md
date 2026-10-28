# 🍽️ The Olive Table — Restaurant Reservation Application

A full-stack restaurant website built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**. The Olive Table provides a welcoming restaurant experience with an elegant interface, menu highlights, team information, and an online reservation form.

## 📌 Project Overview

The Olive Table is designed to showcase a modern restaurant website with a clean layout, engaging food imagery, and a straightforward reservation experience. The application combines a React frontend with a Node.js and Express backend, with MongoDB used for data storage where configured.

The website features restaurant information, popular dishes, team profiles, and a reservation form where customers can enter their details and preferred booking date and time.

## ✨ Features

- **Restaurant Landing Page** — A welcoming homepage with restaurant branding and food imagery.
- **About Us Section** — Introduces the restaurant's philosophy and dining experience.
- **Popular Dishes** — Highlights featured dishes with descriptive content.
- **Quality Food & Service** — Showcases food quality, taste, and delivery-related information.
- **Our Team** — Displays chef profiles and their professional roles.
- **Online Reservation Form** — Collects customer details and preferred reservation date and time.
- **Responsive UI** — A clean, visually appealing interface designed for a convenient browsing experience.
- **Restaurant Footer** — Displays restaurant branding, location, opening hours, and copyright information.
- **MERN Stack Architecture** — Separates the frontend from backend application logic.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| JavaScript | Application functionality |
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| Node.js | Backend runtime |
| Express.js | Backend API and server |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |

*The exact dependencies and database integration depend on the implementation in the project source code.*

## 📂 Project Structure

```text
Full Stack Restaurant Application/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

*The structure above is illustrative. Keep the actual filenames and folders from your repository if they differ.*

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas connection, if required by the backend
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Dhawal-Bhawsar/MERN-Stack-Projects.git
```

Navigate to the project directory:

```bash
cd "MERN-Stack-Projects/Full Stack Restaurant Application"
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create the required environment configuration file based on the variables referenced in your backend code. For example, if your application uses these variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the example values with your actual configuration. Never commit real credentials or secrets to GitHub.

Start the backend using the script defined in `backend/package.json`. For example:

```bash
npm run dev
```

If your project uses `npm start` instead, run that command.

### 3. Set Up the Frontend

Open another terminal:

```bash
cd "MERN-Stack-Projects/Full Stack Restaurant Application/frontend"
npm install
```

Start the frontend using the script defined in `frontend/package.json`. For a Vite-based application, this is commonly:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

> **Note:** The exact start commands and environment variable names should match your project's existing configuration files.

## 📝 Reservation Workflow

1. Open the restaurant website.
2. Explore the restaurant information and featured dishes.
3. Navigate to the reservation section.
4. Enter your name, email address, preferred date and time, and any other requested details.
5. Submit the reservation form.
6. The backend should validate and process the request according to the application's implementation.

## 🎨 UI Customization

The website content has been refined to provide a more professional restaurant identity:

- Replaced placeholder text with restaurant-specific descriptions.
- Updated the About Us section to emphasize fresh ingredients and memorable dining experiences.
- Improved the Quality Food, Super Taste, and Fast Delivery descriptions.
- Updated the Our Team introduction.
- Customized the footer with The Olive Table branding and restaurant information.

## 🔐 Environment Variables

Keep private configuration in local environment files that are excluded from version control.

Typical variables may include:

| Variable | Purpose |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |

These are examples; use the actual variable names referenced in your application.

## 🚀 Future Improvements

Potential enhancements include:

- User authentication and reservation history.
- Reservation availability checks and duplicate-booking prevention.
- Booking confirmation emails.
- An admin dashboard to manage reservations.
- Form validation and improved error handling.
- Deployment with a publicly accessible frontend and backend.

## 👨‍💻 Author

**Dhawal Bhawsar**

- GitHub: [Dhawal-Bhawsar](https://github.com/Dhawal-Bhawsar)
- Project Repository: [MERN-Stack-Projects](https://github.com/Dhawal-Bhawsar/MERN-Stack-Projects/tree/main/Full%20Stack%20Restaurant%20Application)

## 📄 License

This project is available for learning and portfolio purposes. Add a license file if you intend to distribute it under a specific open-source license.
