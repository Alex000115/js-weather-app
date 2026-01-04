async function getWeather(){
  const city = document.getElementById('city').value;
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=23.81&longitude=90.41&current_weather=true`
  );
  const data = await res.json();
  document.getElementById('result').innerText =
    `Temperature: ${data.current_weather.temperature}°C`;
}
