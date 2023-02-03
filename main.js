const wizards = [
  {
    id: 1,
    name: "Ron",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 2,
    name: "Draco",
    house: "Slytherin",
    expelled: false,
  },
  {
    id: 3,
    name: "Friar",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 4, 
    name: "Lockhart",
    house: "Ravenclaw",
    expelled: false,
  },

];

 // render to dom function

 const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};

let domString = "";
  const cardsOnDom = (array) => {
    let domString = "";
    for (const wiz of array) {

      domString += `<div class="card" style="width: 18rem;">
      <img src=${wiz.imageUrl} class="card-img-top" alt=${wiz.name}>
      <div class="card-body">
      <h5 class="card-title">${wiz.name}</h5>
        <p class="card-text">${wiz.house}</p>
        <button class="btn btn-danger" id="delete--${wiz.id}">Delete</button>
      </div>   
      </div>`;
};

renderToDom("#theWizards", domString);
}

cardsOnDom(wizards);


const filter = (array, houses) => {
  const wizardArray = [];

  for (const wiz of array) {
    if (wiz.house === houses) {
      wizardArray.push(wiz)
    }
  }
  return wizardArray;
}
