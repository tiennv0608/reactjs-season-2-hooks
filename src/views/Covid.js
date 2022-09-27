import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let currentDate = new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000);
    let pastDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    currentDate = moment(currentDate).format("YYYY-MM-DD");
    pastDate = moment(pastDate).format("YYYY-MM-DD");
    console.log(">>> check current date: ", currentDate);
    console.log(">>> check past date: ", pastDate);
    axios
      .get(
        `https://1api.covid19api.com/country/vietnam?from=${pastDate}T00:00:00Z&to=${currentDate}T00:00:00Z`
      )
      .then((res) => {
        setTimeout(() => {
          let data = res && res.data ? res.data : [];
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
              return item;
            });
            data = data.reverse();
          }

          setDataCovid(data);
          setIsLoading(false);
          setIsError(false);
        }, 5000);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h3>Covid 19 tracking in Viet Nam</h3>
      <table id="customers">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {!isError &&
            !isLoading &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {isError && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
