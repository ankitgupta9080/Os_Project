import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// API: Energy Efficient Scheduling
app.post('/schedule', (req, res) => {
    let processes = req.body;

    // Hybrid Algorithm (Priority + Burst)
    processes.sort((a, b) => {
        return (a.priority - b.priority) || (a.burst - b.burst);
    });

    let time = 0;

    let result = processes.map(p => {
        time += Number(p.burst);

        return {
            id: p.id,
            burst: p.burst,
            priority: p.priority,
            completionTime: time,
            energy: p.burst * 0.5
        };
    });

    res.json(result);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});