import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [method, setMethod] = useState("");
  const [callFetch, setCallFetch] = useState(null);
  const [config, setConfig] = useState(null);

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
    try {
      const fetchData = async () => {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoading(false);
      };

      fetchData();
    } catch (e) {
      setError(e);
      console.log(e.message);
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

  return { data, loading, error, httpConfig };
};
