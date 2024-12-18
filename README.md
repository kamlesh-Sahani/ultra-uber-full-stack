# Ultra Uber - A Modern Cab Booking App (MERN Stack)

**UltraUber** is a fully-featured cab booking application built using the MERN stack. This project showcases a modern web application with a rich user interface, real-time backend features, and seamless integration of animations, responsiveness, and advanced cab booking functionality.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
---

## Features

- **Cab Booking System**: Users can select ride types, view pricing, and confirm bookings.
- **Authentication**: Secure user authentication using JWT.
- **Interactive UI**: Smooth animations powered by Framer Motion.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Real-Time Data**: Dynamic data handling via RESTful APIs.
- **Payment Integration**: (Optional) Stripe or Razorpay for secure payments.
- **How It Works Section**: Interactive guides to app usage.

---

## Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling.
- **Framer Motion**: For animations.
- **React Router**: For routing.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.

---

## Architecture Overview

1. **Frontend**: Built with React.js, handles user interactions and communicates with the backend using RESTful APIs.
2. **Backend**: A Node.js + Express.js server provides APIs for user authentication, ride data, and booking management.
3. **Database**: MongoDB stores user, booking, and pricing data.
4. **Deployment**: The app can be deployed using platforms like Heroku, Vercel, or AWS.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud, e.g., MongoDB Atlas)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/kamlesh-Sahani/ultra-uber-full-stack
cd ultra-uber
```

### 2. Install Dependencies

Install frontend and backend dependencies separately:

#### Install Backend Dependencies

```bash
cd backend
npm install
```

#### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Set up environment variables for both backend and frontend. See [Environment Variables](#environment-variables).

---

## Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
```

(Optional) If you have third-party APIs or services like Stripe, include those variables as well.

---

## Usage

### Run the Backend Server

```bash
cd backend
npm start
```

The backend will start on `http://localhost:4000`.

### Run the Frontend Development Server

```bash
cd ../frontend
npm start
```

The frontend will start on `http://localhost:5173`.
---

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

