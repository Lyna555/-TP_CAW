var boundaries = document.getElementsByClassName("boundary");
var debut = document.getElementById("start");
var fin = document.getElementById("end");
var status = document.getElementById("status");
var refair = document.getElementById("restart");
var i = 0;

debut.addEventListener("mouseover", function () {
  debut.style.background = "#eeeeee";
  document.getElementById("status").innerHTML = "Glissez la souris de S vers E sans toucher les bordures";
  while (i < boundaries.length) {
    boundaries[i].addEventListener("mouseover", function () {
      for (var j = 0; j < boundaries.length; j++) {
        boundaries[j].style.background = "red";
      }
      document.getElementById("status").innerHTML = "Vous avez Perdue!";
      alert("Perdue!");
    });
    i++;
  }
});

fin.addEventListener("mouseover", function () {
  if (document.getElementById("status").innerHTML != "Vous avez Perdue!") {
    document.getElementById("status").innerHTML = "Vous avez gagne!";
    fin.style.background = "#eeeeee";
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].style.background = "#88ff88";
    }
    alert("Congratulation!")
  }
});

refair.addEventListener("click", function () {
  document.getElementById("status").innerHTML = 'Glissez la souris de "S" vers "E" sans toucher les bordures';
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.background = "#eeeeee";
  }
}
)


