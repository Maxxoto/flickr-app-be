const axios = require('axios').default;

const getFlickrPublicPhotos = async () => {
  try {
    const response = await axios.get(process.env.FLICK_PUBLIC_PHOTOS_ENDPOINT);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getFlickrPublicPhotos = getFlickrPublicPhotos;
