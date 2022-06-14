import { Fragment, useState } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
// BsDot
import { Link, useNavigate } from "react-router-dom";

const NesRoute = ({ routes, onClose }) => {
  const navigate = useNavigate();

  const [opens, setOpens] = useState([]);
  const isInArray = item => {
    let isIn = false;
    opens.map(page => {
      if (page.key == item.key) {
        isIn = true;
      }
    });

    return isIn;
  };
  const toggleTab = open => {
    if (!open.children) {
      onClose(open);
    } else {
      if (isInArray(open)) {
        setOpens([...opens].filter(item => item.key != open.key));
      } else {
        setOpens([...opens, { ...open }]);
      }
    }
  };
  return routes.map((route, routeCount) => {
    return (
      <div key={routeCount} className="">
        <h6 className="text-white p-2">{route.title}</h6>

        {route.children &&
          route.children.map((btn, btnCount) => {
            return (
              <Fragment key={btnCount}>
                <button
                  onClick={() => {
                    toggleTab(btn);
                  }}
                  className="btn d-flex text-black w-100"
                  style={{
                    fontSize: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{btn.title}</span>
                  {btn.icon && <btn.icon />}
                  {btn.children &&
                    (isInArray(btn) ? (
                      <AiFillCaretDown />
                    ) : (
                      <AiFillCaretLeft />
                    ))}
                </button>
                {isInArray(btn) &&
                  btn.children &&
                  btn.children.map((last, key) => {
                    return (
                      <div key={key}>
                        {last.show &&
                          (last.children ? (
                            <button
                              key={last.id}
                              onClick={() => {
                                toggleTab(last);
                              }}
                              className=" btn text-right d-flex text-white w-100"
                              style={{
                                fontSize: "10px",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginRight: "10px",
                              }}
                            >
                              <span>{last.title}</span>
                              {last.children &&
                                (isInArray(last) ? (
                                  <AiFillCaretDown />
                                ) : (
                                  <AiFillCaretLeft />
                                ))}
                            </button>
                          ) : (
                            <Link
                              style={{
                                marginRight: "10px",
                              }}
                              className="link"
                              to={last.path}
                            >
                              <BsDot size={20} color="#7b7b7b" />
                              {last.title}
                            </Link>
                          ))}
                      </div>
                    );
                  })}
              </Fragment>
            );
          })}
      </div>
    );
  });
};
export default NesRoute;
