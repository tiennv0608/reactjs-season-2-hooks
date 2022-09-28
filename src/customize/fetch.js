import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      await axios
        .get(url, { cancelToken: ourRequest.token })
        .then((res) => {
          let data = res && res.data ? res.data : [];
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
              return item;
            });
            data = data.reverse();
          }

          setData(data);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) {
            console.log("Request cancelled", e.message);
          } else {
            setIsError(true);
            setIsLoading(false);
          }
        });
    }
    setTimeout(() => {
      fetchData();
    }, 3000);
    return () => {
      ourRequest.cancel("Operation cancelled by the user");
    };
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
