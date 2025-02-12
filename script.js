document.addEventListener("DOMContentLoaded", function() {
  const panels = document.querySelectorAll('.hero-panel');
  let currentPanel = 0;
  const displayTime = 8000; // Total time each panel is displayed (in ms)
  
  function showPanel(index) {
    // Remove active class from all panels and reset fade-ins
    panels.forEach(panel => {
      panel.classList.remove('active');
      const fadeEls = panel.querySelectorAll('.fade-in');
      fadeEls.forEach(el => el.classList.remove('visible'));
    });
    
    // Activate the current panel
    const panel = panels[index];
    panel.classList.add('active');
    
    // Get all fade-in elements within this panel and add the visible class one by one
    const fadeEls = panel.querySelectorAll('.fade-in');
    fadeEls.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 1000 * (i + 1));
    });
  }
  
  function nextPanel() {
    currentPanel = (currentPanel + 1) % panels.length;
    showPanel(currentPanel);
  }
  
  // Initially show the first panel
  showPanel(currentPanel);
  
  // Cycle through panels every 'displayTime' milliseconds
  setInterval(nextPanel, displayTime);
});
