// const burger = document.getElementsByClassName("hamburger");
const navMenu = document.querySelector(".nav-menu");

function toggleClass(e){
    e.target.classList.toggle("active");
    navMenu.classList.toggle("active");
    
}




button = document.querySelectorAll('button'[0])



button.addEventListener("click",toggleClass )
document.querySelectorAll(".nav-link").forEach (n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// let myWords = ['cats', 'birds', 'people', 'money', 'health insurance', 'oxygen', 'cats', 'cats', 'cats'];
// showWordsInString("Dogs > showWords", myWords);

// function showWordsInString(str, words) {
//     let newStr = str.replace("showWords", "");
//     for (let i = 0; i < words.length; i++) {
//         newStr += words[i];
//     }
//     console.log(newStr);
// }

let currentURl = "https://dog.ceo/api/breeds/image/random"

fetch(currentURl)
  .then((response) => response.json())
  .then((data) => console.log(data));


  
             