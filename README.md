# Campus Vendor Dashboard

A modern, feature-rich vendor dashboard for campus e-commerce management. Built with React and integrated with a RESTful API.

## Features

### ✅ Dashboard
- Real-time statistics (Total Revenue, Items Sold, Rating)
- Top performing products display
- Live updates section
- Optimize storefront CTA

### ✅ Reviews & Ratings
- Filter reviews by: All, High Rated, Low Rated, With Images
- Star rating display
- Helpful button for each review
- Terms and conditions section

### ✅ Vendor Portal
- Orders management table
- Total orders and items statistics
- My Collection section with product cards
- ROO NEW PRODUCT form with:
  - Product name input
  - Image upload area
  - Price unit field
  - Description textarea
  - Public product toggle (Yes/No)
- Inventory report download
- Portal features (Order Status, Payment Options, Shipping, Support)

### ✅ Product Management
- Complete CRUD operations
- Product table with status badges
- Add/Edit/Delete products
- Modal form for product creation/editing

### ✅ Authentication
- JWT token-based authentication
- Login/Logout functionality
- Token refresh handling
- Protected routes

## Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 with modern flexbox/grid
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Authentication:** JWT Bearer Token

## API Integration

This dashboard connects to the CampusConnect Mini-Ecommerce API:

- **Base URL:** `https://campus-ecommerce-api.onrender.com/api/v1`
- **Endpoints used:**
  - `/products/` - Product CRUD operations
  - `/reviews/` - Fetch and create reviews
  - `/orders/` - Order management
  - `/accounts/auth/login/` - Authentication
  - `/accounts/auth/register/` - User registration

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
