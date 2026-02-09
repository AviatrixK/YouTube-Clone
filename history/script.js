const val = window.localStorage.getItem("video_history");
console.log(typeof val);
console.log(val);
// const arr = JSON.stringify();//to convert JS Object into JSON  
const arr = JSON.parse(val);//to convert JSON into JS Object
console.log("arr:",arr);
console.log("typeof_arr:",typeof arr);