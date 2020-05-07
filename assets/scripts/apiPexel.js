

const pexelKey = "563492ad6f91700001000001bbc65744e45f4a79a6ac524672ebf124"; 
const keyWord = "outfitoftheday";
const imgDom = document.getElementsByTagName('img');
const nbrpic = imgDom.length;
const url = "https://api.pexels.com/v1/search?query=" + keyWord + "&per_page=" + nbrpic; 

const legit = {
    headers: {
        'Authorization' : pexelKey
    }
}


fetch(url,legit)
    .then(api => api.json())
    .then(api => {
        for( src in imgDom){
            // console.log(src);
            // console.log(imgDom);
            // console.log(api.photos[src].src.original);
            // console.log(imgDom[src]);
            imgDom[src].src = api.photos[src].src.original;

        }
    });