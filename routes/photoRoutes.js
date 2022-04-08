const flickrService = require('../services/flickrService');

const responseFormatter = require('../utils/responseFormatter');
const responseTransformer = require('../utils/responseTransformer');

module.exports = (app) => {
  app.get('/api/photos', async (req, res) => {
    // Extract only tags from query string
    const tags_query = req.query.tags;
    console.log(tags_query);

    const flickrResponse = await flickrService.getFlickrPublicPhotos(
      tags_query,
    );

    if (flickrResponse.error) {
      console.error(flickrResponse);
      res
        .status(400)
        .send(
          responseFormatter(
            400,
            flickrResponse.error,
            flickrResponse.msg.toString(),
          ),
        );
    } else {
      const formattedFlickrResponse = responseTransformer(flickrResponse);
      res.send(responseFormatter(200, 'Success', formattedFlickrResponse));
    }
  });
};
