import { useEffect, useState } from "react";
import yelp from "../axios/yelp";

const useData = (term) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState("");
  const searchApi = async (searchTerm) => {
    setLoading(true);

    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "san jose",
        },
      });
      setLoading(false);
      setError("");
      const data = await res.data.businesses;
      setResults(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("something went wrong...");
    }
  };
  useEffect(() => {
    setTimeout(() => searchApi(term), 3000);
  }, [term]);
  //   console.log(results);
  return [results, loading, isError];
};
export default useData;
