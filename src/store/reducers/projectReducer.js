import { GET_ALL_PROJECT } from "./../constant/const";
const initState = {};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECT:
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
