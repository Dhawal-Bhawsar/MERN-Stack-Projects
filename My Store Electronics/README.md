# MERN Ecommerce

A full-stack ecommerce application built with MongoDB, Express, React, and Node.js. The application includes user authentication, product browsing, cart management, address management, checkout, order placement, and product administration screens.

## Features

- User signup and login with bcrypt password hashing and JWT authentication
- Product listing and product details
- Add products to the cart
- Increase, decrease, update, and remove cart items
- Saved checkout addresses
- Order placement and order-success screen
- Product administration screens for adding, editing, and deleting products
- Responsive React UI styled with Tailwind CSS

## Project structure

```text
MERN-Ecommerce/
├── backend/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # Request handlers
│   ├── models/          # Mongoose models
│   ├── routes/          # Express API routes
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/           # Static public assets
│   ├── src/              # React application
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB running locally or a MongoDB Atlas connection string

## Installation

Clone the repository and install dependencies separately for the backend and frontend:

```bash
git clone <your-github-repository-url>
cd MERN-Ecommerce

cd backend
npm install

cd ../frontend
npm install
```

## Environment variables

### Backend

Create `backend/.env` from the example file:

```bash
cd backend
copy .env.example .env
```

On macOS/Linux, use `cp .env.example .env` instead.

Set the following values:

```env
MONGO_URI=mongodb://127.0.0.1:27017/mern-ecom
JWT_SECRET=replace-with-a-long-random-secret
PORT=5001
```

Never commit `backend/.env` or any real credentials to GitHub.

### Frontend

Create `frontend/.env` from the example file:

```bash
cd frontend
copy .env.example .env
```

Set the API URL if the backend is not running on the default port:

```env
VITE_API_URL=http://localhost:5001/api
```

## Running locally

Start the backend in one terminal:

```bash
cd backend
node server.js
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

### Frontend

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run Oxlint
```

### Backend

```bash
node server.js   # Start the Express API
```

## API overview

The backend runs under `/api`:

| Area | Routes |
|---|---|
| Authentication | `POST /api/auth/signup`, `POST /api/auth/login` |
| Products | `GET /api/products`, `POST /api/products/add`, `PUT /api/products/update/:id`, `DELETE /api/products/delete/:id` |
| Cart | `GET /api/cart/:userId`, `POST /api/cart/add`, `POST /api/cart/update`, `POST /api/cart/remove` |
| Address | `GET /api/address/:userId`, `POST /api/address/add` |
| Orders | `POST /api/order/place` |

## GitHub upload checklist

Upload the application source and configuration files, including:

- `backend/config/`
- `backend/controllers/`
- `backend/models/`
- `backend/routes/`
- `backend/package.json`
- `backend/package-lock.json`
- `backend/server.js`
- `backend/.env.example`
- `frontend/public/`
- `frontend/src/`
- `frontend/index.html`
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/vite.config.js`
- `frontend/.gitignore`
- `frontend/.env.example`
- `.gitignore`
- `README.md`

Do **not** upload:

- `backend/node_modules/`
- `frontend/node_modules/`
- `frontend/dist/`
- `backend/.env`
- `frontend/.env`
- passwords, JWT secrets, MongoDB credentials, or API keys

`package-lock.json` files should be committed so other developers install the same dependency versions. Dependencies and generated build output should be recreated locally or by the deployment platform.

## License

This project does not currently declare a license. Add a `LICENSE` file before accepting external contributions or distributing it publicly.
