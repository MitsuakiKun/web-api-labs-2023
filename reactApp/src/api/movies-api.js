export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5fed4c8919117b99f6d873fcef3da81f&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };