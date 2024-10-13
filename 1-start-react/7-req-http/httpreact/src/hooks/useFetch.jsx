import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // POST REFACTORING
  // POST REFACTORING
  // POST REFACTORING
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // LOADING
  // LOADING
  // LOADING
  const [loading, setLoading] = useState(false);

  // HANDLE ERRORS
  // HANDLE ERRORS
  // HANDLE ERRORS
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        setError("Fetch data error.");
        console.log(error.message);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // POST REFACTORING
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
