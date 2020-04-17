
const initialState = {
  hej: false
};

const countReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'CHANGE_HEJ':
      return {
        ...state,
        parked: action.payload
      };
    default:
      return state;
  }
}
export default countReducer;
