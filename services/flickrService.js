const jsonpClient = require('jsonp-client');
const util = require('util');

const getFlickrPublicPhotos = (tags_query) => {
  const jsonpClientNew = util.promisify(jsonpClient);

  let url = process.env.FLICK_PUBLIC_PHOTOS_ENDPOINT;

  if (tags_query) {
    url = url + '&tags=' + tags_query;
    // Use most relevant tags mode by selecting tagmode = all
    url = url + '&tagmode=all';
  }
  console.debug('URL run : ' + url);

  const response = jsonpClientNew(url)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return {
        error: 'Error while fetching flickr public photos ',
        msg: err,
      };
    });
  return response;
};

exports.getFlickrPublicPhotos = getFlickrPublicPhotos;
