import { createContext, useState } from "react";

const Place = createContext();

const PlaceContext = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  return (
    <Place.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </Place.Provider>
  );
};

export { Place, PlaceContext };
