import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [callFetch, setCallFetch] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);

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
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    if (method === "POST") {
      const httpRequest = async () => {
        let postConfig = [url, config];

        const res = await fetch(...postConfig);
        const json = res.json();

        setCallFetch(json);
      };

      httpRequest();
    }
  }, [url, method, config]);

  return { data, httpConfig };
};
