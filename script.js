let processes = [];

function addProcess() {
    let id = document.getElementById("pid").value;
    let burst = document.getElementById("burst").value;
    let priority = document.getElementById("priority").value;

    if (!id || !burst || !priority) {
        alert("Please fill all fields!");
        return;
    }

    processes.push({
        id: parseInt(id),
        burst: parseInt(burst),
        priority: parseInt(priority)
    });

    displayProcesses();

    // Clear inputs
    document.getElementById("pid").value = "";
    document.getElementById("burst").value = "";
    document.getElementById("priority").value = "";
}

function displayProcesses() {
    let table = document.getElementById("processTable");
    table.innerHTML = "";

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

function runScheduler() {

    if (processes.length === 0) {
        alert("No processes added!");
        return;
    }

    let sorted = [...processes].sort((a, b) => a.priority - b.priority);

    let output = "";
    let ganttHTML = "";
    let time = 0;

    ganttHTML += `<div class="block" style="background:#333;">0</div>`;

    sorted.forEach(p => {
        let mode = "";
        let color = "";

        if (p.priority === 1) {
            mode = "⚡ High Performance";
            color = "#ff6b6b";
        } else {
            mode = "🔋 Energy Saving";
            color = "#4ecdc4";
        }

        output += `Process P${p.id} → ${mode}<br>`;

        ganttHTML += `
            <div class="block" style="width:${p.burst * 50}px; background:${color}">
                P${p.id}
                <span>${time} - ${time + p.burst}</span>
            </div>
        `;

        time += p.burst;
    });

    output += `<br><b>Total Time:</b> ${time}`;
    output += "<br>CPU enters Sleep Mode when idle 💤";

    document.getElementById("result").innerHTML = output;
    document.getElementById("ganttChart").innerHTML = ganttHTML;
}