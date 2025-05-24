import "./styles.css"

const apiKey = "BPDY2YTVTJZ39UV4D93KPV7BG"; // yes its public to client thats ok for this project

let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY"

async function getWeather(city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`, {mode: 'cors'});
    
    if(!response.ok) {
        promiseFail();
        return;
    }
    
    const jsonData = await response.json();
    console.log(jsonData);
    let data = getDataObject(jsonData);

    showWeather(data);
}

function getDataObject(jsonData) {
    return {
        location: jsonData.address,
        condition: jsonData.currentConditions.conditions,
        temperature: jsonData.currentConditions.temp
    }
}


function showWeather(data) {
    const city = document.querySelector(".city");
    const condition = document.querySelector(".condition");
    const temperature = document.querySelector(".temperature");

    city.textContent = data.location;

    condition.textContent = data.condition;

    temperature.textContent = data.temperature;

}

function promiseFail() {
    const city = document.querySelector(".city");
    const condition = document.querySelector(".condition");
    const temperature = document.querySelector(".temperature");

    city.textContent = "ERROR";

    condition.textContent = "Invalid Input or API fail";

    temperature.textContent = "";
}


const form = document.querySelector("form");
const inputBox = document.querySelector("#userInput");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = inputBox.value;
    getWeather(input);
    inputBox.value = "";

})