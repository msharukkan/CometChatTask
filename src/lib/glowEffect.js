export function initGlowEffect() {
    const captures = document.querySelectorAll('.glow-capture');
  
    captures.forEach((capture) => {
      const clonedChild = capture.children[0].cloneNode(true);
      const overlay = capture.querySelector('.glow-overlay');
  
      overlay.appendChild(clonedChild);
  
      capture.addEventListener('mousemove', (event) => {
        const rect = capture.getBoundingClientRect(); // Get accurate position
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
      
        overlay.style.setProperty('--glow-x', `${x}px`);
        overlay.style.setProperty('--glow-y', `${y}px`);
        overlay.style.setProperty('--glow-opacity', '1');
      });
      
  
      capture.addEventListener('mouseleave', () => {
        overlay.style.setProperty('--glow-opacity', '0');
      });
    });
  }
  