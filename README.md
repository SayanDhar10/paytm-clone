# Digital Payment Wallet - MERN Stack
Welcome to the Digital Payment Wallet GitHub repository! This project is a comprehensive digital wallet application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their digital transactions, payments, and account balances seamlessly.

# Features
User Authentication: Secure login and registration system with JWT-based authentication.

Wallet Management: View wallet balance, add money, and track transaction history.

Payment Gateway Integration: Simplified payment process with third-party payment gateway support.

Transaction Records: Keep track of all completed transactions with timestamps.

Responsive Design: Fully responsive UI for optimal use across devices.
# Technologies Used
Frontend:
React.js: Dynamic, responsive, and user-friendly interface.

Bootstrap/Material-UI: Styled components for an intuitive design.

Backend:
Node.js: Backend logic and API development.

Express.js: RESTful API framework for routing and middleware handling.

MongoDB: Database for storing user, wallet, and transaction data.

Mongoose: MongoDB object modeling tool.

# Installation and Setup
Clone the repository: bash git clone https://github.com/sayankumardhar/paytm-clone.git cd Digital_Payment_Wallet_MERN

Install dependencies:

For the server: bash cd backend npm install

For the client: bash cd ../frontend npm install

Environment Setup:

Create a .env file in the backend folder and configure the following: env MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret
Run the application:

Start the server: bash cd backend npm start

Start the client: bash cd ../frontend npm start
