const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//create var
const togglebtn = document.querySelector(".btn btn-primary");
const nameInput = document.querySelector(".form-label");

togglebtn.addEventListener('click', () => {
if(nameInput.style.display === 'none') {
  nameInput.style.display = 'block';
} else {
  nameInput.style.display = 'none';
}

})
