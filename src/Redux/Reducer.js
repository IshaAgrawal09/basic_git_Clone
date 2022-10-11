import { Save_Data } from "./Action";

const initialState = {
  user_name: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Save_Data:
      var tempData = { ...JSON.parse(sessionStorage.getItem("data")) };
      return {
        ...state,
        user_name: action.payload,
        // user_details: tempData,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
