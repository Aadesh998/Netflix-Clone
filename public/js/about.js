let movie_id = location.pathname;
// console.log(movie_id)
fetch(`${movie_detail_http}${movie_id}?` + new URLSearchParams({
    api_key: apikey
}))
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        setupmovieinfo(data);
    })

const setupmovieinfo = (data) => {
    // const abouttitle = document.querySelector('.about-title');
    // const trandadditional = document.querySelector('.trand-additional');
    // const desc = document.querySelector('.desc');
    // const title = document.querySelector('title');
    // const backdrop = document.querySelector('.about-movie');

    // title.innerHTML = abouttitle.innerHTML = data.title;

    const aboutmovie = document.getElementById('about-movie');
    aboutmovie.style.backgroundImage = `url('${imgPath}${data.backdrop_path}')`;

    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="about-title">${data.title}</h1>
    <p class="trand-additional">Released - ${data.release_date}</p>

    <p class="desc">${data.overview && data.overview.length > 200 ? data.overview.slice(0, 200).trim() + '...' : data.overview}</p>
    
    `;
    div.className = "about";
    aboutmovie.append(div);


}

fetch(`${movie_detail_http}${movie_id}/videos?` + new URLSearchParams({
    api_key: apikey
}))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const videocontainer = document.getElementById('video-container');
        let maxclip = (data.results.length < 4) ? 4 : data.results.length;
        const div = document.createElement('div');

        div.innerHTML = `
        <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[0].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[1].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[2].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[3].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[4].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[5].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[6].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <iframe class="iframe" src="https://www.youtube.com/embed/${data.results[7].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            `;


        div.className = "video-container";
        videocontainer.append(div);
    })
window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        // header ui update
        const header = document.getElementById('header');
        if (window.scrollY > 5) header.classList.add('black-bg')
        else header.classList.remove('black-bg');
    })
})