document.addEventListener("DOMContentLoaded", function() {
  const panels = document.querySelectorAll('.hero-panel');
  let currentPanel = 0;
  const displayTime = 8000; // Time each panel is displayed (in ms)
  
  function showPanel(index) {
    // Remove active class from all panels and reset fade-ins
    panels.forEach(panel => {
      panel.classList.remove('active');
      panel.querySelectorAll('.fade-in').forEach(el => el.classList.remove('visible'));
    });
    
    // Activate the current panel
    const panel = panels[index];
    panel.classList.add('active');
    
    // Select fade-in elements within this panel and add 'visible' in sequence
    const fadeEls = panel.querySelectorAll('.fade-in');
    fadeEls.forEach((el, i) => {
      let delay = 1250 * (i + 1);
      // For the CTA button, add an extra 3s delay if desired
      if (el.classList.contains('cta-button')) {
        delay -= 250;
      }
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);
    });
  }
  
  function nextPanel() {
    currentPanel = (currentPanel + 1) % panels.length;
    showPanel(currentPanel);
  }
  
  // Initially show the first panel
  showPanel(currentPanel);
  
  // Cycle through panels every displayTime milliseconds
  setInterval(nextPanel, displayTime);
});

document.addEventListener("DOMContentLoaded", function() {
  const sliderContents = document.querySelectorAll('.slider-content');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;
  const transitionTime = 500; // transition time in ms, should match CSS
  
  function slideToPanel(newIndex, direction) {
    if (newIndex === currentIndex) return;
    
    const currentPanel = sliderContents[currentIndex];
    const nextPanel = sliderContents[newIndex];
    
    // Prepare next panel position based on direction
    nextPanel.style.transition = "none";
    nextPanel.style.opacity = 0;
    nextPanel.style.transform = direction === "right" ? "translateX(100%)" : "translateX(-100%)";
    nextPanel.classList.add('active');
    
    // Force reflow to ensure starting position is applied
    nextPanel.offsetWidth;
    
    // Set transition for both panels
    currentPanel.style.transition = `transform ${transitionTime}ms ease, opacity ${transitionTime}ms ease`;
    nextPanel.style.transition = `transform ${transitionTime}ms ease, opacity ${transitionTime}ms ease`;
    
    // Animate current panel out
    currentPanel.style.transform = direction === "right" ? "translateX(-100%)" : "translateX(100%)";
    currentPanel.style.opacity = 0;
    
    // Animate next panel in
    nextPanel.style.transform = "translateX(0)";
    nextPanel.style.opacity = 1;
    
    // After transition, clean up classes and inline styles
    setTimeout(() => {
      currentPanel.classList.remove('active');
      currentPanel.style.transition = "";
      nextPanel.style.transition = "";
      currentPanel.style.transform = "";
      nextPanel.style.transform = "";
    }, transitionTime);
    
    currentIndex = newIndex;
  }
  
  leftArrow.addEventListener('click', function() {
    // When left arrow is clicked, slide in the previous panel from the left
    const newIndex = (currentIndex - 1 + sliderContents.length) % sliderContents.length;
    slideToPanel(newIndex, "left");
  });
  
  rightArrow.addEventListener('click', function() {
    // When right arrow is clicked, slide in the next panel from the right
    const newIndex = (currentIndex + 1) % sliderContents.length;
    slideToPanel(newIndex, "right");
  });
  
  // Initialize first panel
  sliderContents.forEach((panel, i) => {
    if(i === 0) {
      panel.classList.add('active');
      panel.style.opacity = 1;
      panel.style.transform = "translateX(0)";
    } else {
      panel.style.opacity = 0;
      panel.style.transform = "translateX(100%)";
    }
  });
});


