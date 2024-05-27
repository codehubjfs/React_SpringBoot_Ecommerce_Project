// AddressData.js
import { useState } from "react";

const useAddressData = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Address 1",
      street: "123 Main Street",
      landmark: "Near St.Johns School",
      city: "City A",
      state: "Tamil Nadu",
      pincode: "636004",
      phone: "1234567890",
    },
    {
      id: 2,
      title: "Address 2",
      street: "456 Main Street",
      landmark: "Near St.Marys School",
      city: "City B",
      state: "Country B",
      pincode: "123456",
      phone: "9876543210",
    },
  ]);

  return { addresses, setAddresses };
};

export default useAddressData;
