
export const getStickers = async( category ) => {
  const url = `https://api.giphy.com/v1/stickers/search?q=${ encodeURI(category) }&limit=6&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const stickers = data.map( img => { 
    return {
      id: img.id,
      title: img.title,
      stickerUrl: img.images?.fixed_height_small.url
    }
  })

  return stickers;

};
