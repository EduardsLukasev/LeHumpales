const modal = document.getElementById('loginModal');
const span = document.getElementsByClassName('close')[0];


function openLoginModal() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  
  modal.style.display = "none";
}