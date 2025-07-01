function add() {
  const input = document.getElementById("taskInput");
  let text = input.value.trim();

  if (text === "") return;

  // list
  let li = document.createElement("li");

  // text 
  let span = document.createElement("span");
  span.textContent = text;



  // edit
  let editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = function () {
    let updated = prompt("Edit your task:", span.textContent);
    if (updated !== "") {
      span.textContent = updated;
    }
  };

  // delete 
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = function () {
    li.remove();
  };

  // buttons 
  let btns = document.createElement("div");
  btns.className = "btn-group";
  btns.appendChild(editBtn);
  btns.appendChild(delBtn);

  
  li.appendChild(span);
  li.appendChild(btns);

  document.getElementById("taskList").appendChild(li);
  input.value = "";

}
