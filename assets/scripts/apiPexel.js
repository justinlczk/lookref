

const pexelKey = "563492ad6f91700001000001bbc65744e45f4a79a6ac524672ebf124"; 
const keyWord = "outfit";
// const imgDom = document.getElementsByTagName('img');
const imgDom = document.getElementsByClassName('item__image');
const nbrpic = imgDom.length;
const url = "https://api.pexels.com/v1/search?query=" + keyWord + "&per_page=" + nbrpic; 

const legit = {
    headers: {
        'Authorization' : pexelKey
    }
}
console.log(imgDom);



fetch(url,legit)
    .then(api => api.json())
    .then(api => {
        for( src in imgDom){
            
            // console.log(src);
            // console.log(imgDom);
            // console.log(api.photos[src].src.original);
            // imgDom[src].src = "lol";
            // console.log(imgDom[src].src);

            imgDom[src].src = api.photos[src].src.original;

        }
    });
