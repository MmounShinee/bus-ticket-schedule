const buses = [
    {
        bus: "UTA-101",
        from: "Houston",
        destination: "Dallas",
        departure: "7:00 AM",
        arrival: "11:00 AM",
        price: "$45"
    },
    {
        bus: "UTA-102",
        from: "Houston",
        destination: "Austin",
        departure: "8:30 AM",
        arrival: "11:30 AM",
        price: "$35"
    },
    {
        bus: "UTA-103",
        from: "Houston",
        destination: "San Antonio",
        departure: "10:00 AM",
        arrival: "1:30 PM",
        price: "$40"
    },
    {
        bus: "UTA-104",
        from: "Houston",
        destination: "Dallas",
        departure: "1:00 PM",
        arrival: "5:00 PM",
        price: "$45"
    },
    {
        bus: "UTA-105",
        from: "Houston",
        destination: "New Orleans",
        departure: "3:00 PM",
        arrival: "9:00 PM",
        price: "$60"
    }
];

function displayBuses(busList) {
    const schedule = document.getElementById("schedule");

    schedule.innerHTML = "";

    busList.forEach(bus => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${bus.bus}</td>
            <td>${bus.from}</td>
            <td>${bus.destination}</td>
            <td>${bus.departure}</td>
            <td>${bus.arrival}</td>
            <td>${bus.price}</td>
        `;

        schedule.appendChild(row);
    });
}

function searchBus() {
    const destination =
        document.getElementById("destination").value;

    if (destination === "all") {
        displayBuses(buses);
    } else {
        const results = buses.filter(
            bus => bus.destination === destination
        );

        displayBuses(results);
    }
}

displayBuses(buses);

