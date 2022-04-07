//Top level import
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

//Services import
require('./services/flickrService');

//Routes import
const PhotoRoute = require('./routes/photoRoutes');

//Additional Import

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
    credentials: true,
  }),
);

app.use(bodyParser.json());

PhotoRoute(app);

app.listen(PORT);
