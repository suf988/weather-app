import React, { useEffect, useState } from 'react'
import './Temperature.css'
import Navbar from './Navbar'

const Temperature = () => {

    const [input, setInput] = useState("")
    const [temperature, setTemperature] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [pressure, setPressure] = useState("")
    const [humidity, setHumidity] = useState("")
    const [desc, setDesc] = useState("")
    const [feel, setFeel] = useState("")
    const [vision, setVision] = useState("")
    const [riseHrs, setRiseHrs] = useState("")
    const [riseMin, setRiseMin] = useState("")
    const [settingHrs, setSettingHrs] = useState("")
    const [settingMin, setSettingMin] = useState("")

    const handleClick = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=8149fd01915e92ede5e42803a3e082c9`;

            const response = await fetch(url);
            const data = await response.json();

            setTemperature(data.main.temp);
            setMin(data.main.temp_min);
            setMax(data.main.temp_max);
            setFeel(data.main.feels_like);
            setCity(data.name);
            setCountry(data.sys.country);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setDesc(data.weather[0].main);
            setVision(data.visibility);

            const timeStampRise = data.sys.sunrise;
            const sunRise = new Date(timeStampRise * 1000)
            const sunRiseHour = sunRise.getHours();
            const sunRiseMin = sunRise.getMinutes();
            setRiseHrs(sunRiseHour)
            setRiseMin(sunRiseMin)

            const timeStampSet = data.sys.sunset;
            const sunSet = new Date(timeStampSet * 1000)
            const sunSetHour = sunSet.getHours();
            const sunSetMin = sunSet.getMinutes();
            setSettingHrs(sunSetHour)
            setSettingMin(sunSetMin)

            setInput('');

        } catch (error) {
            alert(error);
        }

    };


    return (
        <div>

            <Navbar />

            <div className='main-div'>

                <div className='input-div'>

                    <h1 className='heading'>Weather App</h1>

                    <div>
                        <input type="input" placeholder='  Enter city' value={input}
                            onChange={(e) => setInput(e.target.value)} className='input' />

                        <button onClick={handleClick} className='button'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>


                <div className='display-div'>

                    {!temperature ? (
                        <p className='wait'>No Data Found</p>
                    ) : (
                        <>
                            <div>

                                <h1 className='live-temp'>{temperature}°C</h1>

                                <h2 className='city'>
                                    <i className="fa-solid fa-location-crosshairs"></i> {city}
                                    <span className='country'>{country}</span>
                                </h2>

                            </div>

                            <div className='detail-div-1'>

                                <div>
                                    <h4><i class="fa-solid fa-temperature-three-quarters"></i> <span className='span-tag'>Feels Like:</span> {feel}°C</h4>
                                </div>
                                <div>
                                    <h4><i class="fa-solid fa-temperature-high"></i> <span className='span-tag'>Min:</span> {min}°C</h4>
                                </div>

                                <div>
                                    <h4><i class="fa-solid fa-temperature-low"></i> <span className='span-tag'>Max:</span> {max}°C</h4>
                                </div>



                            </div>

                            <div className='detail-div-2'>
                                <div>
                                    <h4><i class="fa-solid fa-cloud"></i> <span className='span-tag'>Weather:</span> {desc}</h4>
                                </div>

                                <div>
                                    <h4><i class="fa-solid fa-gauge"></i> <span className='span-tag'>Pressure:</span> {pressure}hPa</h4>
                                </div>

                                <div>
                                    <h4><i class="fa-solid fa-droplet"></i> <span className='span-tag'>Humidity:</span> {humidity}%</h4>
                                </div>
                            </div>

                            <div className='detail-div-2'>
                                <div>
                                    <h4><i class="fa-solid fa-eye"></i> <span className='span-tag'>Visibility:</span> {vision/1000} KM</h4>
                                </div>

                                <div>
                                    <h4><i class="fa-solid fa-sun"></i> <span className='span-tag'>Sun Rise:</span> {riseHrs}:{riseMin}</h4>
                                </div>

                                <div>
                                    <h4><i class="fa-solid fa-moon"></i> <span className='span-tag'>Sun Set:</span> {settingHrs}:{settingMin}</h4>
                                </div>
                            </div>


                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Temperature
