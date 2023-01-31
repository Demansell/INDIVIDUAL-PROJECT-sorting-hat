const wizards = [
  {
    id: 1,
    name: 'Ron',
    house: 'Gryffindor',
    explelled: false,
  },
]

// Renders to Dom
const renderToDom = (divId, htmlString) => {
  const render = document.querySelector(divId);
  render.innerHTML = htmlString;
}

// Sorting Student
const sorting = (e) => {
  event.preventDefault();
  
}


















const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
