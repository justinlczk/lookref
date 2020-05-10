/**
 * api d'unsplash pas fifou.
 * petit 
 */


// utile pour V1 et V2
/*
const select_id = document.getElementsByTagName('img');
const nbr_div_img = select_id.length;
const clientId = "aa9e017a919e32922e115ab53c2a134cd9bd8adf8aed29b2dbf1ff22f4847bcd";
const keyWord = "ootd";
const url = "https://api.unsplash.com/photos/random/?client_id="+ clientId +"&query="+keyWord + "&per_page=" + nbr_div_img;
*/


//v1 N'affiche qu'une seule photo dans chaque balise <img>
/*
for (src in select_id) {
    callApi(src);
    console.log(src);
}

function callApi(e) {
    fetch(url)
    .then(api => api.json())
    .then(api => {
        select_id[e].src = api.urls.regular;
    });
}
*/


//v2 N'affiche qu'une ou deux photos dans les balises <img>
/*
for (src in select_id) {
    callApi().then(data => {
        console.log(data);
    });
}

async function callApi() {
    let response = await fetch(url);
    let data = await response.json();

    return data;
}
*/


// Alternative on change la page pour forcer le changement de photo
const select_id = document.getElementsByClassName('item__image');
console.log(select_id);
const clientId = "aa9e017a919e32922e115ab53c2a134cd9bd8adf8aed29b2dbf1ff22f4847bcd";
const keyWord = "outfitoftheday";
for (src in select_id) {
    callApi(src);
}

function callApi(e) {
    const url = "https://api.unsplash.com/photos/random/?client_id="+ clientId +"&query="+keyWord + "&page=" + e;
    
    fetch(url)
    .then(api => api.json())
    .then(api => {
        console.log(api);
        select_id[e].src = api.urls.regular;
    });
}