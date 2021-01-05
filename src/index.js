let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });  
  })
  let tcol = document.getElementById("toy-collection")
  let div = document.createElement("div")
  let h2 = document.createElement("h2")
  let p = document.createElement("p")
  let img = document.createElement("img")

  fetch("http://localhost:3000/toys")
  .then(function(response){
   return response.json()
  })
  .then(function(object){
    doc.appendChild(div)
    div.className = "card"
    div.appendChild(h2)
    h2.innerHTML = object.name
    div.appendChild(img)
    div.appendChild(p)
   
    
    img.src = object.image
    p.innerHTML = object.likes

  });
