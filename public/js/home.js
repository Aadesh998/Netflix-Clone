function init() {
    fetchTrendingMovies();
    fetchAndBuildAllSections();
}

function fetchTrendingMovies(){
    fetchAndbuildMovieSection(apiPaths.fetchTrending, 'Trending Now')
    .then(list => {
        const randomIndex = parseInt(Math.random() * list.length);
        buildBannerSection(list[randomIndex]);
    }).catch(err=>{
        console.log(err)
    });
}

function buildBannerSection(movie) {
    const bannerCont = document.getElementById('tranding-now');
    bannerCont.style.backgroundImage = `url('${imgPath}${movie.backdrop_path}')`;

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="trand">
        <h1 class="trand-title">${movie.title}</h1>
        <p class="trand-additional">Trending in Movies | Released - ${movie.release_date}</p>
        <p class="desc">${movie.overview && movie.overview.length > 200 ? movie.overview.slice(0, 200).trim() + '...' : movie.overview}
        </p>
    </div>
    <div class="trand-button">
        <button class="trand-add">play now</button>
        <button class="trand-watch">watch list</button>
    </div>
        `;
    div.className = "tranding-banner";

    bannerCont.append(div);

}

function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res => {
            const movies = res.genres;
            if (Array.isArray(movies) && movies.length) {
                movies.forEach(moviess => {
                    fetchAndbuildMovieSection(apiPaths.fetchMoviesList(moviess.id), moviess.name);
                });
            }
        })
        .catch(err => console.log(err))
}
function fetchAndbuildMovieSection(fetchUrl, categoryName) {
    console.log(fetchUrl, categoryName);
    return fetch(fetchUrl)
        .then(res => res.json())
        .then(res => {
            // console.table(res.results);
            const cardMovies = res.results;
            if (Array.isArray(cardMovies) && cardMovies.length) {
                buildMoviesSection(cardMovies.slice(0, 20), categoryName);
            }
            return cardMovies;
        })
        .catch(err => console.log(err))
}

function buildMoviesSection(list, categoryName) {
    const moviesss = document.getElementById('MCi5O');

    const moviesListHTML = list.map(item => {
        return `
        <div class="card-movie"onclick="location.href = '/${item.id}'">
            <img src="${imgPath}${item.backdrop_path}" alt="${item.title}" />
        </div>`;
    }).join('');

    const moviesSectionHTML = `
    <h1 class="category-name">${categoryName}</h1>
    <div class="card">
        ${moviesListHTML}
    </div>`

    const div = document.createElement('div');
    div.className = "movie-cart";
    div.innerHTML = moviesSectionHTML;



    moviesss.append(div);

}

window.addEventListener('load', function () {
    init();
    window.addEventListener('scroll', function () {
        // header ui update
        const header = document.getElementById('header');
        if (window.scrollY > 5) header.classList.add('black-bg')
        else header.classList.remove('black-bg');
    })
})