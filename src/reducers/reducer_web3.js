import { GET_WEB3 } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEB3:
      return { ...state, web3: action.payload };
    default:
      return state;
  }
}
