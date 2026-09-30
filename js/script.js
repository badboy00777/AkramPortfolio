const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");

menuBtn.addEventListener('click', () => {
  navlinks.classList.toggle('show');
});