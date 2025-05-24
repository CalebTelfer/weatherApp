const apiKey = "BPDY2YTVTJZ39UV4D93KPV7BG"; // yes its public to client thats ok for this project

let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY"

async function getWeather(city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`, {mode: 'cors'});
    const data = await response.json();

    
    const condition  = data.currentConditions.conditions;
    const temp = data.currentConditions.temp;
    console.log("It is "+condition+" in "+city+ " and the temperature is " +temp);
}