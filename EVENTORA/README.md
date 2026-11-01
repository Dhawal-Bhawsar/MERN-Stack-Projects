# 🎟️ Eventora – Full-Stack Event Booking Platform

<p align="center">
  <strong>A MERN Stack Event Management & Ticket Booking Application</strong>
</p>

Eventora is a full-stack event booking platform developed using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. It provides a centralized platform where users can discover events, register securely, and request tickets through an OTP-based booking workflow.

The application also features an administrative dashboard that enables administrators to create and manage events, review booking requests, confirm payments, monitor seat availability, and track platform revenue.


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

<img width="1532" height="807" alt="Flowchart" src="https://github.com/user-attachments/assets/ce19609c-2eb6-4f5e-b4dd-18315fcdced2" />

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

<img width="1916" height="1017" alt="Login Page" src="https://github.com/user-attachments/assets/f87cecc4-eed6-41ec-b96b-d1231943492a" />

**Registration Page**

<img width="1917" height="1017" alt="Sign Up Page" src="https://github.com/user-attachments/assets/379f18f5-9a2e-494d-a0d3-e5f3cf13d2c9" />

### 2. Home & Event Discovery

**Homepage**

<img width="1900" height="998" alt="Home Page" src="https://github.com/user-attachments/assets/220af0ab-5772-4a15-8f20-29de4e8612c1" />

**Upcoming Events**

<img width="1896" height="1027" alt="Upcoming Events" src="https://github.com/user-attachments/assets/a1f08e43-2012-441d-88ac-d9458c64bca9" />

**Footer**

<img width="1896" height="233" alt="Footer" src="https://github.com/user-attachments/assets/8779bf28-6e58-4f5a-9f6e-03df7a961f2c" />


### 3. Event Booking

**Event Details**

<img width="1917" height="1022" alt="Event Details" src="https://github.com/user-attachments/assets/012f8ab7-35a1-43df-ae42-d77e6964a4d3" />

**OTP Booking Verification**

<img width="1896" height="1017" alt="Event Detail Otp" src="https://github.com/user-attachments/assets/96be5340-a037-4369-810c-0d249730509b" />

### 4. Administration

**Admin Dashboard**

<img width="1897" height="1021" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/b5c5c4fb-e9ef-4278-a045-f8e965eb391a" />

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
├── client/                         # React frontend application
│   ├── public/                     # Static assets (if added)
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── context/                # Global application state
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/                  # Application pages
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── EventDetail.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PaymentFailed.jsx
│   │   │   ├── PaymentSuccess.jsx
│   │   │   ├── Register.jsx
│   │   │   └── UserDashboard.jsx
│   │   │
│   │   ├── utils/                  # API utilities
│   │   │   └── axios.js
│   │   │
│   │   ├── App.jsx                 # Main application component
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Global styles
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                         # Node.js backend
│   ├── controllers/                # Business logic
│   │   ├── authcontroller.js
│   │   ├── bookingController.js
│   │   └── eventController.js
│   │
│   ├── middleware/                 # Authentication middleware
│   │   └── auth.js
│   │
│   ├── models/                     # MongoDB schemas
│   │   ├── Bookings.js
│   │   ├── Event.js
│   │   ├── OTP.js
│   │   └── User.js
│   │
│   ├── routes/                     # REST API routes
│   │   ├── auth.js
│   │   ├── booking.js
│   │   └── events.js
│   │
│   ├── utils/                      # Email utilities
│   │   └── email.js
│   │
│   ├── server.js                  # Backend entry point
│   ├── seed.js                    # Database seeding
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
│
├── Screenshots/                    # Application screenshots
│   ├── Admin Dashboard.png
│   ├── Event Detail Otp.png
│   ├── Event Details.png
│   ├── Flowchart.png
│   ├── Footer.png
│   ├── Home Page.png
│   ├── Login Page.png
│   ├── Sign Up Page.png
│   └── Upcoming Events.png
│
├── .gitignore
├── package.json
├── package-lock.json
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
- LinkedIn: [Dhawal Bhawsar](https://www.linkedin.com/in/dhawal-bhawsar-10b8b324b/)

---

⭐ If you find this project interesting, consider giving the repository a star!

**Project Category:** Full-Stack Web Development | MERN Stack | Event Management System
