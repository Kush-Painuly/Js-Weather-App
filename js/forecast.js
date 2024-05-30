const API_KEY = "tpcuhiLx73ZyWqmIKogY58360OKH5Kj1";

const fetchData = async (apiurl) => {
    let response;
    try {
        response = await fetch(apiurl);
        if (!response.ok)
            throw new Error("Internal Server Error")
        const data = await response.json();
        return data[0];
    } catch (err) {
        throw err;
    }
}


const getLocation = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryString = `?apikey=${API_KEY}&q=${city}`;

    try {
        const locationData = await fetchData(baseURL + queryString);
        return locationData;
    } catch (err) {
        throw err;
    }

}

// const getForcast = async (locationkey) => {
//     const baseURL = `http://dataservice.accuweather.com/forecasts/v1/daily/10day/${locationkey}`
//     const queryString = `?apikey= ${API_KEY}`;

//     try {
//         const forecastData = await fetchData(baseURL + queryString);
//         return forecastData;
//     } catch (err) {
//         throw err;
//     }
// }


const getWeatherConditions = async (locationKey) => {
    const baseURL = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
    const queryString = `?apikey=${API_KEY}`;

    try {
        const weatherData = await fetchData(baseURL + queryString);
        return weatherData;
    } catch (err) {
        throw err;
    }

}


// for testing purposes
// getLocation("Noida")
//     .then((locdata) => {
//         console.log(locdata);
//         return getWeatherConditions(locdata.Key)
//     }).then((wdata) => {
//         console.log(wdata);
//     })
//     .catch(err => console.log(err));


// forecast api
// getLocation("Noida")
//     .then((locationdata) => {
//         console.log(locationdata)
//         return getForcast(locationdata.Key)
//     })
//     .then((forecastdetails) => {
//         console.log(forecastdetails)
//     })
//     .catch(err => console.log(err));