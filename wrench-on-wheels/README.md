# Wrench on Wheels - On-Demand Car Servicing Platform

## Overview
Wrench on Wheels is a full-stack, on-demand car servicing platform that connects car owners with verified mechanics. The platform allows customers to register their vehicles, choose from various service packages, and book appointments at their preferred time and location. Mechanics can manage their jobs and update their status in real-time.

## Features
### Customer Portal
- Secure authentication (email/password, Google OAuth)
- Vehicle management (add multiple cars)
- Service selection with tiered packages
- Instant quotes based on selected services
- Scheduling appointments
- Secure payment processing
- Booking dashboard for tracking services
- Real-time notifications
- Reviews and ratings for mechanics

### Mechanic Portal
- Profile creation and verification
- Job dashboard for available jobs
- Job management (accept/reject jobs)
- Schedule management
- Real-time job status updates
- Earnings and payouts tracking

### Admin Dashboard
- User management for customers and mechanics
- Mechanic verification interface
- Service management (create/edit/delete packages)
- Booking management
- Manual dispatch of mechanics
- Payment and payout monitoring

## Tech Stack
- **Frontend:** React.js, TypeScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB or PostgreSQL
- **Payment Gateway:** Stripe
- **Maps & Geolocation:** Google Maps API or Mapbox

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/wrench-on-wheels.git
   ```
2. Navigate to the client and server directories and install dependencies:
   ```
   cd wrench-on-wheels/client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables for the server (e.g., database connection, Stripe keys).
4. Start the server and client:
   ```
   cd server
   npm start
   cd ../client
   npm start
   ```

## Usage
- Customers can register, manage their vehicles, and book services.
- Mechanics can sign up, manage jobs, and update their status.
- Admins can manage users, services, and bookings.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.