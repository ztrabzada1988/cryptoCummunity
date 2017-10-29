import coinReducer from './coinReducer';

import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  coins: coinReducer,
  toastr: toastrReducer // <- Mounted at toastr.
})
