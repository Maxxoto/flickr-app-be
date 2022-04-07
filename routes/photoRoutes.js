const getFlickrPublicPhotos = require('../services/flickrService');

module.exports = (app) => {
  app.get('/api/photos', (req, res) => {
    // TODO : run flickrService
    // TODO : Param check for user , if user make a search request
    // TODO : transform response flickrService to our response format
    res.send('Hello All !');
  });
};
