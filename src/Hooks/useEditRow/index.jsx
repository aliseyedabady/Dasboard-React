import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Fetch from "../../Request/httpService";

export const useEditRow = ({ url }) => {
  const [modal, setModal] = useState({ show: false });
  const { user } = useSelector(state => state);

  const editRow = async data => {
    setModal({ show: true });

    // setLoadingBtn(true);
    // let obj = {
    //   ...data,
    //   api_token: user.api_token,
    // };
    // await Fetch({
    //   url,
    //   data: { ...obj },
    //   method: "POST",
    // }).then(response => {
    //   if (response.status == "success") {
    //     toast.success(response.message);
    //   } else {
    //     toast.error(response.message);
    //   }
    // });
  };
  return {
    modal,
    setModal,
    editRow,
  };
};
