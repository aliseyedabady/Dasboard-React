import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Fetch from "../../Request/httpService";

export const useDeleteRow = ({ url }) => {
  const [row, setRow] = useState({ function: "delete" });
  const { user } = useSelector(state => state);
  const deleteRow = async data => {
    // setLoadingBtn(true);
    let obj = {
      ...row,
      ...data,
      api_token: user.api_token,
    };
    await Fetch({
      url: data.url,
      data: { ...obj },
      method: "POST",
    }).then(response => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  };
  return {
    row,
    setRow,
    deleteRow,
  };
};
