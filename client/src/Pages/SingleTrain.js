import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const SingleTrain = () => {
  const [TrainData, SetTrainData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const current = location.pathname.substring(1);
    fetch(`http://localhost:5000/api/train/getTrain/${current}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data?.data)
        SetTrainData(data?.data);
      });
  }, []);

  if (!TrainData) {
    return <div>Item not found.</div>;
  }


  return (
    <div className="h-screen bg-[#f560d4]">
      <div className="inline-flex p-3 m-10 text-white bg-[#070707]">
        <h1>
          {" "}
          <Link to="/">Go Back </Link>{" "}
        </h1>
      </div>

      <div className="flex align-middle text-center justify-center">
        <table class="w-full h-full flex justify-center ">
          <thead>
            <tr className="flex flex-col">
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5]">
                Train Name
              </th>

              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5]">
                Train Number
              </th>

              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5]">
                Departure Time
              </th>

              <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5] text-center">
                Seats Available
              </th>

              <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5] text-center">
                Price (Sleeper)
              </th>

              <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5] text-center">
                Price (AC)
              </th>
            </tr>
          </thead>

          <tbody className="align-baseline">
            <tr className="group cursor-pointer flex flex-col">
              <td className="text-sm p-3 whitespace-no-wrap bg-[#f4b1e5]">
                {TrainData?.trainName}
              </td>

              <td className="text-sm p-3 whitespace-no-wrap bg-[#f4b1e5]">
                {TrainData?.trainNumber}
              </td>

              <td className="text-sm p-3 whitespace-no-wrap bg-[#f4b1e5]">
                {TrainData?.departureTime?.Hours}:{TrainData?.departureTime?.Minutes}
              </td>

              <td className="text-sm p-3 whitespace-no-wrap bg-[#f4b1e5]">
                {TrainData?.seatsAvailable?.sleeper + TrainData?.seatsAvailable?.AC}
              </td>

              <td className="text-sm p-3 whitespace-no-wrap bg-[#f4b1e5]">
                {TrainData?.price?.sleeper}
              </td>

              <td className="text-sm p-3 whitespace-no-wrap bg-[#f4b1e5]">
                {TrainData?.price?.AC}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleTrain;
