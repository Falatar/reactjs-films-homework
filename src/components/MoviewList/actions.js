async function setFilm() {
  const url = 'https://api.themoviedb.org/3/movie/latest?api_key=0f3cfa59da5e9c54b4eebea803330d71&language=en-US';
  const promise = await fetch(url);
  const film = await promise.json();
  return {
    type: 'FORM_MOVIE_LIST',
    payload: film,
  };
}

export default setFilm;
