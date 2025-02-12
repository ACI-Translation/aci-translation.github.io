document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing once visible
      }
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
}); 
