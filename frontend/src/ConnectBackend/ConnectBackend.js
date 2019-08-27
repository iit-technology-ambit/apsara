import axios from 'axios';
import config from '../Config.js';

async function getData(endpoint, data) {
  return await axios
    .get(config.baseurl + endpoint, {
      params: data
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in getData at endpoint ', endpoint, 'is ', err);
      window.location.pathname('/404');
      return err;
    });
}

async function postData(endpoint, data) {
  return await axios
    .post(config.baseurl + endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in postData at endpoint ', endpoint, 'is ', err);
      return err.response.status;
    });
}

let connectBackend = {
  getData,
  postData
};

export default connectBackend;
