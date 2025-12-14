const API_KEY = "422585b63b4145c0a0c142218251312";

async function getWeather() {
  const city = document.getElementById("serach-city").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      alert("City not found");
      return;
    }

    const temp = data.current.temp_c;
    const humidity = data.current.humidity;
    const pressure = data.current.pressure_mb;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;
    
    const emoji = getEmoji(condition);

    document.querySelector(".weather-output").innerHTML = `
            <div class="weather-card" id="weatherCard">
                <h2>${data.location.name}, ${data.location.country} ${emoji}</h2>
                
                <p><strong>Temperature:</strong> ${temp}°C 🌡</p>
                <p><strong>Humidity:</strong> ${humidity}% 💧</p>
                <p><strong>Pressure:</strong> ${pressure} hPa 🧭</p>
                <p><strong>Condition:</strong> ${condition}</p>
                <img src="https:${icon}" class="weather-icon" />
            </div>
        `;

    setTimeout(() => {
      document.getElementById("weatherCard").classList.add("show");
    }, 50);
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Something went wrong. Try again.");
  }
}

function getEmoji(condition) {
  condition = condition.toLowerCase();

  if (condition.includes("sunny")) return "☀️";
  if (condition.includes("clear")) return "🌕";
  if (condition.includes("cloud")) return "☁️";
  if (condition.includes("rain")) return "🌧";
  if (condition.includes("snow")) return "❄️";
  if (condition.includes("storm")) return "⛈️";
  if (condition.includes("fog")) return "🌫️";
  
  return "🌍";
}
