import axios from 'axios';
// const axios = require('axios');

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults : 300,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
}

// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//     params: {
//         maxResults: 48,
//     },
//     headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     },
// };

// export const fetchFromAPI = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     console.log(data)
//     return data;
// };