import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const pastDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  const url = `https://api.covid19api.com/country/vietnam?from=${pastDate}&to=${today}`;

  const { data: dataCovid, isLoading, isError } = useFetch(url, true);

  return (
    <div>
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
    </div>
  );
};

export default Covid;
