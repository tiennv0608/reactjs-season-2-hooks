import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = () => {
  let currentDate = new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000);
  let pastDate = moment().subtract(32, "days");
  // currentDate = moment(currentDate).format("YYYY-MM-DD");
  // pastDate = moment(pastDate).format("YYYY-MM-DD");
  let url = `https://api.covid19api.com/country/vietnam?from=${pastDate.toISOString()}&to=${currentDate.toISOString()}`;

  const { data: dataCovid, isLoading, isError } = useFetch(url);

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
