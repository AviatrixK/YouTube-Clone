const searchQuery = window.location.search;
const queryArray = searchQuery.split("=");
const videoId = queryArray[queryArray.length - 1];

const iframeElem = document.getElementsByTagName('iframe')[0];
iframeElem.setAttribute('src',`https://www.youtube.com/embed/${videoId}`)