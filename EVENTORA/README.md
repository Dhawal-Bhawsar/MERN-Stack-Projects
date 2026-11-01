# 🎟️ Eventora – Full-Stack Event Booking Platform

<p align="center">
  <strong>A MERN Stack Event Management & Ticket Booking Application</strong>
</p>

Eventora is a full-stack event booking platform developed using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. It provides a centralized platform where users can discover events, register securely, and request tickets through an OTP-based booking workflow.

The application also features an administrative dashboard that enables administrators to create and manage events, review booking requests, confirm payments, monitor seat availability, and track platform revenue.

## 🎬 Project Demonstration

[![Eventora Demo](https://img.youtube.com/vi/n7ii3Zcs6k0/maxresdefault.jpg)](https://youtu.be/n7ii3Zcs6k0)

**[▶ Watch the Complete Project Demo](https://youtu.be/n7ii3Zcs6k0)**

## ✨ Key Features

### 👤 User Management
- Secure user registration and login.
- Email OTP verification during registration.
- JWT-based authentication.
- Password hashing using bcrypt.
- Role-based access control.
- Personalized user dashboard.

### 🎫 Event Discovery & Booking
- Browse upcoming events.
- View detailed event information.
- Explore events across different categories.
- Search events by title.
- Support for free and paid events.
- OTP-based booking verification.
- Track booking status and availability.
- Cancel existing bookings.

### 🔐 Security & Authentication
- JSON Web Token (JWT) authentication.
- Password encryption using bcrypt.
- Email-based One-Time Password verification.
- Protected routes and API endpoints.
- Separate access permissions for users and administrators.

### 📊 Admin Dashboard
- Create, update, and delete events.
- Manage event descriptions, dates, categories, and ticket prices.
- View all booking requests.
- Approve or reject booking requests.
- Confirm paid and unpaid booking statuses.
- Monitor total revenue.
- Track confirmed paid clients.
- View pending booking requests.
- Manage event seat availability.

### 📧 Email Notifications
- Automated OTP email delivery.
- Booking verification through email.
- Booking confirmation notifications.
- Email integration using Nodemailer.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, JavaScript |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| Email Service | Nodemailer |
| API Communication | Axios, REST APIs |
| Development Tools | Git, GitHub, VS Code, npm |

## 🏗️ System Architecture & Application Workflow

Eventora follows three major workflows: OTP verification, ticket booking, and administrator approval.

### Application Workflow Diagram

![Eventora Workflow Diagram](screenshots/09-system-workflow.png)

### 1. OTP Verification Flow
- User initiates an OTP request.
- Backend verifies the user's identity.
- A one-time password is generated.
- OTP is sent to the registered email address.

### 2. Booking Flow
- User submits a booking request.
- The submitted OTP is validated.
- Upon successful verification, a booking record is created.
- The request is forwarded for administrator review.

### 3. Admin Management Flow
- Administrator reviews booking requests.
- Booking requests can be approved or rejected.
- Payment status is updated by the administrator.
- Seat availability is updated after confirmation.
- Booking confirmation email is sent to the user.

## 📸 Application Screenshots

### 1. Authentication

**Login Page**

![Login Page](screenshots/01-login.png)

**Registration Page**

![Sign Up Page](screenshots/02-signup.png)

### 2. Home & Event Discovery

**Homepage**

![Homepage](screenshots/03-homepage.png)

**Upcoming Events**

![Upcoming Events](screenshots/04-upcoming-events.png)

### 3. Event Booking

**Event Details**

![Event Details](screenshots/05-event-details.png)

**OTP Booking Verification**

![OTP Verification](screenshots/06-booking-otp.png)

### 4. Administration

**Admin Dashboard**

![Admin Dashboard](screenshots/07-admin-dashboard.png)

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- MongoDB Atlas account or local MongoDB installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Dhawal-Bhawsar/MERN-Stack-Projects.git
```

Navigate to the Eventora project directory:

```bash
cd MERN-Stack-Projects/EVENTORA
```

### Step 2: Configure Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

Replace the placeholder values with your own credentials.

**Important:** Never commit your `.env` file, database credentials, JWT secrets, or email passwords to GitHub.

### Step 3: Install Dependencies

From the Eventora project root:

```bash
npm install
npm run install:all
```

Alternatively, install dependencies separately.

**Backend:**

```bash
cd server
npm install --legacy-peer-deps
```

**Frontend:**

```bash
cd client
npm install
```

### Step 4: Run the Application

From the Eventora project root:

```bash
npm run dev
```

This starts the frontend and backend development servers together using the configured development scripts.

Alternatively, run them separately.

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd client
npm run dev
```

### Local Development URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |

*Ports may vary depending on your local configuration.*

## 📁 Project Structure

```text
EVENTORA/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── ...
│
├── screenshots/
│   ├── 01-login.png
│   ├── 02-signup.png
│   ├── 03-homepage.png
│   ├── 04-upcoming-events.png
│   ├── 05-event-details.png
│   ├── 06-booking-otp.png
│   ├── 07-admin-dashboard.png
│   └── 09-system-workflow.png
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

*The structure is illustrative. Retain the actual filenames and folders from your project.*

## 🔒 Security Considerations

- Passwords are stored as bcrypt hashes.
- Authentication is handled through JWT.
- OTP verification adds an additional layer of security.
- Protected backend routes restrict unauthorized access.
- Administrator privileges are separated from regular user access.
- Environment variables are used for sensitive configuration.

## 🎯 Key Learning Outcomes

This project provided practical exposure to:

- Full-stack web application development using the MERN stack.
- REST API development and integration.
- MongoDB database design and management.
- JWT authentication and role-based authorization.
- Email OTP verification workflows.
- Event booking and seat availability management.
- Admin dashboard development.
- Backend validation and application security.
- End-to-end integration of frontend and backend services.

## 🚀 Future Enhancements

- Integration with Razorpay or Stripe for online payments.
- QR-code-based ticket generation and validation.
- Real-time booking status updates.
- Advanced event filtering and recommendations.
- Cloud deployment and scalability improvements.

## 👨‍💻 Author

**Dhawal Bhawsar**

B.Tech – Computer Science Engineering (Data Science)

- GitHub: [Dhawal-Bhawsar](https://github.com/Dhawal-Bhawsar)
- LinkedIn: [Add your LinkedIn Profile]

---

⭐ If you find this project interesting, consider giving the repository a star!

**Project Category:** Full-Stack Web Development | MERN Stack | Event Management System
