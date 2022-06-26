const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {
    username: "aliseyedabady",
    mobile: "09367360561",
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      if (action.local_storage) {
        let { key, value } = action.local_storage;
        localStorage.setItem(key, JSON.stringify(value));
      }
      if (action.noaction) {
        return state;
      }
      return { ...state, ...action.payload };
    case "REMOVE":
      if (action.local_storage) {
        let { key } = action.local_storage;
        localStorage.removeItem(key);
      }
      if (action.noaction) {
        return state;
      }
      return delete action.payload, state;
    case "CLEAR":
      localStorage.clear();
      return {};
    default:
      return state;
  }
};
export default reducers;
