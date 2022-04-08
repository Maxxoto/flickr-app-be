const jsonpClient = require('jsonp-client');
const util = require('util');

const getFlickrPublicPhotos = () => {
  const jsonpClientNew = util.promisify(jsonpClient);
  const response = jsonpClientNew(process.env.FLICK_PUBLIC_PHOTOS_ENDPOINT)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
  return response;
};

exports.getFlickrPublicPhotos = getFlickrPublicPhotos;
