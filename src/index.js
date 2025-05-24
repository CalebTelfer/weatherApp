const apiKey = "BPDY2YTVTJZ39UV4D93KPV7BG"; // yes its public to client thats ok for this project

let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY"

async function getWeather(city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`, {mode: 'cors'});
    const jsonData = await response.json();
    let data = getDataObject(jsonData);

    console.log("It is "+data.condition+" in "+city+ " and the temperature is " +data.temperature);
}

function getDataObject(jsonData) {
    return {
        condition: jsonData.currentConditions.conditions,
        temperature: jsonData.currentConditions.temp
    }
}
