const express = require('express');
var cors = require('cors');
// connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Available Routes
const barChartData = [
    { serialNo: "1", interactionTitle: "Sales", percentage: "12" },
    { serialNo: "2", interactionTitle: "Marketing", percentage: "19" },
    { serialNo: "3", interactionTitle: "Human Resource", percentage: "3" },
    { serialNo: "4", interactionTitle: "Strategy", percentage: "5" },
    { serialNo: "5", interactionTitle: "Operations", percentage: "2" },
    { serialNo: "6", interactionTitle: "General Interview", percentage: "3" },
]

// Define a route to get the bar chart data
app.get('/api/barchart', (req, res) => {
    res.json(barChartData);
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
})

