const button = document.getElementById("searchbtn");
const city = document.getElementById("cityinput");

const cityName = document.getElementById("cityname");
const temp = document.getElementById("temperature");
const localTime = document.getElementById("localtime");

async function getData(cityName) {
    const promise = await fetch(
   (`http://api.weatherapi.com/v1/current.json?key=16c0bd25db5a4c009d8125432261806&q=${cityName}&aqi=yes`)
)
return await promise.json();
}


button.addEventListener("click", async () => {
  const value = city.value;
  const result = await getData(value)
  cityName.innerText  = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  temp.innerText = ` ${result.current.temp_c}°C`;
  localTime.innerText = ` ${result.location.localtime}`;
})

