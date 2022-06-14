import React, { useState } from "react";
import { useSelector } from "react-redux";
import Fetch from "../../../../Request/httpService";

export const useRegion = () => {
  const [regions, setRegions] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector(state => state);
  const getRegions = async () => {
    setLoading(true);
    let request = {
      url: "/region/list",
      method: "POST",
      // multipart: true,
      data: { api_token: user.api_token },
    };
    return await Fetch(request).then(data => {
      setLoading(false);
      if (data) {
        setRegions(data.data);
      }
    });
  };

  const getAreas = async id => {
    setLoading(true);
    let request = {
      url: "/area/list",
      data: {
        region_id: id,
        api_token: user.api_token,
        all: true,
      },
      method: "POST",
      // multipart: true,
    };
    return await Fetch(request).then(data => {
      setLoading(false);
      if (data) {
        setAreas(data.data);
      }
    });
  };
  return {
    loading,
    regions,
    getRegions,
    getAreas,
    areas,
  };
};
