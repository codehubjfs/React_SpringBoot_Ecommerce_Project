// import React, { useState, useEffect } from "react";

// const cities = [
//   { name: "Coimbatore", latitude: 13.0827, longitude: 80.2707 },
//   { name: "Chennai", latitude: 11.0168, longitude: 76.9558 },
//   { name: "Madurai", latitude: 9.9252, longitude: 78.1198 },
//   { name: "Tiruchirappalli", latitude: 10.7905, longitude: 78.7047 },
//   { name: "Salem", latitude: 11.6643, longitude: 78.146 },
//   { name: "Tirunelveli", latitude: 8.7139, longitude: 77.7567 },
//   { name: "Erode", latitude: 11.341, longitude: 77.7172 },
//   { name: "Vellore", latitude: 12.9165, longitude: 79.1325 },
//   { name: "Thoothukudi", latitude: 8.8055, longitude: 78.1458 },
//   { name: "Thanjavur", latitude: 10.786, longitude: 79.1378 },
// ];

// function MyLocation({ setCityName }) {
//   const [position, setPosition] = useState({ latitude: null, longitude: null });
//   const [city, setCity] = useState(null);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         setPosition({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     } else {
//       console.log("Geolocation is not available in your browser.");
//     }
//   }, []);

//   useEffect(() => {
//     if (position.latitude && position.longitude) {
//       fetchNearestCity();
//     }
//   }, [position]);

//   const fetchNearestCity = () => {
//     let minDistance = Number.MAX_VALUE;
//     let nearestCity = null;
//     cities.forEach((city) => {
//       const distance = calculateDistance(
//         position.latitude,
//         position.longitude,
//         city.latitude,
//         city.longitude
//       );
//       if (distance < minDistance) {
//         minDistance = distance;
//         nearestCity = city;
//       }
//     });
//     if (nearestCity) {
//       setCity(nearestCity.name);
//       setCityName(nearestCity.name); // Pass city name to NavBar
//     } else {
//       console.log("City not found.");
//     }
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371;
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) *
//         Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c;
//     return distance;
//   };

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   return <span>{city ? city : "Loading..."}</span>;
// }

// export default MyLocation;
