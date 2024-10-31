import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpConfig = () => {
    
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
  }, [url]);

  return { data, loading, error };
};
