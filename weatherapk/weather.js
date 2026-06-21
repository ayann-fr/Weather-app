const button = document.getElementById("searchbtn");
const city = document.getElementById("cityinput");
const Tepo = document.getElementById('clickButton');
const cityName = document.getElementById("cityname");
const temp = document.getElementById("temperature");
const localTime = document.getElementById("localtime");

async function getData(lat, long) {
    const promise = await fetch(
   (`http://api.weatherapi.com/v1/current.json?key=16c0bd25db5a4c009d8125432261806&q=${lat},${long}&aqi=yes`)
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
async function getlocation(position){
const result =    await getData(position.coords.latitude, position.coords.longitude)
console.log(result)
}
function failToGetLocation (){
    console.log("user not allowig to access location")
}

