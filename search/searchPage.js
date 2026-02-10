const searchQuery = window.location.search;
// console.log("searchQuery :", searchQuery);
const queryArray = searchQuery.split("=");
const encodedSearchText = queryArray[queryArray.length - 1];
console.log("search text -->", decodeURI(encodedSearchText));

let cursor = null;
const rootElem = document.getElementById("search-cards-container");
const loadingContainer = document.getElementById("search-loading-container");
let isLoading = false;
// const searchText = queryArray.pop();
const getSearchResults = () => {
  let url = `https://youtube138.p.rapidapi.com/search/?q=${encodedSearchText}&hl=en&gl=US`;
  if (cursor) {
    url += `&cursor=${cursor}`;
  }
  const requests = fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
      "x-rapidapi-key": "8219facd7amshd73877b102f1cb9p1be75djsne48b08de4390",
    },
  });

  loadingContainer.style.display = "grid";
  isLoading = true;
  requests
    .then((response) => {
      const pr2 = response.json();
      pr2.then((data) => {
        isLoading = false;
        renderSearchResults(data);
        loadingContainer.style.display = "none";
      });
    })
    .catch((err) => {
      alert("Failed to get search results:", err.message);
    });
};

const renderSearchResults = (data) => {
  const { contents, cursorNext } = data;
  cursor = cursorNext;

  contents.forEach((obj) => {
    const { video } = obj;
    console.log("video:", video);
    const {
      thumbnails,
      title,
      descriptionSnippet,
      publishedTimeText,
      stats,
      videoId,
    } = video || {};

    const newDiv = document.createElement("div");
    newDiv.className = "search-result-video-card";

    newDiv.innerHTML = `
            <div class="thumbnail-container">
                <img src='${thumbnails.pop().url}' width='100%'>
            </div>
            <div class="video-data-container">
                <p>${title}</p>
                <p>${stats?.views}</p>
                <p>${publishedTimeText}</p>
                <p>${descriptionSnippet}</p>
            </div>
        `;

    newDiv.addEventListener("click", () => {
      window.open(`../view/index.html?videoId=${videoId}`, "_self");
    });

    rootElem.append(newDiv);
  });
};
getSearchResults();

// ------------------------ INTERSECTION OBSERVER FOR INFINITE LOADER---------------------------

const options = {
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const handleInfiniteSearch = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.1 && !isLoading) {
      console.log("FOUND!", entry.intersectionRatio);
      getSearchResults();
    }
  });
};

const observer = new IntersectionObserver(handleInfiniteSearch, options);

const targetElement = document.getElementById("search-end-element");

observer.observe(targetElement);
