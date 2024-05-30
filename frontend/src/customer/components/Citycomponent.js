// import React, { useState, useEffect } from "react";

// function WeatherComponent() {
//   const [city, setCity] = useState("");

//   const [error, setError] = useState("");

//   const [latitude, setLatitude] = useState("");

//   const [longitude, setLongitude] = useState("");

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position.coords);

//       setLatitude(position.coords.latitude);

//       setLongitude(position.coords.longitude);
//     });

//     // Function to fetch city name

//     const fetchCityName = async (latitude, longitude) => {
//       try {
//         const apiKey = "fa7dcf858400cbf9aad727e6243376ab";

//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
//         );

//         //console.log(response)

//         const data = await response.json();

//         sessionStorage.setItem("cityname", JSON.stringify(data));

//         console.log(data);

//         if (data.name) {
//           setCity(data.name);
//         } // else {

//         //     setCity('City name not found');

//         // }
//       } catch (error) {
//         setError("Error fetching city name.");

//         console.error("Error fetching city name:", error);
//       }
//     };

//     // Fetch city name when latitude or longitude changes

//     if (latitude !== null && longitude !== null) {
//       fetchCityName(latitude, longitude);
//     }
//   }, [latitude, longitude]);

//   return (
//     <div>
//       <span>{city ? <p>{city}</p> : <p>Loading...</p>}</span>

//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// }

// export default WeatherComponent;
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = ({ setCityName, setPincode }) => {
  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const city =
              response.data.address.city ||
              response.data.address.town ||
              response.data.address.village;
            const pincode = response.data.address.pincode;
            setCityName(city);
            console.log(city);
            setPincode(pincode);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, [setCityName]);

  return null;
};

export default WeatherComponent;
