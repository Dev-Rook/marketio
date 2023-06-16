import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
      console.table(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, loading, error };
};

export default useAxios;
