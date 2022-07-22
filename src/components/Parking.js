import { useEffect, useState } from "react";
import Spots from "./Spots";

import ParkVehicle from "./ParkVehicle";
import { getParkings } from "../fetchAPI";

const Parking = () => {
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    getParkings(setParkings);
  }, []);

  return (
    <div className="flex">
      <div className="w-2/3 flex-1">
        {parkings.length > 0 &&
          parkings.map((parking, index) => (
            <div key={index} className="container mx-auto block my-3 h-44">
              <h4>{parking.name}</h4>
              <div className="flex">
                <Spots
                  Spots={parking.spots}
                  setParkings={setParkings}
                  className="w-full"
                ></Spots>
              </div>
            </div>
          ))}
      </div>
      <div className="flex-1">
        <ParkVehicle
          className="my-5"
          Parkings={parkings}
          setParkings={setParkings}
        />
      </div>
    </div>
  );
};

export default Parking;
