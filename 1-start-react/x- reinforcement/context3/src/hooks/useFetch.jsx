import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({});

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      };

      fetchData();
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  }, [url, callFetch]);

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

  return { data, httpConfig };
};
