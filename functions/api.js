require('dotenv').config();
const axios = require('axios');

exports.handler = async (event) => {
  const queryParams = event.queryStringParameters;
  const query = queryParams.q || 'All';
  const page = queryParams.page || 1;
  const pageSize = 10;
  const apiKey = process.env.NEWSAPI_KEY;
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error fetching data',
    };
  }
};
