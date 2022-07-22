import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getParkings } from "../fetchAPI";

const ParkVehicle = ({ Parkings, setParkings }) => {
  const refSpot = useRef();
  const refPlateNo = useRef();
  const refSize = useRef();
  const MySwal = withReactContent(Swal);

  const handleClick = async () => {
    const data = {
      plateNo: refPlateNo.current.value,
      spot: refSpot.current.value,
      size: refSize.current.value,
    };
    refPlateNo.current.value = "";

    const response = await axios.post("http://localhost:3000/vehicles", data);
    let message = response.data.message ?? (
      <p>Vehicle with Plate No# of {data.plateNo} has been parked.</p>
    );

    MySwal.fire({
      title: message,
    });

    getParkings(setParkings);
  };

  return (
    <div>
      <h4 className="text-lg font-bold">Park Vehicle</h4>
      <div className="mb-3">
        <label className="block">Select Spot</label>
        <select className="border-2 px-5 py-1" ref={refSpot}>
          {Parkings.map((parking, index) => (
            <optgroup label={parking.name} key={index}>
              {parking.spots.map((spot, spotIndex) => (
                <option key={index + spotIndex} value={spot._id}>
                  {spot.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="block">Plate No</label>
        <input
          type="text"
          className="px-3 py-2 border-2"
          placeholder="Enter car plate number."
          ref={refPlateNo}
        />
      </div>

      <div className="mb-3">
        <label className="block">Size</label>
        <select className="px-3 py-2 border-2" ref={refSize}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="mb-3">
        <button
          className="px-3 py-2 bg-green-600 hover:bg-green-400 rounded"
          onClick={handleClick}
        >
          Park Car
        </button>
      </div>
    </div>
  );
};

export default ParkVehicle;
