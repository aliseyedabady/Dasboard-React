import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BoxShadow from "../../../Common/Components/BoxShadow";
import { useRequest } from "../../../Hooks";
import Loading from "../../../Common/Components/Loading/index";
import Form from "../../../Common/Components/Form";
function Edit() {
  const { row } = useParams();
  const { Get, get, loading, show, setShow, handleClose, handleShow } =
    useRequest({
      url: "notic/create",
      toast: false,
      getUrl: "/realperson/details",
    });
  useEffect(() => {
    Get({ id: row });
  }, []);
  if (loading.get) {
    return <Loading />;
  }
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "10px" }}>
      <div className="row">
        <div className="col">
          <h6>اطلاعات کاربری</h6>
        </div>
      </div>
      <div className="row">{/* <Form /> */}</div>
    </BoxShadow>
  );
}

export default Edit;
