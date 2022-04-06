import axios from "axios";

export default async function fetchImages(searchQuery, page) {
  const BASEURL = "https://pixabay.com/api";
  const APIKEY = "22674191-752cb48b0c59e5e1d0dc96fed";
  const OPTIONS = "image_type=photo&orientation=horizontal&safesearch=true";
  const PERPAGE = 12;
  const url = `${BASEURL}/?key=${APIKEY}&q=${searchQuery}&${OPTIONS}&page=${page}&per_page=${PERPAGE}`;
  const respObj = await axios.get(url).then((pics) => {
    const hitsArray = pics.data.hits.map((pic) => {
      const { id, largeImageURL, previewURL, tags } = pic;
      return {
        id,
        largeImageURL,
        previewURL,
        tags,
      };
    });
    const response = {
      hits: hitsArray,
      total: pics.data.total,
      totalHits: pics.data.totalHits,
      status: pics.status,
    };
    return response;
  });
  return respObj;
}
