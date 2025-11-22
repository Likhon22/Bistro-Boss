# ��️ Bistro Boss - Client

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=flat&logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat&logo=tailwindcss)
![Stripe](https://img.shields.io/badge/Stripe-Payment-008CDD?style=flat&logo=stripe)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=flat&logo=react-query)

The frontend application for the **Bistro Boss Restaurant Management System**. This modern, responsive single-page application (SPA) provides an intuitive interface for customers to order food and for administrators to manage the restaurant's operations.

## ✨ Features

### 👤 Customer Features
- **Interactive Menu**: Browse food items categorized by type (Salad, Pizza, Soup, Dessert, Drinks).
- **User Authentication**: Secure login and registration using Email/Password and Google Sign-In (powered by **Firebase Authentication**).
- **Shopping Cart**: Real-time cart management (add, remove, update quantities).
- **Secure Checkout**: Integrated **Stripe** payment gateway for secure credit card transactions.
- **Payment History**: View past orders and payment status.
- **Reviews & Ratings**: Leave feedback on menu items.

### 🛡️ Admin Features
- **Admin Dashboard**: Visual analytics of revenue, customers, products, and orders using **Recharts**.
- **Menu Management**:
  - **Add Items**: Upload new dishes with images (hosted on ImageBB).
  - **Update/Delete**: Edit item details or remove them from the menu.
- **User Management**: View all registered users, promote users to Admin, or delete accounts.
- **Order Management**: Track order status and payments.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (via Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/) components.
- **State Management & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest) for server state; React Context API for local auth state.
- **Authentication**: [Firebase Auth](https://firebase.google.com/)
- **Payment**: [Stripe Elements](https://stripe.com/docs/stripe-js/react)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **HTTP Client**: [Axios](https://axios-http.com/) (with interceptors for JWT).
- **Notifications**: [SweetAlert2](https://sweetalert2.github.io/) and [React Hot Toast](https://react-hot-toast.com/).
- **Charts**: [Recharts](https://recharts.org/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1.  **Navigate to the client directory:**
    ```bash
    cd Bistro-Boss
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root of `Bistro-Boss` and add the following:

    ```env
    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_firebase_auth_domain
    VITE_projectId=your_firebase_project_id
    VITE_storageBucket=your_firebase_storage_bucket
    VITE_messagingSenderId=your_firebase_messaging_sender_id
    VITE_appId=your_firebase_app_id
    VITE_Payment_Gateway_PK=your_stripe_publishable_key
    VITE_IMGBB_KEY=your_imgbb_api_key
    VITE_API_URL=http://localhost:5000
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173`.

## 📂 Project Structure

```
src/
├── assets/             # Static assets
├── Components/         # Reusable UI components
├── hooks/              # Custom hooks (useAuth, useCart, useAxiosSecure)
├── Layout/             # Main and Dashboard layouts
├── Pages/              # Page components (Home, Menu, Dashboard)
├── Provider/           # Context Providers
├── Router/             # Route definitions
└── Utils/              # Helper functions
```
