const express = require('express');
const app = express();
const port = 4000;
const bookRoutes = require('./routes'); 

app.use(express.json());
app.use('/books', bookRoutes); 


app.get('/', (req, res) => {
    res.send('Welcome to the Book Management API!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
