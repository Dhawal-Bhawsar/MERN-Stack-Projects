# 🍽️ The Olive Table — Restaurant Website

A modern restaurant website built with the MERN stack, designed to showcase delicious food, highlight the culinary team, and provide customers with an intuitive restaurant reservation experience.

The Olive Table combines an elegant design, food-focused visuals, and thoughtfully written content to create a welcoming online presence for a restaurant.

<p align="center">
  <img src="screenshots/homepage-hero.png" alt="The Olive Table homepage hero" width="100%">
</p>

<p align="center">
  <strong>A taste of something special.</strong><br>
  Fresh ingredients, exceptional food, unforgettable moments.
</p>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

## 📖 Overview

The Olive Table is a restaurant website created to deliver a visually appealing and user-friendly dining experience online.

Visitors can explore the restaurant's story, discover popular dishes, learn about the culinary team, browse restaurant services, and access a reservation form to provide their booking details.

The project focuses on clean UI design, reusable React components, and a structured application that can be extended with additional restaurant management features.

## ✨ Features

- **Elegant Homepage:** A visually engaging landing page with restaurant branding and food imagery.
- **About Us:** Introduces the restaurant's philosophy and commitment to quality food.
- **Quality Food:** Highlights fresh ingredients and attention to food preparation.
- **Super Taste:** Showcases the restaurant's focus on flavor and carefully crafted recipes.
- **Fast Delivery:** Presents convenient food delivery as part of the restaurant experience.
- **Popular Dishes:** Features selected dishes with descriptive content.
- **Our Team:** Showcases chef profiles and their culinary roles.
- **Restaurant Services:** Highlights the services offered to customers.
- **Reservation Section:** Provides a form for entering customer details and preferred booking information.
- **Customized Footer:** Includes restaurant branding, location, opening hours, and copyright information.
- **Responsive Design:** Uses a structured layout intended to provide a consistent experience across screen sizes.

## 📸 Screenshots

### 1. Homepage

<p align="center">
  <img src="screenshots/homepage-hero.png" alt="Homepage hero section" width="100%">
</p>

<p align="center">
  <img src="screenshots/homepage-preview.png" alt="Restaurant homepage preview" width="100%">
</p>

### 2. About Us

<p align="center">
  <img src="screenshots/about-us.png" alt="About The Olive Table" width="100%">
</p>

### 3. Popular Dishes

<p align="center">
  <img src="screenshots/popular-dishes.png" alt="Popular dishes section" width="100%">
</p>

### 4. Restaurant Statistics

<p align="center">
  <img src="screenshots/restaurant-statistics.png" alt="Restaurant statistics section" width="100%">
</p>

### 5. Our Team

<p align="center">
  <img src="screenshots/our-team.png" alt="Restaurant chef profiles" width="100%">
</p>

### 6. Restaurant Services

<p align="center">
  <img src="screenshots/restaurant-services.png" alt="Restaurant services section" width="100%">
</p>

### 7. Reservation Section

<p align="center">
  <img src="screenshots/reservation-section.png" alt="Restaurant reservation form" width="100%">
</p>

### 8. Reservation and Footer

<p align="center">
  <img src="screenshots/reservation-and-footer.png" alt="Reservation section and restaurant footer" width="100%">
</p>

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building reusable UI components |
| JavaScript | Application logic and interactions |
| HTML5 | Website structure |
| CSS3 | Styling, layout, and visual presentation |
| Node.js | Backend runtime, if used in the application |
| Express.js | Backend APIs, if configured |
| MongoDB | Database storage, if configured |
| Mongoose | MongoDB object modeling, if configured |

The frontend uses React components to organize the restaurant website into sections such as About Us, Menu, Team, Services, Reservations, and Footer.

## 📂 Project Structure

```text
Olive Table – Restaurant Website/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Team.jsx
│   │   │   └── Footer.jsx
│   │   ├── restApi.json
│   │   └── ...
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
├── screenshots/
│   ├── homepage-hero.png
│   ├── homepage-preview.png
│   ├── about-us.png
│   ├── popular-dishes.png
│   ├── restaurant-statistics.png
│   ├── our-team.png
│   ├── restaurant-services.png
│   ├── reservation-section.png
│   └── reservation-and-footer.png
│
├── .gitignore
└── README.md
```

*The tree illustrates the intended documentation and screenshot layout. Keep your actual project files and folder names unchanged.*

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

MongoDB is also required if your application uses a database-backed reservation workflow.

### 1. Clone the Repository

```bash
git clone https://github.com/Dhawal-Bhawsar/MERN-Stack-Projects.git
```

Navigate to the project directory:

```bash
cd "MERN-Stack-Projects/Olive Table – Restaurant Website"
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Start the Frontend

Run the development command configured in your `frontend/package.json`. For a typical Vite application:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

### 4. Start the Backend (If Applicable)

If your project includes a separate backend, open another terminal:

```bash
cd "MERN-Stack-Projects/Olive Table – Restaurant Website/backend"
npm install
```

Start the server using the script defined in `backend/package.json`, for example:

```bash
npm run dev
```

Configure the required environment variables before starting a database-connected backend.

## 🔐 Environment Configuration

If your application uses environment variables, create a local environment file containing the variables required by your code.

For example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Use the exact variable names expected by your application. Do not commit actual credentials, database connection strings, or API keys to GitHub.

## 🔮 Future Improvements

- User registration and authentication.
- Real-time reservation availability.
- Booking confirmation emails.
- Reservation history and cancellation.
- An admin dashboard for managing bookings.
- Improved form validation and error handling.
- Deployment with a live website URL.

## 👨‍💻 Author

**Dhawal Bhawsar**

- GitHub: [@Dhawal-Bhawsar](https://github.com/Dhawal-Bhawsar)
- Project Repository: [MERN-Stack-Projects](https://github.com/Dhawal-Bhawsar/MERN-Stack-Projects/tree/main/Olive%20Table%20%E2%80%93%20Restaurant%20Website)

## 📄 License

This project is intended for learning and portfolio demonstration. Add a `LICENSE` file if you wish to distribute it under a specific open-source license.

---

<p align="center">
  <strong>The Olive Table</strong><br>
  Fresh ingredients, exceptional food, unforgettable moments. 🍃
</p>
