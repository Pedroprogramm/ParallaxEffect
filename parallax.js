document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--move-x', `${(e.clientX - (window.innerWidth/ 2) ) * 0.005}deg`);
  document.documentElement.style.setProperty('--move-y', `${(e.clientY - (window.innerHeight / 2) ) * 0.007}deg`);

    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
  });
  
// JavaScript
window.addEventListener('load', function() {
  window.scrollTo(0, 60);
});

