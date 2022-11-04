let boundaries = document.getElementsByClassName("boundary");
let debut = document.getElementById("start");
let fin = document.getElementById("end");
let status = document.getElementById("status");
let maze = document.getElementById("maze");
let i = 0;
let win = true;
status.innerHTML = "Bonjour!";

debut.addEventListener("click", function () {
  status.innerHTML = 'Bonjour!';
  debut.style.background = "#88ff88";
  fin.style.background = "#8888ff";
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.background = "#eeeeee";
  }
});

debut.addEventListener("mouseover", function () {
 if(status.innerHTML != "Vous avez Perdue!" && status.innerHTML != "Vous avez gagne!"){
  status.innerHTML = 'Glissez la souris de "S" vers "E" sans toucher les bordures';
  maze.addEventListener("mouseleave", function () {
    if (status.innerHTML == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
      status.innerHTML = 'Vous avez Perdue!';
      debut.style.background = "#eeeeee";
      fin.style.background = "#eeeeee";
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.background = "red";
      }
    }
  })
  debut.style.background = "#eeeeee"
  while (i < boundaries.length) {
    boundaries[i].addEventListener("mouseover", function () {
      if (status.innerHTML == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
        win = false;
        for (var j = 0; j < boundaries.length; j++) {
          boundaries[j].style.background = "red";
        }
        status.innerHTML = "Vous avez Perdue!";
        stopPropagation();
      }
    });
    i++;
  }
 }
}
)

fin.addEventListener("mouseover", function () {

  if (win == true && status.innerHTML != "Vous avez Perdue!" && status.innerHTML != "Bonjour!") {
    fin.style.background = "#eeeeee"
    status.innerHTML = "Vous avez gagne!";
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].style.background = "green";
    }
  }
  win = true
});