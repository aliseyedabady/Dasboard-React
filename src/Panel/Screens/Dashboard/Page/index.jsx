import React from "react";
import Card from "../../../../Common/Components/Card";
import { FaUserFriends, FaMoneyCheck } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { GiSellCard } from "react-icons/gi";
function index() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="row pt-4">
        <Card
          icon={() => (
            <div
              style={{
                backgroundColor: "#EEFAFF",
                color: "#55B8FF",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
              className="d-flex justify-content-around align-items-center"
            >
              <FaUserFriends size={30} />
            </div>
          )}
          value="2,303"
          desc={"تعداد کاربران"}
        />
        <Card
          icon={() => (
            <div
              style={{
                backgroundColor: "#FDF3EF",
                color: "#F18A58",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
              className="d-flex justify-content-around align-items-center"
            >
              <FaMoneyCheck size={30} />
            </div>
          )}
          value="2,000,00"
          desc={"مجموع درآمد"}
        />
        <Card
          icon={() => (
            <div
              style={{
                backgroundColor: "#FCEFF2",
                color: "#EE5081",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
              className="d-flex justify-content-around align-items-center"
            >
              <FiBox size={30} />
            </div>
          )}
          value="603"
          desc={"تعداد محصول"}
        />
        <Card
          icon={() => (
            <div
              style={{
                backgroundColor: "#F2EBFC",
                color: "#713BDB",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
              className="d-flex justify-content-around align-items-center"
            >
              <GiSellCard size={30} />
            </div>
          )}
          value="204"
          desc={"تعداد خرید"}
        />
      </div>
    </div>
  );
}

export default index;
