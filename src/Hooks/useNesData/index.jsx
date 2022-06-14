import Fetch from "../../Request/httpService";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const useNesData = ({ getUrl }) => {
  //   const { addToast } = useToasts();

  const [get, setGet] = useState(null);
  const [loading, setloading] = useState({ get: true });
  const { user } = useSelector(state => state);
  const Get = async request => {
    console.log("req ", request);
    setloading({ get: true });
    let url = getUrl;
    if (request && request.page) {
      url = `${getUrl}?page=${request.page}`;
    }
    await Fetch({
      url,
      data: { ...request, api_token: user.api_token },
      method: "POST",
    }).then(response => {
      if (response && response.data && response.status === "success") {
        setGet(response.data);
      }
      setloading({ get: false });
    });
  };

  return {
    Get,
    get,
    setGet,
    loading,
  };
};
