import express from 'express';

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home
app.get('/', (req, res) => {
    res.render('home');
});

// Show Contact
app.get('/show-contact', (req, res) => {
    res.render('show-contact');
});

// Add Contact (GET)
app.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

// Add Contact (POST)
app.post('/add-contact', (req, res) => {
    res.send('Contact Added Successfully');
});

// Update Contact (GET)
app.get('/update-contact', (req, res) => {
    res.render('update-contact');
});

// Update Contact (POST)
app.post('/update-contact', (req, res) => {
    res.send('Contact Updated Successfully');
});

// Delete Contact
app.get('/delete-contact', (req, res) => {
    res.send('All Contacts Deleted');
});

// Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
