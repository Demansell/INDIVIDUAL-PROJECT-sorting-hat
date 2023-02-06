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

// empty array for vold army

const vold = [];

// filter by house
const filter = (array, theHouse) => {
  const wizardArray = [];

  for (const wiz of array) {
    if (wiz.house === theHouse) {
      wizardArray.push(wiz)
    }
  }
  return wizardArray;
};

// var to get id's from buttons on html
const showAll = document.querySelector("#all")
const showGry = document.querySelector("#Gryffindor")
const showHuf = document.querySelector("#Hufflepuff")
const showRav = document.querySelector("#Ravenclaw")
const showSly = document.querySelector("#Slytherin")

// Event listernes to sort by house on button click 

showAll.addEventListener("click", () => {
  cardsOnDom(wizards)
  }
);

showGry.addEventListener("click", () => {
  const gryFilter = filter (wizards, "Gryffindor")
  cardsOnDom(gryFilter)
  }
);

showHuf.addEventListener("click", () => {
  const hufFilter = filter (wizards, "Hufflepuff")
  cardsOnDom(hufFilter)
  }
);

showRav.addEventListener("click", () => {
  const ravFilter = filter (wizards, "Ravenclaw")
  cardsOnDom(ravFilter)
  }
);

showSly.addEventListener("click", () => {
  const slyFilter = filter (wizards, "Slytherin")
  cardsOnDom(slyFilter)
  }
)

// Function to show name input form after button click
const showForm = () => {
   // create a dom string containing your form
  const domString = 
  '<input id="nameForm" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/><button id="submitButton" class="btn btn-primary" type="submit">Submit</button>';

 // Render that to the Dom
  renderToDom('#form', domString);

 // Add you event listener for your submit button
  // You HAVE to do this after you render it to DOM

  document.querySelector("#submitButton").addEventListener("click",newStu);

};

// Show that form with the function above ^^^^
document.querySelector("#sort").addEventListener("click", showForm);

const newStu = (e) => {
  event.preventDefault();



 // create a random number that is within the range of my team array
 const randNum = Math.floor(Math.random() * 6);

   // grab the random instructor using dot notation
  // Uses the random number as an index
  const randomWiz = wizards[randNum];

  // Create new wizards object
  const newWiz = {
    id: team.length + 2, // Next ID number
    name: document.querySelector("#nameForm").value,
    house: randomWiz.house,
    image: randomInstructor.image,
  };

    // push it to the team and put it on the DOM
    team.push(newWiz);
    cardsOnDom(team);
  };
