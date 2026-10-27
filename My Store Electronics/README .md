# 🛍️ My Store Electronics

A full-stack electronics e-commerce web application built using the **MERN stack** — MongoDB, Express.js, React, and Node.js. The project brings together a product catalogue, account access, shopping cart, delivery address management, and an order-placement workflow.

## 📸 Screenshots

### Home Page
Explore the electronics catalogue and available products.

![Home Page](./Screenshots/Home%20Page.png)

### Login Page
Sign in to an existing account.

![Login Page](./Screenshots/Loggin%20Page.png)

### Sign Up Page
Create a new user account.

![Sign Up Page](./Screenshots/Sign%20Up%20Page.png)

### Shopping Cart
Review selected items and manage quantities.

![Shopping Cart](./Screenshots/Your%20Cart.png)

### Delivery Address
Enter delivery information during checkout.

![Delivery Address](./Screenshots/Delivery%20Address%20info%20Page.png)

### Address Selection
Select a saved delivery address.

![Address Selection](./Screenshots/Address%20selection%20Page.png)

## ✨ Project Features

- **Product catalogue:** Retrieve and browse electronics products.
- **Product search and category filtering:** Query the product API using search and category parameters.
- **User authentication:** Signup and login using password hashing and JWT-based authentication utilities.
- **Cart management:** Add products, update quantities, and remove items.
- **Delivery address management:** Save and retrieve delivery addresses.
- **Checkout workflow:** Move from cart review through address selection to order placement.
- **Order placement:** Submit orders through the backend API; the current flow uses Cash on Delivery.
- **Product management:** Backend endpoints and frontend screens for adding, updating, and deleting products.
- **REST API integration:** React frontend communicates with the Express backend.
- **Persistent data:** MongoDB database integration through Mongoose.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| React Router | Client-side navigation |
| Vite | Frontend development and build tooling |
| Tailwind CSS | UI styling |
| Axios | HTTP requests |
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| bcryptjs | Password hashing utility |
| JSON Web Tokens | Token-based authentication utility |
| dotenv | Environment configuration |

## 🏗️ Project Structure

```text
My-Store-Electronics/
├── Screenshots/
│   ├── Home Page.png
│   ├── Loggin Page.png
│   ├── Sign Up Page.png
│   ├── Your Cart.png
│   ├── Delivery Address info Page.png
│   └── Address selection Page.png
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── addressController.js
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── productController.js
│   ├── models/
│   ├── routes/
│   ├── data/
│   │   └── products.json
│   └── server.js
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   └── pages/
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## 📦 Sample Product Dataset

The application includes a sample electronics catalogue containing **15 products** across three categories:

| Category | Number of Products |
|---|---:|
| Laptops | 5 |
| Mobile Phones | 5 |
| Tablets | 5 |
| **Total** | **15** |

Each product contains the following fields:

- `title` — Product name
- `description` — Product description and specifications
- `price` — Sample price in INR (₹)
- `category` — Product category
- `image` — Product image URL
- `stock` — Available sample inventory quantity

The dataset can be used for development, testing product listings, category filtering, and demonstrating the shopping experience.

**Dataset location:** `backend/data/products.json`

> **Note:** These are sample product records for demonstration purposes. Prices, stock quantities, and product details should be verified before any real-world commercial use.


## ⚙️ Prerequisites

Before running the application, install:

- [Node.js and npm](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) or a [MongoDB Atlas](https://www.mongodb.com/atlas) database
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the repository

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/my-store-electronics.git
cd my-store-electronics
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure backend environment variables

Create a local `.env` file from the example.

**Windows PowerShell**
```powershell
Copy-Item .env.example .env
```

**macOS / Linux**
```bash
cp .env.example .env
```

Set the values in `backend/.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/mern-ecom
JWT_SECRET=replace-with-a-long-random-secret
PORT=5001
```

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: A long, random secret for signing tokens.
- `PORT`: Backend server port.

If using MongoDB Atlas, replace the local MongoDB URI with your Atlas connection string.

**Do not commit `.env` files, passwords, tokens, or database credentials.**

### 4. Start the backend

From the `backend` directory:

```bash
node server.js
```

The backend runs on `http://localhost:5001` with the default port. You can check `http://localhost:5001/` to verify the API is responding.

### 5. Install frontend dependencies

Open a second terminal at the project root:

```bash
cd frontend
npm install
```

Create the frontend environment file from its example.

**Windows PowerShell**
```powershell
Copy-Item .env.example .env
```

**macOS / Linux**
```bash
cp .env.example .env
```

Set the frontend API URL in `frontend/.env`:

```env
VITE_API_URL=http://localhost:5001/api
```

### 6. Start the frontend

From the `frontend` directory:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Keep the frontend and backend terminals running while using the application.

## 🔌 API Endpoints

The backend exposes REST endpoints under `/api`.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/signup` | Register a user |
| `POST` | `/api/auth/login` | Log in a user |
| `GET` | `/api/products` | Retrieve products; supports search and category query parameters |
| `POST` | `/api/products/add` | Add a product |
| `PUT` | `/api/products/update/:id` | Update a product |
| `DELETE` | `/api/products/delete/:id` | Delete a product |
| `GET` | `/api/cart/:userId` | Retrieve a user's cart |
| `POST` | `/api/cart/add` | Add an item to the cart |
| `POST` | `/api/cart/update` | Update cart quantity |
| `POST` | `/api/cart/remove` | Remove an item from the cart |
| `GET` | `/api/address/:userId` | Retrieve saved addresses |
| `POST` | `/api/address/add` | Save a delivery address |
| `POST` | `/api/order/place` | Place an order |

For request payloads and response formats, refer to the corresponding route and controller files in `backend/`.

## 📜 Available Scripts

### Frontend

Run these commands inside `frontend/`.

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run the configured linter |

### Backend

Run inside `backend/`:

```bash
node server.js
```

The backend currently does not define a `dev` or `start` script in `package.json`.

## 🔐 Security Notes

This project is intended for learning and portfolio demonstration. Before deploying it for real users:

- Enforce server-side authentication and role-based authorization on protected endpoints.
- Ensure users can access only their own carts, addresses, and orders.
- Restrict product creation, updates, and deletion to authorized administrators.
- Validate and sanitize incoming request data.
- Check product stock and prices on the server when placing orders.
- Configure CORS for trusted frontend origins in production.
- Keep secrets in environment variables and out of version control.
- Add appropriate error handling, logging, rate limiting, and automated tests.

**Important:** Hiding administrative pages in the frontend is not sufficient protection. The backend must independently verify permissions for protected operations.

## 🛣️ Potential Future Improvements

- Role-based admin access
- Product image uploads
- Enhanced product search and filtering
- Online payment gateway integration
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality
- Automated frontend and backend tests
- Deployment with a live demo

## 👨‍💻 Author

**Dhawal Bhawsar**

- **GitHub:** [Dhawal-Bhawsar](https://github.com/Dhawal-Bhawsar)
- **LinkedIn:** [Dhawal Bhawsar](https://linkedin.com/in/dhawal-bhawsar-10b8b324b)
- **Email:** [dhawalbhawsar04@gmail.com](mailto:dhawalbhawsar04@gmail.com)

## 📄 License

No license has been specified for this repository. Add a `LICENSE` file if you want to grant others permission to use, modify, or distribute the project.
