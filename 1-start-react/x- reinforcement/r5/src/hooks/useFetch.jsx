import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (e) {
        console.log(e.message);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    if (method === "POST") {
      const httpReq = async () => {
        let fetchConfig = [url, config];

        const res = await fetch(...fetchConfig);
        const json = await res.json();

        setCallFetch(json);
      };

      httpReq();
    }
  }, [url, config, method]);

  return { data, httpConfig, error, loading };
};
