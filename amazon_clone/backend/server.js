const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});


const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const newUser = new User({
        username,
        password
    });

    newUser.save()
        .then(() => res.send('User saved'))
        .catch(err => res.status(400).send('Error saving user: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
