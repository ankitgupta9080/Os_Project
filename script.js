//This creates an empty array named processes.
let processes = [];
//This function adds a new process into the array.
function addProcess() {
    //It takes values from input fields:
    let id = document.getElementById("pid").value;
    let burst = document.getElementById("burst").value;
    let priority = document.getElementById("priority").value;
    //Validation check
    if (!id || !burst || !priority) {
        alert("Please fill all fields!");
        return;
    }
    //Adds a new object into array.
    //Converts string input into integer using parseInt.
    processes.push({
        id: parseInt(id),
        burst: parseInt(burst),
        priority: parseInt(priority)
    });
    //Calls function to refresh table display.
    displayProcesses();

    // Clear inputs
    document.getElementById("pid").value = "";
    document.getElementById("burst").value = "";
    document.getElementById("priority").value = "";
}
//Displays all processes in HTML table.
function displayProcesses() {
    let table = document.getElementById("processTable");
    table.innerHTML = "";
    //Loops through each process.
    processes.forEach(p => {
        table.innerHTML += `
            <tr>
                <td>P${p.id}</td>
                <td>${p.burst}</td>
                <td>${p.priority}</td>
            </tr>
        `;
    });
}
//Executes scheduling logic.
function runScheduler() {
    //Check empty list
    if (processes.length === 0) {
        alert("No processes added!");
        return;
    }
    //Creates a copy and sorts processes by priority (low number = high priority).
    let sorted = [...processes].sort((a, b) => a.priority - b.priority);
    //output = result text
    //ganttHTML = chart banane ke liye
    //time = CPU time track karne ke liye
    let output = "";
    let ganttHTML = "";
    let time = 0;

    ganttHTML += `<div class="block" style="background:#333;">0</div>`;
    //Runs each process one by one.
    sorted.forEach(p => {
        let mode = "";
        let color = "";
        //Priority 1 → High performance mode
        //Others → Energy saving mode
        if (p.priority === 1) {
            mode = "⚡ High Performance";
            color = "#ff6b6b";
        } else {
            mode = "🔋 Energy Saving";
            color = "#4ecdc4";
        }
        //Adds process info to result.
        output += `Process P${p.id} → ${mode}<br>`;
        //Gantt chart block
        ganttHTML += `
            <div class="block" style="width:${p.burst * 50}px; background:${color}">
                P${p.id}
                <span>${time} - ${time + p.burst}</span>
            </div>
        `;
        //CPU time update karta hai.
        time += p.burst;
    });
    //Shows result and Gantt chart on webpage.
    output += `<br><b>Total Time:</b> ${time}`;
    output += "<br>CPU enters Sleep Mode when idle 💤";

    document.getElementById("result").innerHTML = output;
    document.getElementById("ganttChart").innerHTML = ganttHTML;
}