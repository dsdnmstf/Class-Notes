//dom accessing
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
//set to browser localstorage
localStorage.setItem(
  "apikey",
  EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
);
form.addEventListener("submit", (e) => {
  //preventing page submitting
  e.preventDefault();
  getWeatherDataFromApi();
});
const getWeatherDataFromApi = async () => {
  let apikey = DecryptStringAES(localStorage.getItem("apikey"));
  // console.log("encrypted", localStorage.getItem("apikey"));
  // console.log("decrypted", apikey);
  let cityName = input.value;
  let weatherType = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${weatherType}`;
  try {
    //response ==> json
    const response = await axios.get(url);
    //object destructuring
    const { main, name, sys, weather } = response.data;
    console.log(response.data);
    //city card control
    let cityListItems = list.querySelectorAll(".city");
    // let cityListItems2 = document.getElementsByClassName("city");
    // [...cityListItems2].forEach(element => {
    // });
    let cityListItemsArray = Array.from(cityListItems);
    if (cityListItemsArray.length > 0) {
      let filteredArray = cityListItemsArray.filter(
        (card) => card.querySelector(".city-name span").innerText == name
      );
      if (filteredArray.length > 0) {
        msg.innerText = `You already know the weather for ${name}, Please search for another city :wink:`;
        form.reset();
        input.focus();
        return;
      }
    }
    //creating card element
    const createdCityCardLi = document.createElement("li");
    createdCityCardLi.classList.add("city");
    let iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    createdCityCardLi.innerHTML = `
            <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${iconUrl}">
                <figcaption>${weather[0].description}</figcaption>
            </figure>`;
    //APPEND VS. PREPEND
    list.prepend(createdCityCardLi);
    form.reset();
    input.focus();
  } catch (error) {
    postErrorLog("weather", "getWeatherDataFromApi", error);
    msg.innerText = error;
  }
};
