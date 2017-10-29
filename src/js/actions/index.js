import axios from 'axios';
import { browserHistory } from 'react-router';
const REDDIT_BASE_URI = `https://www.reddit.com/r`
export const GRAB_COIN_DATA = 'GRAB_COIN_DATA';
export const grabCoinData = value => {
  console.log('coin from action', value);
  const request = axios.get(`${REDDIT_BASE_URI}/${value}/about.json`)
    .then((data)=> console.log('reddit data', data))
  return {
    type: GRAB_COIN_DATA,
    payload: request
  }
}


export const SHOW_DATA = 'GRAB_COIN_DATA';
export const showData = value => {
  console.log('showData from action', value);

  return {
    type: SHOW_DATA,
    payload: value
  }
}
