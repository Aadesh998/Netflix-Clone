const apikey = "c9a82a0a6526b2f33fbd4e944f84944d"
const apiEndpoint = "https://api.themoviedb.org/3"
const imgPath = "https://image.tmdb.org/t/p/original";
const movie_detail_http = "https://api.themoviedb.org/3/movie";
const movie_genres_http = "https://api.themoviedb.org/3/discover/movie?";
const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    fetchTrending: `${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`
}