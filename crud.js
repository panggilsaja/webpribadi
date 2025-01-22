// File: crud.js

// In-memory data structure for simplicity (could be loaded from or saved to a file in a real-world app)
let schedules = [
    { id: 1, namaWisata: "Wisata 1", tanggal: "2023-10-01", status: "Dipesan" },
    { id: 2, namaWisata: "Wisata 2", tanggal: "2023-10-05", status: "Dipesan" },
    { id: 3, namaWisata: "Wisata 3", tanggal: "2023-10-10", status: "Dipesan" },
];

// Utility function to render schedule data to the table
function renderSchedules() {
    const tableBody = document.querySelector("#schedule-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    schedules.forEach((schedule) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${schedule.namaWisata}</td>
            <td>${schedule.tanggal}</td>
            <td>${schedule.status}</td>
            <td>
                <button onclick="editSchedule(${schedule.id})">Edit</button>
                <button onclick="deleteSchedule(${schedule.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Create a new schedule
function createSchedule(namaWisata, tanggal, status) {
    const newSchedule = {
        id: schedules.length ? schedules[schedules.length - 1].id + 1 : 1,
        namaWisata,
        tanggal,
        status,
    };
    schedules.push(newSchedule);
    renderSchedules();
}

// Edit an existing schedule
function editSchedule(id) {
    const schedule = schedules.find((s) => s.id === id);
    if (!schedule) return;

    const newName = prompt("Enter new name for the destination:", schedule.namaWisata);
    const newDate = prompt("Enter new date (YYYY-MM-DD):", schedule.tanggal);
    const newStatus = prompt("Enter new status (e.g., Dipesan):", schedule.status);

    if (newName) schedule.namaWisata = newName;
    if (newDate) schedule.tanggal = newDate;
    if (newStatus) schedule.status = newStatus;

    renderSchedules();
}

// Delete a schedule
function deleteSchedule(id) {
    schedules = schedules.filter((s) => s.id !== id);
    renderSchedules();
}

// Initial rendering
document.addEventListener("DOMContentLoaded", () => {
    renderSchedules();

    document.querySelector("#add-schedule-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const namaWisata = document.querySelector("#namaWisata").value;
        const tanggal = document.querySelector("#tanggalWisata").value;
        const status = document.querySelector("#statusWisata").value;

        createSchedule(namaWisata, tanggal, status);
        e.target.reset();
    });
});
