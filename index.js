const express = require('express');
const app = express();

const LOCAL_PORT = 80;
const REDIRECT_PORT = 6285;

app.get('*', (request, response) => {
  const url = `http://${request.hostname}:${REDIRECT_PORT}${request.originalUrl}`;
  response.redirect(301, url);
})

app.listen(LOCAL_PORT, () => {
  console.log('server has been started');
})
