import { RETRIEVE_TUTORIALS } from "../action/type";

const initialState = {
  products: [{
    id: 1,
    title: "hello"
  }]
};

function megaFormReducer(state = initialState, { type, payload }) {

  switch (type) {
    case RETRIEVE_TUTORIALS:
      return { ...state, products: payload };

    default:
      return state;
  }
}

export default megaFormReducer;
