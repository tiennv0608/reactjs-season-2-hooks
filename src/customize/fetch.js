import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get(url)
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

          setData(data);
          setIsLoading(false);
          setIsError(false);
        }, 5000);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
