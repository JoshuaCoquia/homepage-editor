import { useEffect, useState } from "react";
import searchIcon from "./weatherIcons/search.png";
import clearWeatherIcon from "./weatherIcons/clear.png";
import humidWeatherIcon from "./weatherIcons/humidity.png";
import windSpeedIcon from "./weatherIcons/wind.png";

interface Props {
    id: string;
    title: string;
    description: string;
    city: string;
}

export default function Weather({ id, title, description, city = "" }: Props) {
    const [location, setLocation] = useState(city);
    const [temperature, setTemperature] = useState(0);
    const [weatherCondition, setWeatherCondition] = useState("Clear");
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [searchQuery, setSearchQuery] = useState(city);

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        updateWeatherInformation();
    }

    function updateWeatherInformation() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${import.meta.env.PUBLIC_OPEN_WEATHER_API_KEY}`).then(data => data.json()).then(data => {
            setLocation(data.name);
            setTemperature(Math.round(data.main.temp));
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
            setWeatherCondition(data.weather[0].main);
        });
    }

    useEffect(() => {
        updateWeatherInformation();
    }, []);

    return (
        <section>
            <h2>{title}</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <input
                    type="text"
                    placeholder="Search City"
                    spellCheck="false"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                // TODO: Add accessiblity tags
                />
                <button>
                    <img src={searchIcon.src} alt="Search for city" />
                </button>
            </form>

            <section>
                <img src={clearWeatherIcon.src} alt="Clear weather icon" />
                <p>{temperature}</p>

                <p>{weatherCondition}</p>

                <p>{location}</p>

                <div>
                    <img src={humidWeatherIcon.src} alt="Humidity icon" />
                    <p>{humidity}%</p>
                    <p>Humidity</p>
                </div>

                <div>
                    <img src={windSpeedIcon.src} alt="Wind speed icon" />
                    <p>{windSpeed} mph</p>
                    <p>Wind Speed</p>
                </div>
            </section>
        </section>
    );
}