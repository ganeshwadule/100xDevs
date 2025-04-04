import { useEffect, useState } from "react";

const useFetch = (url,retryTime) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setPost(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  
  useEffect(() => {
    fetchData()
  }, [url]);

  useEffect(()=>{
    let clock = setInterval(fetchData,retryTime*1000);

    return ()=>{
        clearInterval(clock);
    }
  },[url])
  return { postTitle: post.title, loading, error };
};

export default useFetch;
