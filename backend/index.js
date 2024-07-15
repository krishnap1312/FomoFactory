const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Price = require('./models/Price');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Polling function
const pollData = async () => {
    // Use valid cryptocurrency IDs
    const symbols = ['bitcoin', 'ethereum', 'dogecoin', 'litecoin', 'ripple']; // Example symbols for CoinGecko
    for (const symbol of symbols) {
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
            if (response.data[symbol]) {
                const price = response.data[symbol].usd;
                const newPrice = new Price({ symbol, price });
                await newPrice.save();
                console.log(`Fetched and saved price for ${symbol}: $${price}`);
            } else {
                console.log(`No data found for symbol: ${symbol}`);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
};

// Poll every 10 seconds
setInterval(pollData, 10000);

// API endpoint to get recent prices
app.get('/api/prices', async (req, res) => {
    try {
        const prices = await Price.find().sort({ timestamp: -1 }).limit(20);
        res.json(prices);
    } catch (error) {
        res.status(500).send('Error fetching prices');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
