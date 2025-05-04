import { useEffect, useState } from "react";
import axios from "axios";
import { useContentStore } from "../store";

const useFetch = (url: string) => {

  const content = useContentStore((state) => state.content);
  const setContent = useContentStore((state) => state.setContent);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(url, { withCredentials: true });
      setContent(response?.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { content, loading, error , refetch:()=>fetchData(url) };
};

export default useFetch;
