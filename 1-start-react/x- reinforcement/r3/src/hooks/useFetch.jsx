import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const httpConfig = (method, data) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    if (method === "POST") {
      let fetchConfig = [url, config];

      const httpRequest = async () => {
        const res = await fetch(...fetchConfig);
        const json = await res.json();

        setCallFetch(json);
      }

      httpRequest();
    }
  }, [config, method, url]);

  return { data, httpConfig };
};
