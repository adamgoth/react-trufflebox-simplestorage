import getWeb3 from '../utils/getWeb3'

export const GET_WEB3 = 'get_web3';

export function getWeb3Instance() {
  const request = getWeb3
    .then(results => console.log(results));

  return {
    type: GET_WEB3,
    payload: request
  }
}
