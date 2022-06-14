import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useCustomDispach = ({ redirect }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = ({ type, data, key, local = false }) => {
    if (local) {
      dispatch({
        local_storage: {
          key,
          value: data,
        },
        type,
        payload: { [key]: data },
      });
    } else {
      dispatch({ type, payload: { [key]: data } });
    }
    if (redirect) {
      navigate(redirect);
    }
  };
  return { handler };
};
