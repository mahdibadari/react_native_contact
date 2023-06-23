import { useState, useEffect } from "react";
import axios from "axios";

const contactsFetch = (endpoint) => {
  const [contactsData, setContactsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://contact.herokuapp.com/contact${endpoint}`,
    headers: {
      "Accept": "application/json",
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setContactsData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      if (error.response) {
        // Request made but the server responded with an error
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log(error.request);
      } else {
        // Error occured while setting up the request
        console.log('Error', error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { contactsData, isLoading, error, refetch };
};

export default contactsFetch;