const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCaYOczuAijTEwISofRAeYHA&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e143592a92mshf7b83d119638165p1de070jsn6889779669e9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// fetch(API, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// FUNCTION AUTOLLAMADA
(async () => {
  try {
    const videos = await fetchData(API);




    
    let view = `
    ${videos.items
      .map((video) => {
        return `
      <div class="group relative">
      <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </a>
    </div>
      `;
      })
      .slice(0, 8)
      .join("")}
    `;

    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
