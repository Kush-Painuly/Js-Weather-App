const updateUIHandler = (locationDetails, weatherDetails) => {
    const isDay = weatherDetails.IsDayTime;
    const weatherIcons = weatherDetails.WeatherIcon;
    const cityName = locationDetails.EnglishName;
    const weatherText = weatherDetails.WeatherText;
    const temperature = weatherDetails.Temperature.Metric.Value;

    document.querySelector('.card').classList.remove("d-none");
    document.querySelector('.time').src = `Icons/${isDay ? "day" : "night"}.svg`;
    document.querySelector('.loader').classList.add('d-none');
    document.querySelector('.icon img').src = `Icons/${weatherIcons}.svg`;

    const detailsHTML =
        `
        <h3>${cityName}</h3>
          <h3>${weatherText}</h3>
          <span>${temperature}</span>
          <span>&deg;C</span>
    `

    document.querySelector('.details').innerHTML = detailsHTML;
}



const getAPIdata = async (city) => {
    const locationDetails = await getLocation(city);
    const weatherDetails = await getWeatherConditions(locationDetails.Key);
    updateUIHandler(locationDetails, weatherDetails);
}


//to get the value from the input
const submitHandler = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    document.querySelector('.loader').classList.remove('d-none');
    getAPIdata(city);
    localStorage.setItem('city', city);
    e.target.reset();
}

window.onload = () => {
    const city = localStorage.getItem('city');
    if (city) getAPIdata(city);
}