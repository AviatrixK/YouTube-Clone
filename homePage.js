const getTrendingVideos = () =>{
    const request = fetch("https://youtube138.p.rapidapi.com/v2/trending",{
        method: 'GET',
        headers: {
            "x-rapidapi-host":"youtube138.p.rapidapi.com",
            "x-rapidapi-key":"8219facd7amshd73877b102f1cb9p1be75djsne48b08de4390"
        },
    });
    request.then((resp) =>{
        const pr2 = resp.json();
        pr2.then((data) =>{
            showTrendingVideos(data);
        })
    });
}
getTrendingVideos();

let id = null;

const getSuggestionAPI = (searchText) => {
    console.log("API called",searchText);
    const request = fetch(
        `https://youtube138.p.rapidapi.com/auto-complete/?q=${searchText}&hl=en&gl=US`,
        {
        method: "GET",
        headers: {
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
            "x-rapidapi-key": "8219facd7amshd73877b102f1cb9p1be75djsne48b08de4390",
        },
        },
    );
    request
        .then((response) => {
            const pr2 = response.json();
            pr2.then((data) => {
                renderSuggestionsList(data)
            });
        })
        .catch((err) => {
            alert("Suggestions Error:", err.message);
        });
};

const getSmartSuggestionAPI = (txt) => {
    clearTimeout(id);
    id = setTimeout(() =>{getSuggestionAPI(txt);
    }, 600);    
}

// const data = {
//   status: "success",
//   list: [
//     {
//       type: "video",
//       title:
//         "Epstein Files Pull Gates & Clintons Back Into Scandal w/ Rep. Jared Moskowitz | PBD #733",
//       videoId: "KFSv_ZPDY3g",
//       author: "PBD Podcast",
//       authorId: "UCGX7nGXpz-CmO_Arg-cgJ7A",
//       authorUrl: "/channel/UCGX7nGXpz-CmO_Arg-cgJ7A",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/d2IID2loX1_ET_6U5qMAap97jQfBjAz9qXXRRDBclOsll4Fqm88MQQFNoUEas8kSdwLZlk32=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/d2IID2loX1_ET_6U5qMAap97jQfBjAz9qXXRRDBclOsll4Fqm88MQQFNoUEas8kSdwLZlk32=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/d2IID2loX1_ET_6U5qMAap97jQfBjAz9qXXRRDBclOsll4Fqm88MQQFNoUEas8kSdwLZlk32=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/d2IID2loX1_ET_6U5qMAap97jQfBjAz9qXXRRDBclOsll4Fqm88MQQFNoUEas8kSdwLZlk32=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/d2IID2loX1_ET_6U5qMAap97jQfBjAz9qXXRRDBclOsll4Fqm88MQQFNoUEas8kSdwLZlk32=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/d2IID2loX1_ET_6U5qMAap97jQfBjAz9qXXRRDBclOsll4Fqm88MQQFNoUEas8kSdwLZlk32=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/KFSv_ZPDY3g/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Patrick Bet-David, Tom Ellsworth, Adam Sosnick, and Vincent Oshana are joiined by Rep. Jared Moskowitz as they break down Donald Trump and Xi Jinping’s call ahead of a U.S. state visit to...",
//       descriptionHtml:
//         "Patrick Bet-David, Tom Ellsworth, Adam Sosnick, and Vincent Oshana are joiined by Rep. Jared Moskowitz as they break down Donald Trump and Xi Jinping’s call ahead of a U.S. state visit to...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title:
//         "🚨 LIVE: Trump Orders Evacuations In Iran - Nuclear Talks FAIL Day One",
//       videoId: "ueAVqL6xfJA",
//       author: "Tousi TV",
//       authorId: "UCjJec0wv1EUomjrBNt1xCTA",
//       authorUrl: "/channel/UCjJec0wv1EUomjrBNt1xCTA",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/UCcVkDOYvnRhXcDlEpFQ4zVFLONGggdWRtC8QdGwJ93UD1TPYJmb82Y_8p-j3SS9Z9jz4aE=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/UCcVkDOYvnRhXcDlEpFQ4zVFLONGggdWRtC8QdGwJ93UD1TPYJmb82Y_8p-j3SS9Z9jz4aE=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/UCcVkDOYvnRhXcDlEpFQ4zVFLONGggdWRtC8QdGwJ93UD1TPYJmb82Y_8p-j3SS9Z9jz4aE=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/UCcVkDOYvnRhXcDlEpFQ4zVFLONGggdWRtC8QdGwJ93UD1TPYJmb82Y_8p-j3SS9Z9jz4aE=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/UCcVkDOYvnRhXcDlEpFQ4zVFLONGggdWRtC8QdGwJ93UD1TPYJmb82Y_8p-j3SS9Z9jz4aE=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/UCcVkDOYvnRhXcDlEpFQ4zVFLONGggdWRtC8QdGwJ93UD1TPYJmb82Y_8p-j3SS9Z9jz4aE=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/ueAVqL6xfJA/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "🔴 Become a member of Tousi TV+ and unlock exclusive documentaries and original series. Join as an annual member today and get ONE month FREE at https://tousi.tv\n\n📲 Watch Tousi TV anytime...",
//       descriptionHtml:
//         "🔴 Become a member of Tousi TV+ and unlock exclusive documentaries and original series. Join as an annual member today and get ONE month FREE at https://tousi.tv<br><br>📲 Watch Tousi TV anytime...",
//       viewCount: 103722,
//       viewCountText: "103K views",
//       published: 1770389007,
//       publishedText: "6 minutes ago",
//       lengthSeconds: 2561,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title:
//         "Kylie & Travis on Babysitting All Four Nieces, Best Man Speeches & First Impression Mai Tais | Ep 53",
//       videoId: "pTaAH2fPwpY",
//       author: "Not Gonna Lie with Kylie Kelce",
//       authorId: "UCmCEofjQiLDJYUCFu_zlfPA",
//       authorUrl: "/channel/UCmCEofjQiLDJYUCFu_zlfPA",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/0T2cmvSeiiYzAkQNaEYHm_GgRcmGMaL4s3-bePX1X_64ZADOej9M4fl6Rmti84SLve-qRx7-cQ=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/0T2cmvSeiiYzAkQNaEYHm_GgRcmGMaL4s3-bePX1X_64ZADOej9M4fl6Rmti84SLve-qRx7-cQ=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/0T2cmvSeiiYzAkQNaEYHm_GgRcmGMaL4s3-bePX1X_64ZADOej9M4fl6Rmti84SLve-qRx7-cQ=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/0T2cmvSeiiYzAkQNaEYHm_GgRcmGMaL4s3-bePX1X_64ZADOej9M4fl6Rmti84SLve-qRx7-cQ=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/0T2cmvSeiiYzAkQNaEYHm_GgRcmGMaL4s3-bePX1X_64ZADOej9M4fl6Rmti84SLve-qRx7-cQ=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/0T2cmvSeiiYzAkQNaEYHm_GgRcmGMaL4s3-bePX1X_64ZADOej9M4fl6Rmti84SLve-qRx7-cQ=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/pTaAH2fPwpY/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "The highly-anticipated Uncle Trav special is finally here! Kylie is joined by her brother-in-law Travis for an ELECTRIC Super Bowl episode of Not Gonna Lie brought to you by Intuit TurboTax!...",
//       descriptionHtml:
//         "The highly-anticipated Uncle Trav special is finally here! Kylie is joined by her brother-in-law Travis for an ELECTRIC Super Bowl episode of Not Gonna Lie brought to you by Intuit TurboTax!...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 4632,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "FURIA vs. Aurora Gaming - IEM Krakow 2026 - Quarterfinal",
//       videoId: "Nv3zIfqKitw",
//       author: "ESL Counter-Strike",
//       authorId: "UCPq2ETz4aAGo2Z-8JisDPIA",
//       authorUrl: "/channel/UCPq2ETz4aAGo2Z-8JisDPIA",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/0B4FwJgBAM3cotFdPkKrUIXCY2h-LrDfPhxn_7L-OY15RaHnkJu-de0qgLs5fnN334wEZu_xyQ=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/0B4FwJgBAM3cotFdPkKrUIXCY2h-LrDfPhxn_7L-OY15RaHnkJu-de0qgLs5fnN334wEZu_xyQ=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/0B4FwJgBAM3cotFdPkKrUIXCY2h-LrDfPhxn_7L-OY15RaHnkJu-de0qgLs5fnN334wEZu_xyQ=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/0B4FwJgBAM3cotFdPkKrUIXCY2h-LrDfPhxn_7L-OY15RaHnkJu-de0qgLs5fnN334wEZu_xyQ=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/0B4FwJgBAM3cotFdPkKrUIXCY2h-LrDfPhxn_7L-OY15RaHnkJu-de0qgLs5fnN334wEZu_xyQ=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/0B4FwJgBAM3cotFdPkKrUIXCY2h-LrDfPhxn_7L-OY15RaHnkJu-de0qgLs5fnN334wEZu_xyQ=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/Nv3zIfqKitw/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Join the discussion:\nhttp://www.twitter.com/eslcs\nhttp://www.facebook.com/eslcs\nhttp://www.instagram.com/eslcs\n\nhttp://www.twitter.com/iem\nhttp://www.facebook.com/iem\n\nWatch live on Twitch:...",
//       descriptionHtml:
//         "Join the discussion:<br>http://www.twitter.com/eslcs<br>http://www.facebook.com/eslcs<br>http://www.instagram.com/eslcs<br><br>http://www.twitter.com/iem<br>http://www.facebook.com/iem<br><br>Watch live on Twitch:...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "9200+ Knocks",
//       videoId: "zyV-fZ231Uo",
//       author: "Tfue",
//       authorId: "UC9lSZSYpDDE18hoFA7YlBpw",
//       authorUrl: "/channel/UC9lSZSYpDDE18hoFA7YlBpw",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/UoWSlBJi8hFTSIuDh_FCSe4RjzP25uE0KVtiuT2rHRnFbyJ8dxEhXWUgiI-4KGmA26aYtrBu3A=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/UoWSlBJi8hFTSIuDh_FCSe4RjzP25uE0KVtiuT2rHRnFbyJ8dxEhXWUgiI-4KGmA26aYtrBu3A=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/UoWSlBJi8hFTSIuDh_FCSe4RjzP25uE0KVtiuT2rHRnFbyJ8dxEhXWUgiI-4KGmA26aYtrBu3A=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/UoWSlBJi8hFTSIuDh_FCSe4RjzP25uE0KVtiuT2rHRnFbyJ8dxEhXWUgiI-4KGmA26aYtrBu3A=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/UoWSlBJi8hFTSIuDh_FCSe4RjzP25uE0KVtiuT2rHRnFbyJ8dxEhXWUgiI-4KGmA26aYtrBu3A=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/UoWSlBJi8hFTSIuDh_FCSe4RjzP25uE0KVtiuT2rHRnFbyJ8dxEhXWUgiI-4KGmA26aYtrBu3A=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/zyV-fZ231Uo/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Watch me LIVE everyday on Twitch► Twitch.tv/Tfue\nFollow me on Twitter ►https://www.twitter.com/tfue\nFollow me on Instagram ► https://www.instagram.com/tfue\n\n#arcraiders  #tfue",
//       descriptionHtml:
//         "Watch me LIVE everyday on Twitch► Twitch.tv/Tfue<br>Follow me on Twitter ►https://www.twitter.com/tfue<br>Follow me on Instagram ► https://www.instagram.com/tfue<br><br>#arcraiders  #tfue",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "lofi hip hop radio 📚 beats to relax/study to",
//       videoId: "jfKfPfyJRdk",
//       author: "Lofi Girl",
//       authorId: "UCSJ4gkVC6NrvII8umztf0Ow",
//       authorUrl: "/channel/UCSJ4gkVC6NrvII8umztf0Ow",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/_BSh2VVvVMzqBoKyWbQnyC35XFOV-ZbXavf9nfu3ZjpFUGEImQnlWt9ZlpfGQBqWEbGNc4rPWg=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/_BSh2VVvVMzqBoKyWbQnyC35XFOV-ZbXavf9nfu3ZjpFUGEImQnlWt9ZlpfGQBqWEbGNc4rPWg=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/_BSh2VVvVMzqBoKyWbQnyC35XFOV-ZbXavf9nfu3ZjpFUGEImQnlWt9ZlpfGQBqWEbGNc4rPWg=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/_BSh2VVvVMzqBoKyWbQnyC35XFOV-ZbXavf9nfu3ZjpFUGEImQnlWt9ZlpfGQBqWEbGNc4rPWg=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/_BSh2VVvVMzqBoKyWbQnyC35XFOV-ZbXavf9nfu3ZjpFUGEImQnlWt9ZlpfGQBqWEbGNc4rPWg=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/_BSh2VVvVMzqBoKyWbQnyC35XFOV-ZbXavf9nfu3ZjpFUGEImQnlWt9ZlpfGQBqWEbGNc4rPWg=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/jfKfPfyJRdk/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "🎼 | Listen on Spotify, Apple music and more\n→  https://link.lofigirl.com/m/music\n\n🌎 | Lofi Girl on all social media\n→  https://link.lofigirl.com/m/Community\n\n🌐| Our Websites\n→...",
//       descriptionHtml:
//         "🎼 | Listen on Spotify, Apple music and more<br>→  https://link.lofigirl.com/m/music<br><br>🌎 | Lofi Girl on all social media<br>→  https://link.lofigirl.com/m/Community<br><br>🌐| Our Websites<br>→...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title:
//         '"We Need Proof of Life": Nancy Guthrie Missing: Savannah\'s Heartbreaking Plea for Missing Mom | LIVE',
//       videoId: "tYImcKlfXTM",
//       author: "CNN-News18",
//       authorId: "UCef1-8eOpJgud7szVPlZQAQ",
//       authorUrl: "/channel/UCef1-8eOpJgud7szVPlZQAQ",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/tYImcKlfXTM/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "The disappearance of Nancy Guthrie, the 84-year-old mother of Today show co-anchor Savannah Guthrie, has escalated into a high-stakes federal kidnapping investigation. As of Friday, February...",
//       descriptionHtml:
//         "The disappearance of Nancy Guthrie, the 84-year-old mother of Today show co-anchor Savannah Guthrie, has escalated into a high-stakes federal kidnapping investigation. As of Friday, February...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "Big Bear Bald Eagle Live Nest - Cam 1",
//       videoId: "B4-L2nfGcuE",
//       author: "FOBBV CAM",
//       authorId: "UCsFgbVuhRrPV5FqyN7kOD8g",
//       authorUrl: "/channel/UCsFgbVuhRrPV5FqyN7kOD8g",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/PNCh6QMJG29Y8jWYUVN1olsu24IqK9QX_-BA7g3cUZoYlf9ocxSGAfFCB-HY68y1w4Cnj4mJ=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/PNCh6QMJG29Y8jWYUVN1olsu24IqK9QX_-BA7g3cUZoYlf9ocxSGAfFCB-HY68y1w4Cnj4mJ=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/PNCh6QMJG29Y8jWYUVN1olsu24IqK9QX_-BA7g3cUZoYlf9ocxSGAfFCB-HY68y1w4Cnj4mJ=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/PNCh6QMJG29Y8jWYUVN1olsu24IqK9QX_-BA7g3cUZoYlf9ocxSGAfFCB-HY68y1w4Cnj4mJ=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/PNCh6QMJG29Y8jWYUVN1olsu24IqK9QX_-BA7g3cUZoYlf9ocxSGAfFCB-HY68y1w4Cnj4mJ=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/PNCh6QMJG29Y8jWYUVN1olsu24IqK9QX_-BA7g3cUZoYlf9ocxSGAfFCB-HY68y1w4Cnj4mJ=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/B4-L2nfGcuE/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "This live feed is owned and operated by Friends of Big Bear Valley, a 501c3 nonprofit. Any public use of the live video or screen captures, requires prior approval and credit to the organization....",
//       descriptionHtml:
//         "This live feed is owned and operated by Friends of Big Bear Valley, a 501c3 nonprofit. Any public use of the live video or screen captures, requires prior approval and credit to the organization....",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "MICRO VÉRITÉ ( 6 FÉVRIER 2026 ) Radio Télé Éclair",
//       videoId: "_BSFHqjNlRI",
//       author: "Radio Tele Eclair",
//       authorId: "UCOvGbDh5biuOqjx6G3CdrQg",
//       authorUrl: "/channel/UCOvGbDh5biuOqjx6G3CdrQg",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/ekRcyuFl8-J8-DlaUf2Zmjb2344cvhf4XJxnv3HYDmmUBe0_54vHRQpPfr6CyDUs9dMwKMsV=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/ekRcyuFl8-J8-DlaUf2Zmjb2344cvhf4XJxnv3HYDmmUBe0_54vHRQpPfr6CyDUs9dMwKMsV=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/ekRcyuFl8-J8-DlaUf2Zmjb2344cvhf4XJxnv3HYDmmUBe0_54vHRQpPfr6CyDUs9dMwKMsV=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/ekRcyuFl8-J8-DlaUf2Zmjb2344cvhf4XJxnv3HYDmmUBe0_54vHRQpPfr6CyDUs9dMwKMsV=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/ekRcyuFl8-J8-DlaUf2Zmjb2344cvhf4XJxnv3HYDmmUBe0_54vHRQpPfr6CyDUs9dMwKMsV=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/ekRcyuFl8-J8-DlaUf2Zmjb2344cvhf4XJxnv3HYDmmUBe0_54vHRQpPfr6CyDUs9dMwKMsV=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/_BSFHqjNlRI/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Welcome to Radio Tele Eclair 100.5 FM & Channel 04 Haiti \nPa Bliye Abòne sou chanèl la pou w pa rate Okenn Emisyon nou yo \nMatin Debat se chak Maten apati 10è sou 100.5 FM ak Chèn 4 Radio...",
//       descriptionHtml:
//         "Welcome to Radio Tele Eclair 100.5 FM &amp; Channel 04 Haiti <br>Pa Bliye Abòne sou chanèl la pou w pa rate Okenn Emisyon nou yo <br>Matin Debat se chak Maten apati 10è sou 100.5 FM ak Chèn 4 Radio...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "LIVE: NBC News NOW - Feb. 6",
//       videoId: "nxvD57sJ6zo",
//       author: "NBC News",
//       authorId: "UCeY0bbntWzzVIaj2z3QigXg",
//       authorUrl: "/channel/UCeY0bbntWzzVIaj2z3QigXg",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/nxvD57sJ6zo/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "NBC News NOW is live, reporting breaking news and developing stories in real time. We are on the scene, covering the most important stories of the day and taking deep dives on issues you care...",
//       descriptionHtml:
//         "NBC News NOW is live, reporting breaking news and developing stories in real time. We are on the scene, covering the most important stories of the day and taking deep dives on issues you care...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "Bloomberg Business News Live",
//       videoId: "iEpJwprxDdk",
//       author: "Bloomberg Television",
//       authorId: "UCIALMKvObZNtJ6AmdCLP7Lg",
//       authorUrl: "/channel/UCIALMKvObZNtJ6AmdCLP7Lg",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/4-w44catDebzaDSUWgereql0G5_z5o7VpJXuIYL_eZ3H1vXy0lTmrole9V500jTUXCnQPZ5CuKQ=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/4-w44catDebzaDSUWgereql0G5_z5o7VpJXuIYL_eZ3H1vXy0lTmrole9V500jTUXCnQPZ5CuKQ=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/4-w44catDebzaDSUWgereql0G5_z5o7VpJXuIYL_eZ3H1vXy0lTmrole9V500jTUXCnQPZ5CuKQ=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/4-w44catDebzaDSUWgereql0G5_z5o7VpJXuIYL_eZ3H1vXy0lTmrole9V500jTUXCnQPZ5CuKQ=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/4-w44catDebzaDSUWgereql0G5_z5o7VpJXuIYL_eZ3H1vXy0lTmrole9V500jTUXCnQPZ5CuKQ=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/4-w44catDebzaDSUWgereql0G5_z5o7VpJXuIYL_eZ3H1vXy0lTmrole9V500jTUXCnQPZ5CuKQ=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/iEpJwprxDdk/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Programming schedule (EST):\n12:00 AM - 5:00 AM: Bloomberg Global Business News\n5:00 AM - 6:00 AM Bloomberg Brief\n6:00 AM - 9:00 AM: Bloomberg Surveillance\n9:00 AM - 10:00 AM: Bloomberg Open...",
//       descriptionHtml:
//         "Programming schedule (EST):<br>12:00 AM - 5:00 AM: Bloomberg Global Business News<br>5:00 AM - 6:00 AM Bloomberg Brief<br>6:00 AM - 9:00 AM: Bloomberg Surveillance<br>9:00 AM - 10:00 AM: Bloomberg Open...",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "Live from St. Louis airport",
//       videoId: "uflNixVWNUY",
//       author: "Ima Survivor Sanctuary",
//       authorId: "UCQjLeVT-g6CfVIUmz_jqHiA",
//       authorUrl: "/channel/UCQjLeVT-g6CfVIUmz_jqHiA",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/-h0tAoqKGn3-LP1GYIn7ulgr7Lm-c3oR4NzBjgdGnF7Hni0qJP5Y_rpyIjOTjqLIMjLjgy-29w=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/-h0tAoqKGn3-LP1GYIn7ulgr7Lm-c3oR4NzBjgdGnF7Hni0qJP5Y_rpyIjOTjqLIMjLjgy-29w=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/-h0tAoqKGn3-LP1GYIn7ulgr7Lm-c3oR4NzBjgdGnF7Hni0qJP5Y_rpyIjOTjqLIMjLjgy-29w=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/-h0tAoqKGn3-LP1GYIn7ulgr7Lm-c3oR4NzBjgdGnF7Hni0qJP5Y_rpyIjOTjqLIMjLjgy-29w=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/-h0tAoqKGn3-LP1GYIn7ulgr7Lm-c3oR4NzBjgdGnF7Hni0qJP5Y_rpyIjOTjqLIMjLjgy-29w=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/-h0tAoqKGn3-LP1GYIn7ulgr7Lm-c3oR4NzBjgdGnF7Hni0qJP5Y_rpyIjOTjqLIMjLjgy-29w=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/uflNixVWNUY/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description: "",
//       descriptionHtml: "",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title:
//         "LIVE NEWS: US-Iran Nuclear talks begin, Nancy Guthrie search latest,  US drug boat strike & more",
//       videoId: "4EXMZUVfiao",
//       author: "LiveNOW from FOX",
//       authorId: "UCJg9wBPyKMNA5sRDnvzmkdg",
//       authorUrl: "/channel/UCJg9wBPyKMNA5sRDnvzmkdg",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/AqzY5ePezRAQ2136-TbM_88d43JfIovkzztge92WKQ4K_ISfJMFA9yuX0Nw87DLWms4W9r2c3Q=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/AqzY5ePezRAQ2136-TbM_88d43JfIovkzztge92WKQ4K_ISfJMFA9yuX0Nw87DLWms4W9r2c3Q=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/AqzY5ePezRAQ2136-TbM_88d43JfIovkzztge92WKQ4K_ISfJMFA9yuX0Nw87DLWms4W9r2c3Q=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/AqzY5ePezRAQ2136-TbM_88d43JfIovkzztge92WKQ4K_ISfJMFA9yuX0Nw87DLWms4W9r2c3Q=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/AqzY5ePezRAQ2136-TbM_88d43JfIovkzztge92WKQ4K_ISfJMFA9yuX0Nw87DLWms4W9r2c3Q=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/AqzY5ePezRAQ2136-TbM_88d43JfIovkzztge92WKQ4K_ISfJMFA9yuX0Nw87DLWms4W9r2c3Q=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/4EXMZUVfiao/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Subscribe to LiveNOW from FOX! https://www.youtube.com/livenowfox?sub_confirmation=1\nWhere to watch LiveNOW from FOX: https://www.livenowfox.com\nFollow us @LiveNOWFOX on TikTok: https://www.tiktok....",
//       descriptionHtml:
//         "Subscribe to LiveNOW from FOX! https://www.youtube.com/livenowfox?sub_confirmation=1<br>Where to watch LiveNOW from FOX: https://www.livenowfox.com<br>Follow us @LiveNOWFOX on TikTok: https://www.tiktok....",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//     {
//       type: "video",
//       title: "LIVE: ABC News Live - Friday, February 6 | ABC News",
//       videoId: "7_xJgSz5d4M",
//       author: "ABC News",
//       authorId: "UCBi2mrWuNuyYy4gbM6fU18Q",
//       authorUrl: "/channel/UCBi2mrWuNuyYy4gbM6fU18Q",
//       authorVerified: true,
//       authorThumbnails: [
//         {
//           url: "https://yt3.ggpht.com/GJ8V0NX6NddGh9bf4zED4tsjPjjBK2hdp5FWHMy09pV7sdSkkE3yEhCRSch4waEb9ZavyUrWfw=s32-c-k-c0x00ffffff-no-rj",
//           width: 32,
//           height: 32,
//         },
//         {
//           url: "https://yt3.ggpht.com/GJ8V0NX6NddGh9bf4zED4tsjPjjBK2hdp5FWHMy09pV7sdSkkE3yEhCRSch4waEb9ZavyUrWfw=s48-c-k-c0x00ffffff-no-rj",
//           width: 48,
//           height: 48,
//         },
//         {
//           url: "https://yt3.ggpht.com/GJ8V0NX6NddGh9bf4zED4tsjPjjBK2hdp5FWHMy09pV7sdSkkE3yEhCRSch4waEb9ZavyUrWfw=s76-c-k-c0x00ffffff-no-rj",
//           width: 76,
//           height: 76,
//         },
//         {
//           url: "https://yt3.ggpht.com/GJ8V0NX6NddGh9bf4zED4tsjPjjBK2hdp5FWHMy09pV7sdSkkE3yEhCRSch4waEb9ZavyUrWfw=s100-c-k-c0x00ffffff-no-rj",
//           width: 100,
//           height: 100,
//         },
//         {
//           url: "https://yt3.ggpht.com/GJ8V0NX6NddGh9bf4zED4tsjPjjBK2hdp5FWHMy09pV7sdSkkE3yEhCRSch4waEb9ZavyUrWfw=s176-c-k-c0x00ffffff-no-rj",
//           width: 176,
//           height: 176,
//         },
//         {
//           url: "https://yt3.ggpht.com/GJ8V0NX6NddGh9bf4zED4tsjPjjBK2hdp5FWHMy09pV7sdSkkE3yEhCRSch4waEb9ZavyUrWfw=s512-c-k-c0x00ffffff-no-rj",
//           width: 512,
//           height: 512,
//         },
//       ],
//       videoThumbnails: [
//         {
//           quality: "maxresdefault",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/maxresdefault.jpg",
//           width: 1280,
//           height: 720,
//         },
//         {
//           quality: "sddefault",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/sddefault.jpg",
//           width: 640,
//           height: 480,
//         },
//         {
//           quality: "high",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//         {
//           quality: "medium",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         {
//           quality: "default",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "start",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/1.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "middle",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/2.jpg",
//           width: 120,
//           height: 90,
//         },
//         {
//           quality: "end",
//           url: "https://i.ytimg.com/vi/7_xJgSz5d4M/3.jpg",
//           width: 120,
//           height: 90,
//         },
//       ],
//       description:
//         "Subscribe to ABC News on YouTube: https://abcnews.visitlink.me/59aJ1G\n\nABC News is your daily source of breaking national and world news, exclusive interviews and 24/7 live streaming coverage....",
//       descriptionHtml:
//         "Subscribe to ABC News on YouTube: https://abcnews.visitlink.me/59aJ1G<br><br>ABC News is your daily source of breaking national and world news, exclusive interviews and 24/7 live streaming coverage....",
//       viewCount: 0,
//       viewCountText: "0 views",
//       published: 1770389367,
//       publishedText: "0 seconds ago",
//       lengthSeconds: 0,
//       liveNow: false,
//       premium: false,
//       isUpcoming: false,
//       isNew: false,
//       is4k: false,
//       is8k: false,
//       isVr180: false,
//       isVr360: false,
//       is3d: false,
//       hasCaptions: false,
//     },
//   ],
// };

const rootElem = document.getElementById("root");
const searchSuggestionsContainerElement = document.getElementById("search-suggestions-container");
const searchInputElem = document.getElementById("search-text-input");

const showTrendingVideos = (data) => {
  const { list } = data;
  list.forEach((video) => {
    const {
      author,
      title,
      publishedText,
      viewCountText,
      authorThumbnails,
      videoThumbnails,
      videoId,
    } = video;
    const newDiv = document.createElement("div");
    newDiv.className = "video-card";
    newDiv.innerHTML = `
        <div>
            <img class = 'video-thumbnail' src="${videoThumbnails[3].url}">
        </div>
        <div class='card-footer-container'>
            <div class = 'video-author-img-container'> 
                <img src="${authorThumbnails[1].url}">
            </div>
            <div class = 'video-info-container'>
                <p>${title}</p>
                <div class = 'video-metadata-container'>
                    <p>${author}</p>
                    <div class='dot-v1'></div>
                    <p>${viewCountText}</p>
                    <div class='dot-v1'></div>
                    <p>${publishedText}</p>
                </div>
                
            </div>
        </div>            
        `;

        newDiv.addEventListener('click',()=>{
            window.open(`./view/index.html?videoId=${videoId}`,'_self');
        });

    rootElem.appendChild(newDiv);
  });
};


const handleAutoSuggest = (e) => {
  const searchText = e.target.value;
  getSmartSuggestionAPI(searchText)
};

const renderSuggestionsList = (obj) => {
    // const dummyObj = {
    //     query: "comedy",
    //     results : [
    //         "comedy",
    //         "comedy club",
    //         "comedy movies",
    //         "comedy stand up",
    //         "comedy movies 2025 full movie",
    //         "comedy darbar",
    //         "comedy nights with champions",
    //         "comedy scenes telugu",
    //         "comedy movies hindi full",
    //         "comedy movies free",
    //         "comedy special",
    //         "comedy scenes tamil",
    //         "comedy video",
    //         "comedy central",
    //     ],
    // };
    searchSuggestionsContainerElement.innerHTML = "";
    const {query, results} = obj;
    results.slice(0,10).forEach((result) =>{
        const newText = document.createElement('p');
        newText.innerHTML = `<b>${result.substring(0,query.length )}</b>${result.substring(query.length)}`;
        newText.addEventListener('click', (e)=>{
            // console.log("click  ",e.target.innerText);
            searchInputElem.value = e.target.innerText;
            searchSuggestionsContainerElement.innerHTML = "";
        });
            searchSuggestionsContainerElement.appendChild(newText);
    });
};

const handleSearch = () => {
  const val = searchInputElem.value;
  window.open(`./search/search-page.html?searchText=${val}`, '_self');
}
