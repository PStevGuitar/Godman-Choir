const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", function(){
  navLinks.classList.toggle("active");
});


const images = document.querySelectorAll(".gallery-img");

images.forEach(img => {
  img.addEventListener("click", function(){
    this.classList.toggle("zoomed");
  });
});



navItems.forEach(function(item){
  item.addEventListener("click", function(){
    navLinks.classList.remove("active");
  });
});
const playBtn = document.getElementById('playBtn');
  const song = document.getElementById('song');

  playBtn.addEventListener('click', () => {
    song.play(); // start audio
  });