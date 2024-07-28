const params = new URLSearchParams(window.location.search);
const naam = params.get('op');
var box = document.getElementById('type');
box.textContent = 'Hello ' + naam + ', Welcome to the world of Magic!!!';
