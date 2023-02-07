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

renderToDom("#app", domString);

  // add the event listener for the retire button! After you render!
  document.querySelector("#app").addEventListener("click", retireWizard);
}

// empty array for vold army

const vold = [];

// get the RETIRED wizard cards on the DOM
// Same as above but for retired.
const voldyCardsOnDom = (array) => {
  let domString = "";
  for (const wiz of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${wiz.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${wiz.name}</p>
    </div>
  </div>`;
  }

  renderToDom("#voldy", domString);
};

// Retire a wizard
const retireWizard = (event) => {
  // if the id includes "deleteButton"
  if (event.target.id.includes("delete")) {
    // get that object id off of our target ID
    const [, wizId] = event.target.id.split("--");
    // Use it to find the index of the object
    const wizardsIndex = wizards.findIndex(
      (wiz) => Number(wizId) === wiz.id
    );

    // splice that object out of the array
    const retiredWizard = wizards.splice(wizardsIndex, 1);

    // push our retired into the retiredInstructor array
    vold.push(vold[0]);

    // Render both of our arrays! Retired and regular.
    voldyCardsOnDom(retiredWizard);
    cardsOnDom(wizards);
  }
};

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
  '<input id="nameForm" type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/><button id="submitButton" class="btn btn-primary" type="submit">Submit</button>';

 // Render that to the Dom
  renderToDom('#form', domString);

 // Add you event listener for your submit button
  // You HAVE to do this after you render it to DOM

  document.querySelector("#submitButton").addEventListener("click",newStu);

};

//Show that form with the function above ^^^^
document.querySelector("#sort").addEventListener("click", showForm);


const createRandomNewWizard = (event) => {
  event.preventDefault();

  //create a random number that is within the range of my team array
 const randNum = Math.floor(Math.random() * 6);

 const randomHouse = house[randNum];

  //Create new wizards object
 const newWiz = {
  id: wizards.length + 2, 
  name: document.querySelector("nameForm").value,
  house: randomHouse.house,
  
 }

 }
