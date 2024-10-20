import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [callFetch, setCallFetch] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
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

  }, [config]);

  return { data, httpConfig, loading, error };
};
