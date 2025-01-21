const url = 'https://youtube-v3-lite.p.rapidapi.com/search?channelId=UC4BdgUu2rouVC720GiQmNrg&part=id%2Csnippet';

const content = null || document.getElementById ( 'content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '14826b8ed8mshb119e6ac5123a6cp1adf5ajsn57b1be75e381',
		'x-rapidapi-host': 'youtube-v3-lite.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
	const data = await response.json();
}


(async ()=>{
    try {
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
             <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>`).slice(0,4).join('')}
       `;
    } catch (error) {
        console.error(error);
    }

}) ();


