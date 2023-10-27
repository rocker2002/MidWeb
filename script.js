const input = document.getElementById("Input");
const list = document.getElementById("todos");

function add() {
  const li = document.createElement("li");
  const inputValue = input.value;
  const textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove";
  removeBtn.onclick = function() {
    this.parentElement.remove();
  };
  
  li.appendChild(removeBtn);
  
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    list.appendChild(li);
  }
  
  input.value = "";
}