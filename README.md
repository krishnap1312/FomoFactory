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
Set up the backend:

Navigate to the backend directory:
```sh
cd backend
