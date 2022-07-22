import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getParkings } from "../fetchAPI";
import moment from "moment";

const Vehicle = ({ Vehicle, setParkings }) => {
  const MySwal = withReactContent(Swal);

  const formatDate = (time) => moment(time).format("YYYY-MM-DD hh:mm:ss a");

  const handleClick = async (id) => {
    const response = await axios.delete(
      "http://localhost:3000/vehicles/" + id,
      {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      }
    );

    const data = response.data;

    if (data != null) {
      getParkings(setParkings);

      MySwal.fire({
        title: <p>Unpark {data.plateNo}</p>,
        html: <p>Fee: {data.fee}</p>,
      });
    }
  };

  return (
    <div className="p-5">
      <h4>
        {Vehicle.plateNo} ({Vehicle.size})
      </h4>
      <p>{formatDate(Vehicle.timeEntry)}</p>

      <button
        className="px-5 py-1 bg-red-500 hover:bg-red-200 rounded-md text-white"
        onClick={() => handleClick(Vehicle._id)}
      >
        Unpark
      </button>
    </div>
  );
};

export default Vehicle;
