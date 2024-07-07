const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const commentsFilePath = path.join(__dirname, 'comments.json');

// Get comments
app.get('/comments', (req, res) => {
    fs.readFile(commentsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading comments file');
        }
        const comments = JSON.parse(data);
        res.json(comments);
    });
});

// Post a new comment
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    if (!comment) {
        return res.status(400).send('Comment is required');
    }

    fs.readFile(commentsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading comments file');
        }
        const comments = JSON.parse(data);
        comments.push(comment+"---by student001");

        fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing comments file');
            }
            res.status(201).send('Comment added');
        });
    });
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

