import React, { useState, useEffect } from "react";

function CityComponent() {
  const [latitude, setLatitude] = useState(null);

  const [longitude, setLongitude] = useState(null);

  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    // Function to fetch city name

    const fetchCityName = async (lat, lon) => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );

        const data = await response.json();

        console.log(data);

        const address = data.address;

        console.log(address);

        if (address) {
          if (address.suburb || address.postcode) {
            console.log(data.address.suburb + " " + data.address.postcode);

            setCity(data.address.suburb);

            setPostcode(data.address.postcode);
          } else if (address.town) {
            setCity(data.address.town);
          } else if (address.village) {
            setCity(address.village);
          } else {
            setCity("City name not found");
          }
        } else {
          setCity("City name not found");
        }

        setLoading(false);
      } catch (error) {
        setError("Error fetching city name.");

        console.error("Error fetching city name:", error);

        setLoading(false);
      }
    };

    // Fetch city name when latitude or longitude changes

    if (latitude !== null && longitude !== null) {
      fetchCityName(latitude, longitude);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    // Function to get current location

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);

            setLongitude(position.coords.longitude);
          },

          (error) => {
            setError(error.message);

            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");

        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h1>City Name Fetcher</h1>

      {loading ? (
        <p>Loading...</p>
      ) : city ? (
        <div>
          <p>{city}</p>

          <p>{postcode}</p>
        </div>
      ) : (
        <p>{error ? `Error: ${error}` : "City name not found"}</p>
      )}
    </div>
  );
}

export default CityComponent;
