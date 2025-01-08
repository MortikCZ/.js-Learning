const aqi = "100";
let result;

if (aqi < 50) {
    result = "Good";
} else if (aqi < 100) {
    result = "Moderate";
} else if (aqi < 150) {
    result = "Unhealthy (Sensitive Groups)";
} else if (aqi < 200) {
    result = "Unhealthy";
} else if (aqi < 300) {
    result = "Very Unhealthy";
} else {
    result = "Hazardous";
}

console.log("AQI is " + result)