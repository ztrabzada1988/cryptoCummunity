import { GRAB_COIN_DATA } from '../actions';

export default (state={}, action) => {
  switch(action.type) {
    case GRAB_COIN_DATA:
      console.log('coin data from reducer', action.payload.data);
      return {
        ...state,
        [action.payload.data]: action.payload.data
      }
    default:
      return state;
  }
}
