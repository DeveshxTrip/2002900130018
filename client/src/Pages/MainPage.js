import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [TrainData, SetTrainData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/train/getAllTrains")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetTrainData(data?.data);
      });
  }, []);

  return (
    <div className="h-full bg-[#f560d4]">
      <div className="text-center text-white font-extrabold text-3xl p-3 rounded-md">
        <h1> Devesh Train Service </h1>
      </div>
      <div>
        <div className="max-w-4xl m-auto mt-6">
          <table className="w-full table-collapse">
            <thead>
              <tr>
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

                <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-[#f4b1e5]">
                  More Details
                </th>
              </tr>
            </thead>

            {TrainData.map((data, index) => (
              <tbody data-index={index} className="align-baseline" key={index}>
                <tr className="group cursor-pointer hover:bg-[#f8c6f5]">
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    {data.trainName}
                  </td>

                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    {data.trainNumber}
                  </td>

                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    {data.departureTime.Hours}:{data.departureTime.Minutes}
                  </td>

                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap ">
                    {data.seatsAvailable.sleeper + data.seatsAvailable.AC}
                  </td>

                  <td className="p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
                    <button className="bg-[#000000] p-3 rounded-lg text-white">
                      <Link to={`/${data?.trainNumber}`}> Get Details </Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
