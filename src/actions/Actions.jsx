const actionCreatorGetData = (payload) => {
  return {
    type: "GET_DATA",
    payload,
  };
};

const actionCreatorShowModal = () => {
  return {
    type: "MODAL",
  };
};

export const getData = () => (dispatch) => {
  fetch(
    "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  )
    .then((data) => data.json())
    .then((data) => dispatch(actionCreatorGetData(data)));
};

export const toggleModal = () => (dispatch) =>
  dispatch(actionCreatorShowModal());
