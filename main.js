const wizards = [
  {
    id: 1,
    name: 'Ron',
    house: 'Gryffindor',
    explelled: false,
  }, 
  {
    id: 2,
    name: 'Ron',
    house: 'Gryffindor',
    explelled: false,
  },
  {
    id: 3,
    name: 'Harry',
    house: 'Gryffindor',
    explelled: false,
  },
  {
    id: 4,
    name: 'Lockhart',
    house: 'Ravenclaw',
    explelled: false,
  },
  {
    id: 5,
    name: 'Draco',
    house: 'Slytherin',
    explelled: false,
  },
  {
    id: 6,
    name: 'Friar',
    house: 'Hufflepuff',
    explelled: false,
  },
  {
    id: 7,
    name: 'Todd',
    house: 'Ravenclaw',
    explelled: false,
  },
  {
    id: 8,
    name: 'Jason',
    house: 'Hufflepuff',
    explelled: false,
  },
];


// Renders to Dom
const renderDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


 





// add a student form need to pull html card
// need to add new student card 
//once i render to dom opening form need to make a event listern to make form show up 
