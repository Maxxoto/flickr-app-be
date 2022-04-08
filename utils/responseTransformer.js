module.exports = (response) => {
  if (response && response.items) {
    const formattedResponse = response.items.map((val) => {
      return {
        title: val.title,
        media_url: val.media.m,
        tags: val.tags,
      };
    });
    return {
      images: formattedResponse,
    };
  }
};
