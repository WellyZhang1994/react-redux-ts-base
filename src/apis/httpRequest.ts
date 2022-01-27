import axios from 'axios'

//get self ip
const BACKEND_URL = 'https://api.ipify.org?format=json'
export default axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-type": "application/json",
      //"authorization": "key"
    }
});
