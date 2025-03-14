document.getElementById("carbonForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const gas = parseFloat(document.getElementById("gas").value) || 0;
    const miles = parseFloat(document.getElementById("miles").value) || 0;
    const flights = parseFloat(document.getElementById("flights").value) || 0;

    // Simplified calculation (adjust these factors as needed)
    const electricityFactor = 0.5; // kg CO2 per kWh
    const gasFactor = 2.3; // kg CO2 per liter
    const milesFactor = 0.4; // kg CO2 per mile
    const flightFactor = 500; // kg CO2 per flight (average, adjust for distance)

    const carbonFootprint = (electricity * electricityFactor) + (gas * gasFactor) + (miles * milesFactor) + (flights * flightFactor);

    document.getElementById("result").innerText = `Your Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO₂/day`;

    // Add animation to the result
    const resultElement = document.getElementById("result");
    resultElement.classList.add("result-animation");
    setTimeout(() => {
        resultElement.classList.remove("result-animation");
    }, 1000);
});