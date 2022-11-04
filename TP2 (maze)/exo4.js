let boundaries = document.getElementsByClassName("boundary");
let debut = document.getElementById("start");
let fin = document.getElementById("end");
let maze = document.getElementById("maze");
let i = 0;
let win = true;
let status = "Bonjour!";

debut.addEventListener("click", function () {
  status = "Bonjour!";
  debut.style.background = "#88ff88";
  fin.style.background = "#8888ff";
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.background = "#eeeeee";
  }
});

debut.addEventListener("mouseover", function () {
  if (status != "Vous avez Perdue!" && status != "Vous avez gagne!") {
    status = 'Glissez la souris de "S" vers "E" sans toucher les bordures';
    maze.addEventListener("mouseleave", function () {
      if (status == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
        alert("Vous etes hors bordure!")
        status = 'Bonjour!';
        debut.style.background = "#88ff88";
        fin.style.background = "#8888ff";
        for (var i = 0; i < boundaries.length; i++) {
          boundaries[i].style.background = "#eeeeee";
        }
      }
    })
    debut.style.background = "#eeeeee"
    while (i < boundaries.length) {
      boundaries[i].addEventListener("mouseover", function () {
        if (status == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
          win = false;
          for (var j = 0; j < boundaries.length; j++) {
            boundaries[j].style.background = "red";
          }
          status = "Vous avez Perdue!";
          stopPropagation();
        }
      });
      i++;
    }
  }
}
)

fin.addEventListener("mouseover", function () {

  if (win == true && status != "Vous avez Perdue!" && status != "Bonjour!") {
    fin.style.background = "#eeeeee"
    status = "Vous avez gagne!";
    alert("Vous avez gagne!")
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].style.background = "green";
    }
  }
  win = true
});