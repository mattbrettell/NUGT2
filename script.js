window.onload = function() {
  document.getElementById("pagethree").style.display = "none";
    document.getElementById("contact").style.display = "none";
};

function contact() {
    document.getElementById("pageone").style.display = "none";
    document.getElementById("contact").style.display = "block";
    
}

function pageone() {
  document.getElementById("pagethree").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("pageone").style.display = "block";
}

function cathedral() {
      document.getElementById("pagethree").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("pageone").style.display = "none";
}