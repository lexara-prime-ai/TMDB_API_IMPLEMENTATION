/*

curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY'

curl --request GET \
     --url 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'

*/

/**
* Parameters required to get a single movie
* @param {string} URL - Base url
* @param {string} API_KEY - API key
* @param {string} SHOW_NAME - Show name
* @param {string} FULL_POST_URL - Full path to poster
*
*/

// Selector
let posterWrapper = document.querySelector(".poster-wrapper");
// Sign up at TMDB to get your free/premium API Key
let API_KEY = "XXXX-XXXX-XXXX-XXXX";
let SHOW_NAME = "Show name";
let URL = `https://api.themoviedb.org/3/search/movie?query=${SHOW_NAME}&api_key=${API_KEY}`;
let POSTER_URL = `https://image.tmdb.org/t/p/w500`;

async function req_GET_MOVIE() {
    const request = await fetch(URL);
    let response = await request.json();

    // Target the results
    let shows = response.results;

    // Loop through response and display individual shows
    for (let show of shows) {
        if (show.poster_path !== null) {
            // append results to poster wrapper
            posterWrapper.innerHTML += `
            <img class="poster" src=${POSTER_URL}/${show.poster_path} alt="poster">
        `;
        }
    }
}

req_GET_MOVIE();


