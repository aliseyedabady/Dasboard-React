import Fetch from "../../../Request/httpService";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const useReleted = ({ getUrl }) => {
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

  const getAData = ({ key }) => {
    if (get) {
      return get[key];
    } else {
      return [];
    }
  };

  return {
    Get,
    get,
    setGet,
    loading,
    getAData,
  };
};
