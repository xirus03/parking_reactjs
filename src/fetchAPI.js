import axios from "axios";

const getParkings = async (setParkings) => {
  const response = await axios.get("http://localhost:3000/parkings");
  setParkings(await response.data);
};

export { getParkings };
