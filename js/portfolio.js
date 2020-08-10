let description = document.getElementsByClassName("description");

// function handleColorText() {
//   let colorText = prompt("Entrez la couleur du texte :");
//   for (var i = 0; i < description.length; i++) {
//     description[i].style.color = colorText;
//   }
// }

function handleBackgroundColor() {
  let backgroundColor = prompt("Enter the background color :");
  for (var i = 0; i < description.length; i++) {
    description[i].style.backgroundColor = backgroundColor;
  }
}
