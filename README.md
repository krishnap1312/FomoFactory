# Stock-Crypto Tracker

This is a mini-website that collects and displays real-time price data for stocks and cryptocurrencies. The project is built using Next.js, TypeScript, and Redux, with data being stored in a MongoDB database.

## Features
- Polls real-time data every few seconds for 5 stocks or cryptocurrencies from the CoinGecko API.
- Stores the collected data in a MongoDB database.
- Fetches the most recent 20 real-time data entries from the MongoDB database for a particular stock or cryptocurrency and displays them in a dynamic table.
- The table updates its values in real-time according to new data.
- Includes a button to a modal/popup that allows you to change the stock or cryptocurrency being tracked.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/yourusername/stock-crypto-tracker.git
   cd stock-crypto-tracker
   ```

2. **Set up the backend:**
   a. *Navigate to the backend directory*  
   ```sh
   cd backend
   ```
   b. *Install the backend dependencies*  
   ```sh
   npm install express mongoose axios dotenv
   ```
   c. *Create a .env file in the backend directory and add your MongoDB URI*  
   ```env
   MONGO_URI=your_mongo_uri
   ```
   d. *Start the backend server*  
   ```sh
   node index.js
   ```

3. **Set up the frontend:**
   a. *Navigate to the frontend directory*  
   ```sh
   cd ../frontend
   ```
   b. *Install the frontend dependencies*  
   ```sh
   npm install next react react-dom axios @reduxjs/toolkit react-redux typescript @types/react @types/node
   ```
   c. *Start the development server*  
   ```sh
   npm run dev
   ```

## Running the Application
- Ensure that your MongoDB server is running.
- Start the backend server as described in the installation steps.
- Start the frontend development server as described in the installation steps.
- Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure
- **backend/**: Contains the backend code for polling data and storing it in MongoDB.
  - `index.js`: Main server file that sets up the Express server and polling mechanism.
  - `models/Price.js`: Mongoose model for storing price data.
- **frontend/**: Contains the frontend code for displaying data and interacting with the backend.
  - **app/**: Contains the main Next.js application files.
  - **components/**: Contains React components used in the application.
    - `PriceTable.tsx`: Component for displaying the price data in a table.
    - `SymbolModal.tsx`: Component for changing the stock or cryptocurrency being tracked.
  - **store/**: Contains Redux setup for state management.
    - `actions.ts`: Redux actions.
    - `dataSlice.ts`: Redux slice for managing data state.
    - `store.ts`: Redux store configuration.
  - **public/**: Contains static assets.
  - **styles/**: Contains CSS files for styling.
  - **pages/**: Contains Next.js pages.
    - `index.tsx`: Main page for displaying the table and modal.

## Technologies Used
- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: JavaScript with type definitions.
- **Redux**: State management library.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling tool.
- **Express**: Web framework for Node.js.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **CoinGecko API**: API for getting cryptocurrency data.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
 
