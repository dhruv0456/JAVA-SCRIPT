const API_KEY = 'http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search');

getMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

function getMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => showMovies(data.results))
    .catch(err => console.error(err));
}

function showMovies(movies) {
  movieContainer.innerHTML = '';
  movies.forEach(movie => {
    const { title, poster_path, vote_average } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="title">${title}</div>
      <div class="rating">⭐ ${vote_average}</div>
    `;
    movieContainer.appendChild(movieEl);
  });
}


searchInput.addEventListener('keyup', (e) => {
  const query = e.target.value.trim();
  if (query.length > 1) {
    getMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  } else {
    getMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  }
});