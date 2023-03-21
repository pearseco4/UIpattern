let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// const catAPI = new Request('https://api.thecatapi.com/v1/images/search?limit=10');

// //call the fetch method
// fetch(catAPI)
//     .then(res => {
//         if(res.ok) {
//             console.log(res);
//         }
//     })
//     .catch(err => console.log('oops something went wrong', err));

let randButton = document.querySelector('.randomButton');
let baseURL = "https://api.thecatapi.com/v1/images/search"

randButton.addEventListener('click', getRandomImage);

function getRandomImage(e) {
    fetch(baseURL)
    .then((res) => {
    return res.json()    
    }) .then((data) => {
        console.log(data);
        const randomCatImgTag = document.querySelector(".randomCatImage");
        randomCatImgTag.src = data[0].url;
    });    
}

form.fetchCategoryCat("submit", fetchCategoryCat)

function fetchCategoryCat(e) {
    e.preventDefaul()

    let { categoryID } = e.target.elements;
    
    fetch(`${baseURL}?category_ids=${categoryID.value}`, {
        headers: {
            "x-api-key":
                "live_BO2sdasjlfjsldkfjslkdjgflskjgls" 
        },
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });}
 