const dotenv = require("dotenv");
const fetch = require('node-fetch');
dotenv.config();



async function getVideoKey(id) {
  const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWMwYmU3MjA2ZDQ1ZWNmMWZmMTQ1MDQwYmFjN2ZmMyIsInN1YiI6IjY1Nzk4YTQ1NTY0ZWM3MDBhY2Q1OWYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RYeBSUV4IgyRUVOuMH7x2Eq_nYufgFKFH6yrfS1usdM'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const key = data.results[0].key;
      // console.log('Video Key:', key);
      return key;
    } else {
      console.error('No video key found.');
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function getAnimeData() {
  let animeList = [];
  const apiKey = process.env.MOVIE_DB_API_KEY;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer c8e37a819c856aff51d6efd1114d3534'
    }
  };

  for (let index = 1; index <= 1; index++) {
    try {
      const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${index}&sort_by=popularity.desc&with_genres=16&with_origin_country=JP&api_key=${apiKey}`;
      const response = await fetch(url, options);
      const animeData = await response.json();

      animeList.push(...animeData.results);
    } catch (err) {
      console.error('Error:', err);
      throw err;
    }
  }

  //Editer les liens
  for (const element of animeList) {
    //Le lien du backdrop
    const standartPath = "https://image.tmdb.org/t/p/original";
    const backdrop = element.backdrop_path;
    element.backdrop_path = standartPath + backdrop;

    //Pour celui du poster
    const poster = element.poster_path;
    element.poster_path = standartPath + poster;

    //Poue celui de la video
    try {
      const key = await getVideoKey(element.id);
      element.url = `https://www.youtube.com/embed/${key}`;
    } catch (error) {
      console.error('Error fetching video key:', error);
      // Gérer l'erreur selon vos besoins
      // Par exemple, vous pourriez attribuer une valeur par défaut à element.url
      element.url = 'https://www.youtube.com/embed/-G9BqkgZXRA';
    }

  };
  console.log(animeList)
  return animeList;
};

module.exports = { getAnimeData };