import axios from 'axios-observable';

const { REACT_APP_API_URL } = process.env;

export default axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});
