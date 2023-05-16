import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setData(data);
        } else {
          setErrorMessage(data);
        }
        setIsLoading(false);
      } catch (err) {
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, errorMessage };
};

export default useFetch;
