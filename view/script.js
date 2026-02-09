const searchQuery = window.location.search;
const queryArray = searchQuery.split("=");
const videoId = queryArray[queryArray.length - 1];

const iframeElem = document.getElementsByTagName('iframe')[0];
iframeElem.setAttribute('src',`https://www.youtube.com/embed/${videoId}`);

const val = window.localStorage.getItem("video_history") ?? "[]";  
console.log("val:",val);
const arr = JSON.parse(val);//to convert JSON into JS Object
arr.push(videoId);
console.log(videoId);
const str  = JSON.stringify(arr);//to convert JS object into JSON
window.localStorage.setItem('video_history', str);