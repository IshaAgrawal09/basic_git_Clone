export const Save_Data = "Save_Data";

// ACTION CRREATOR
export const save_Username = (username) => {
  return {
    type: Save_Data,
    payload: username,
  };
};
