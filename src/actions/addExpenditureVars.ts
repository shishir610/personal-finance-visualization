export const ADD_REGULAR = "ADD_REGULAR";
export const ADD_MISC = "ADD_MISC";

export const addRegular = () => {
  return {
    type: ADD_REGULAR,
    payload: {
      name: "",
      vals: [0, 0, 0, 0, 0, 0, 0],
    },
  };
};

export const addMiscellaneous = () => {
  return {
    type: ADD_MISC,
    payload: {
      name: "",
      vals: [0, 0, 0, 0, 0, 0, 0],
    },
  };
};
