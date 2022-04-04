import axios from "axios";

export default async function fetchImages(searchQuery, page) {
  const BASEURL = "https://pixabay.com/api";
  const APIKEY = "22674191-752cb48b0c59e5e1d0dc96fed";
  const OPTIONS = "image_type=photo&orientation=horizontal&safesearch=true";
  const PERPAGE = 12;
  const url = `${BASEURL}/?key=${APIKEY}&q=${searchQuery}&${OPTIONS}&page=${page}&per_page=${PERPAGE}`;
  const response = await axios.get(url);
  return response.data;
}
