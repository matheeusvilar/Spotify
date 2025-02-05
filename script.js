const searchInput = document.getElementById('search-input');
const resultsArtists = Document.getElementById('result-artist');
const resultPLaylist = document.getElementById ('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result) )
}

function displayResults(result) {
    resultPLaylist.classList.add('hidden');
    const artistsName = document.getElementById('artists-name')
    const artistsImage = document.getElementById('artists-img')

    result.array.forEach(element => {
        artistsName.innerText = element.name;
        artistsImage.src = element.urlImg;
    });

    resultsArtists.classList.remove('hidden');
}

document.addEventListener ('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ''){
        resultPLaylist.classList.add('hidden');
        resultsArtists;classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})