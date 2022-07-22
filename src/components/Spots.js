import Vehicle from "./Vehicle";

const Spots = ({ Spots, setParkings }) => {
  return Spots.map((spot, index) => (
    <div key={index} className="flex-1 w-4 h-4 pt-5 px-2" id={spot._id}>
      <div className="border-4 px-3">
        {spot.vehicle != null ? (
          <Vehicle Vehicle={spot.vehicle} setParkings={setParkings} />
        ) : (
          <div className="p-5">
            <p>Name: {spot.name}</p>
            <p>Size: {spot.size}</p>
            <p>Rate: {spot.rate}</p>
          </div>
        )}
      </div>
    </div>
  ));
};

export default Spots;
