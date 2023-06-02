function livelyPropertyListener(name, val) {
  switch(name) {
    case "dateVisible":
      root.dateVisible = val;
      if (root.dateVisible)
        setDate();
      dateContainer.style.visibility = val ? "visible" : "hidden";
      break;
    case "dateX":
      dateContainer.style.left = val+"%";
      break;
    case "dateY":
      dateContainer.style.top = val+"%";
      break;
    case "dateScale":
      dateContainer.style.scale = val/1000;
      break;
    case "dateColor1":
      dateContainer.style.color = val;
      break;
    case "dateColor2":
      date.style.backgroundImage = "-webkit-linear-gradient(90deg, "+val+"01 10%, "+val+"DC 50%)";
      break;
    case "weatherVisible":
      root.weatherVisible = val;
      weatherContainer.style.visibility = hideWeather() ? "hidden" : "visible";
      break;
    case "weatherCityInput":
      cityName = val;
      break;    
    case "weatherApiInput":
      weatherApi = val;
      break;
    case "weatherBtnRefresh":
      // update weather
      drawWeather();
      break;
    case "miscHour12":
      // set hour format
      root.hour12 = val;
      setDate();
      drawWeatherSun(root.weatherData);
      break;
    case "miscPlayVideo":
      if (val) {
        document.getElementById("video").play();
      } else {
        document.getElementById("video").pause();
      }
      break;
    case "miscLanguage":
      root.locale = languages[val];
      setDate();
      drawWeather();
      break;
  }
}