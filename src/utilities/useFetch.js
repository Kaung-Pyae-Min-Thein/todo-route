import { useEffect, useState } from "react"


export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);




  useEffect(() => {

    const abortControl = new AbortController();

    fetch(url, { signal: abortControl.signal })

      .then(response => {
        if (!response.ok) {
          throw Error("Can't get data from Server")
        }
        return response.json()
      })

      .then(data => {
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("abort fetching")
        } else {
          setPending(false);
          setError(error.message);
        }

      })

    return () => abortControl.abort();
  }, [url]);

  return { data, error, pending }

}