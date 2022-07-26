let elContainer = document.querySelector(".container");
let elRow = document.querySelector(".wrapper");
let elRow1 = document.querySelector(".moviWrapper");
let elBtn = document.querySelector(".container__btn");
let elBtn1 = document.querySelector(".buttonpm1");
let elBtn2 = document.querySelector(".buttonpm2");
let elBtn3 = document.querySelector(".buttonpm3");
let elBtn4 = document.querySelector(".buttonpm4");
let elButtonOne = document.querySelector(".pokemon");
let elButtonTwo = document.querySelector(".movies");
let elButtonThree = document.querySelector(".both");
let elButtonThree1 = document.querySelector(".poke");
let elButtonThree2 = document.querySelector(".movi");



let pokemonArray = pokemons;
let moviesArray = movies.slice(0,151);
let pokMovArray = pokemonArray.concat(moviesArray); 

elBtn1.addEventListener("click", function(){
  elRow1.innerHTML = null;
  elButtonOne.style = "display: block";
  elButtonTwo.style = "display: none";
  elButtonThree.style = "display: none";
  renderPokemon(pokemonArray);
});

elBtn2.addEventListener("click", function(){
  elRow.innerHTML = null;
  elButtonTwo.style = "display: block";
  elButtonOne.style = "display: none";
  elButtonThree.style = "display: none";
  renderMovies(moviesArray);
});

elBtn3.addEventListener("click", function(){
  renderPokemon(pokMovArray);
  renderMovies(pokMovArray);
  elButtonThree.style = "display: block";
  elButtonThree1.style = "display: block";
  elButtonThree2.style = "display: block";
  elButtonTwo.style = "display: none";
  elButtonOne.style = "display: none";
});

elBtn4.addEventListener("click", function(){
  elButtonThree.style = "display: none";
  elButtonThree1.style = "display: none";
  elButtonThree2.style = "display: none";
  elButtonTwo.style = "display: none";
  elButtonOne.style = "display: none";
  elRow.innerHTML = null;
  elRow1.innerHTML = null;
});

// elBtn4.addEventListener("click", function(){
//   elContainer.innerHTML = null;
//   elContainer.innerHTML = `<p class="card h-100 text-center" >Cleared</p>`;
//   elResult.textContent = "Cleared!";
// });



function renderPokemon(array) {
  for (const item of array) {
  
    
    let newThreeDiv = document.createElement("div");
    newThreeDiv.classList = "col-3";
    
    let newFourDiv = document.createElement("div");
    newFourDiv.classList = "card h-100 text-center rounded shadow-lg";
    
    let newImg = document.createElement("img");
    newImg.src = item.img;
    newImg.classList = "imgPM";

    let newFiveDiv = document.createElement("div");
    newFiveDiv.classList = "card-body";

    let newH5 = document.createElement("h5");
    newH5.classList = "card-title fw-bold";
    newH5.textContent = item.name;
    
    let newText = document.createElement("p");
    newText.classList = "card-text m-1 fw-bold";
    newText.textContent = item.type;

    let newText1 = document.createElement("p");
    newText1.classList = "card-text m-1 fw-bold";
    newText1.textContent = item.weight;


    let newText2 = document.createElement("p");
    newText2.classList = "card-text m-1 fw-bold";
    newText2.textContent = item.height;


    newFiveDiv.appendChild(newH5);
    newFiveDiv.appendChild(newText);
    newFiveDiv.appendChild(newText1);
    newFiveDiv.appendChild(newText2);
    newFourDiv.appendChild(newImg);
    newFourDiv.appendChild(newFiveDiv);
    newThreeDiv.appendChild(newFourDiv);
    elRow.appendChild(newThreeDiv);

  }
  console.log(elRow);
}



function renderMovies(array) {
  for (const item of array){

    let newDiv1 = document.createElement("div");
    newDiv1.classList = "col-3 pt-5 pb-5";

    let newDiv2 = document.createElement("div");
    newDiv2.classList = "card h-100 text-center rounded shadow-lg";

    let newImg1 = document.createElement("img");
    newImg1.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
    newImg1.classList = "card-img-top";

    let newDiv3 = document.createElement("div");
    newDiv3.classList = "card-body p-0";

    let newH51 = document.createElement("h5");
    newH51.classList = "card-title bg-primary text-white m-0 mb-3";
    newH51.textContent = item.Title;

    let newTextOne = document.createElement("p");
    newTextOne.classList = "card-text mb-0";
    newTextOne.textContent = item.Categories;

    let newTextTwo = document.createElement("p");
    newTextTwo.classList = "card-text mb-0";
    newTextTwo.textContent = item.imdb_rating;

    let newTextThree = document.createElement("p");
    newTextThree.classList = "card-text mb-1";
    newTextThree.textContent = item.movie_year;

    let newDiv4 = document.createElement("div");
    newDiv4.classList = "d-flex mb-3";

    let newHref1 = document.createElement("a");
    newHref1.classList = "pt-1 pb-1 mb-2 me-0 fw-bold btn btn-outline-danger";
    newHref1.textContent = "Watch Trailer";

    let newHref2 = document.createElement("a");
    newHref2.classList = "pt-1 pb-1 mb-2 me-0 pt-3 fw-bold btn btn-outline-success";
    newHref2.textContent = "Bookmark";
    
    let newHref3 = document.createElement("a");
    newHref3.classList = "pt-1 pb-1 mb-2 me-0 fw-bold btn btn-outline-primary";
    newHref3.textContent = "More Info";

    newDiv4.appendChild(newHref1);
    newDiv4.appendChild(newHref2);
    newDiv4.appendChild(newHref3);
    newDiv3.appendChild(newH51);
    newDiv3.appendChild(newTextOne);
    newDiv3.appendChild(newTextTwo);
    newDiv3.appendChild(newTextThree);
    newDiv3.appendChild(newDiv4);
    newDiv2.appendChild(newImg1);
    newDiv2.appendChild(newDiv3);
    newDiv1.appendChild(newDiv2);
    elRow1.appendChild(newDiv1);
  }
}


