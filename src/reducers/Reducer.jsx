const initialState = {
  data: [],
  showModal: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "MODAL":
      return { ...state, showModal: !state.showModal };

    default:
      return state;
  }
};
