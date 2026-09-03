# ⚡ Energy-Efficient CPU Scheduler

An interactive web-based **CPU Scheduling Simulator** that demonstrates how processes can be scheduled based on **priority and burst time** while identifying different CPU operating modes for energy efficiency.

## 📌 Project Overview

The **Energy-Efficient CPU Scheduler** is an Operating Systems project developed using **HTML, CSS, JavaScript, Node.js, and Express.js**.

The application allows users to:

* Add processes with Process ID, Burst Time, and Priority.
* Schedule processes based on priority.
* Use burst time as a secondary scheduling criterion.
* Visualize execution using a dynamic Gantt Chart.
* Identify **High Performance** and **Energy Saving** modes.
* Calculate process completion time.
* Estimate energy consumption for each process.
* Simulate CPU sleep mode when the CPU becomes idle.

## 🚀 Features

### 1. Process Management

Users can enter:

* Process ID
* Burst Time
* Priority

The processes are dynamically displayed in a table.

### 2. Hybrid Scheduling Algorithm

The backend sorts processes using:

```text
Priority → Burst Time
```

A lower priority number represents a higher priority.

For example:

```text
P1 → Priority 2 → Burst 5
P2 → Priority 1 → Burst 8
P3 → Priority 2 → Burst 3
```

Execution order:

```text
P2 → P3 → P1
```

### 3. Energy-Efficient Modes

The scheduler identifies the CPU mode based on priority:

| Priority | CPU Mode           |
| -------- | ------------------ |
| 1        | ⚡ High Performance |
| Other    | 🔋 Energy Saving   |

### 4. Gantt Chart

The application generates a dynamic Gantt Chart showing:

* Process execution order
* Start time
* Completion time
* Process burst duration

Example:

```text
| P1 | P2 | P3 |
0    5    8    12
```

### 5. Energy Calculation

The backend estimates energy consumption using:

```text
Energy = Burst Time × 0.5
```

Each scheduled process receives an estimated energy value.

## 🛠️ Technologies Used

* **HTML5** – Structure of the web pages
* **CSS3** – Styling and responsive layout
* **JavaScript** – Scheduling logic and dynamic UI
* **Node.js** – Backend runtime
* **Express.js** – Server and API development

## 📂 Project Structure

```text
Energy-Efficient-CPU-Scheduler/
│
├── index.html          # Home page
├── dashboard.html      # Scheduler dashboard
├── style.css           # Dashboard styling
├── script.js           # Frontend scheduling and UI logic
├── server.js           # Node.js + Express backend
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## ⚙️ How to Run the Project

### Step 1: Clone the Repository

```bash
git clone <your-github-repository-url>
```

### Step 2: Navigate to the Project Folder

```bash
cd Energy-Efficient-CPU-Scheduler
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Server

```bash
node server.js
```

If you are using **nodemon**:

```bash
npx nodemon server.js
```

### Step 5: Open the Application

Open your browser and visit:

```text
http://localhost:5000
```

The home page will appear. Click **Go to Dashboard** to access the scheduler.

## 🔄 Application Workflow

```text
User
  ↓
Enter Process Details
  ↓
Add Process
  ↓
Process List
  ↓
Run Scheduler
  ↓
Sort by Priority + Burst Time
  ↓
Determine CPU Mode
  ↓
Calculate Completion Time
  ↓
Estimate Energy Consumption
  ↓
Generate Gantt Chart
```

## 🧮 Scheduling Logic

The backend uses the following sorting logic:

```javascript
processes.sort((a, b) => {
    return (a.priority - b.priority) || (a.burst - b.burst);
});
```

This means:

1. Processes with higher priority are executed first.
2. If two processes have the same priority, the process with the smaller burst time is executed first.

## 📊 Example

Suppose the following processes are entered:

| Process | Burst Time | Priority |
| ------- | ---------- | -------- |
| P1      | 5          | 2        |
| P2      | 3          | 1        |
| P3      | 4          | 2        |

The scheduler produces:

```text
P2 → P3 → P1
```

Completion times:

```text
P2 = 3
P3 = 7
P1 = 12
```

## 🔌 API

The project provides a scheduling API:

```http
POST /schedule
```

Example request:

```json
[
    {
        "id": 1,
        "burst": 5,
        "priority": 2
    },
    {
        "id": 2,
        "burst": 3,
        "priority": 1
    }
]
```

The API returns scheduling information including:

```json
{
    "id": 2,
    "burst": 3,
    "priority": 1,
    "completionTime": 3,
    "energy": 1.5
}
```

## 🎯 Objectives

* Understand CPU scheduling concepts.
* Implement priority-based scheduling.
* Demonstrate the effect of burst time on scheduling.
* Visualize process execution using a Gantt Chart.
* Introduce the concept of energy-aware CPU scheduling.
* Practice frontend and backend integration.

## 🔮 Future Improvements

* Add **FCFS, SJF, Round Robin, and Priority Scheduling** options.
* Add process arrival time.
* Calculate **waiting time and turnaround time**.
* Calculate average waiting and turnaround time.
* Add CPU idle-time visualization.
* Add actual energy-saving calculations based on CPU utilization.
* Add charts for comparing different scheduling algorithms.
* Store scheduling history using MongoDB.
* Add user authentication.

## 👨‍💻 Author

**Ankit Gupta**

### ⭐ Project Highlights

This project demonstrates practical knowledge of:

```text
Operating Systems
CPU Scheduling
Priority Scheduling
Algorithms
JavaScript
Node.js
Express.js
REST API
Frontend Development
Data Visualization
Energy-Efficient Computing
```

## 📄 License

This project is created for **educational and academic purposes**.
