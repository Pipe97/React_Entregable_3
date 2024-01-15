import axios from "axios";
import { useState } from "react";


const useFetch = (url) => {
  const [resp, setResp] = useState();
  const [hasError, setHasError] = useState(false);

  const getApi = () => {
    axios
      .get(url)
      .then((resp) => {
        setResp(resp.data);
        setHasError(false);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
      });
    };
    return [resp, getApi, hasError];
};
export default useFetch