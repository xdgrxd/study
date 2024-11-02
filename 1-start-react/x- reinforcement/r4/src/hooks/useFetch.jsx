import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFetch, setCallFetch] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

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
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (e) {
        setError(e);
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    if (method === "POST") {
      let fetchConfig = [url, config];

      const httpReq = async () => {
        const res = await fetch(...fetchConfig);
        const json = await res.json();

        setCallFetch(json);
      };

      httpReq();
    }
  }, [url, config, method]);

  return { data, httpConfig, loading, error };
};
