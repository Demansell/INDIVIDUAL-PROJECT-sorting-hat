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
        <button class="btn btn-danger" id="delete--${wiz.id}">Expel</button>
      </div>   
      </div>`;
};

renderToDom("#theWizards", domString);
}

// filter by house
const filter = (array, houses) => {
  const wizardArray = [];

  for (const wiz of array) {
    if (wiz.house === houses) {
      wizardArray.push(wiz)
    }
  }
  return wizardArray;
}

// var to get id's from buttons on html
const showAll = document.querySelector("#all")
const showGry = document.querySelector("#gryff")
const showHuf = document.querySelector("#huff")
const showRav = document.querySelector("#rave")
const showSly = document.querySelector("#slyth")

// Event listernes to sort by house on button click 

showAll.addEventListener("click", () => {
  cardsOnDom(wizards)
  }
);

showGry.addEventListener("click", () => {
  const gryFilter = filter (wizards, "gryff")
  cardsOnDom(gryFilter)
  }
);

showHuf.addEventListener("click", () => {
  const hufFilter = filter (wizards, "huff")
  cardsOnDom(hufFilter)
  }
);

showRav.addEventListener("click", () => {
  const ravFilter = filter (wizards, "rave")
  cardsOnDom(ravFilter)
  }
);

showSly.addEventListener("click", () => {
  const slyFilter = filter (wizards, "slyth")
  cardsOnDom(slyFilter)
  }
)







// to add name input after button click 

/*const showForm = () => {
  const domString = 
  '<input id="nameForm" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/><button id="submitButton" class="btn btn-primary" type="submit">Submit</button>';

  renderToDom('#form', domString);

  document.querySelector("#submitButton").addEventListener("click",newStu);

};

document.querySelector("#sort").addEventListener("click", showForm);

const newStu = (e) => {
  event.preventDefault();

  // 
}
*/
