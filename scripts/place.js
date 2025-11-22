const copyrightYear = document.querySelector('#copyright-year');
const lastModified = document.querySelector('#last-modified');
const windChill = document.querySelector("#windChill");


const todayDate = new Date();

copyrightYear.innerHTML = todayDate.getFullYear();
lastModified.innerHTML = todayDate.toLocaleString();

const temperature = 25;   
const windSpeed = 10;  

function calculateWindChill(temperature, windSpeed) {
    let chill = 13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16);
    
    return chill.toFixed(1);
}

let windChillValue = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChillValue = calculateWindChill(temperature, windSpeed);
}

windChill.textContent = windChillValue;