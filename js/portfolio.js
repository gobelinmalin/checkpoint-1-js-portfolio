const link = document.querySelectorAll("a");

for (let i = 0; i < link.length; i++) {
  link[i].style.color = "#750ff7";
}

const imageAvatar = document.getElementById("imageAvatar");

imageAvatar.addEventListener("click", function changeAvatar() {
  let avatar = document.getElementById("imageAvatar");
  avatar.setAttribute("src", "image/avatar.svg");
});

const changeTextColor = document.getElementById("modifColorText");

changeTextColor.addEventListener("click", function changeElementStyle() {
  let purple = document.getElementsByClassName("purple");
  let purpleText = document.getElementsByClassName("purpleText");
  const nameElement = document.getElementById("name");

  let backgroundColor = prompt("Enter a color :");
  let nameText = prompt("Enter your name :");

  for (let i = 0; i < purple.length; i++) {
    purple[i].style.backgroundColor = backgroundColor;
  }

  for (let i = 0; i < purpleText.length; i++) {
    purpleText[i].style.color = backgroundColor;
  }

  nameElement.innerHTML = nameText;
  nameElement.style.color = "white";
});

const devTool = document.getElementsByClassName("devTool");
const devToolFront = document.querySelectorAll(".devToolFront");

devTool[0].addEventListener("click", function() {
  const listFront = ["VSCode", "Github", "Terminal"];

  for (let i = 0; i < listFront.length; i++) {
    devToolFront[i].innerHTML = listFront[i];
  }
});

const devToolBack = document.querySelector(".devToolBack");
const form = document.getElementById("form");
const toolInput = document.getElementById("toolInput");

form.onsubmit = function(event) {
  event.preventDefault();
  const tool = document.createElement("li");

  tool.classList.add("devToolBack");
  tool.innerHTML = toolInput.value;

  devToolBack.appendChild(tool);
  toolInput.value = "";
};
