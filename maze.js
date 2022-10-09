var b = document.getElementsByClassName("boundary");
var s = document.getElementById("start");
var e = document.getElementById("end");
var status = document.getElementById("status");
var win = true;

  s.addEventListener("mouseover", function() {
    document.getElementById("status").innerHTML = "Move your mouse over the S to begin";
    for (var i = 0; i < b.length; i++) {
      b[i].addEventListener("mouseover", function() {
        win = false;
        this.style.background = "red";
        document.getElementById("status").innerHTML = "YOU LOSE!"
        stopPropagation();
      });
      this.style.background = "#eeeeee";
    }
    
  });

e.addEventListener("mouseover", function() {
  if (win == true) {
    document.getElementById("status").innerHTML = "YOU WIN!";
    this.style.background = "#eeeeee";
  }
  win = true;
});
