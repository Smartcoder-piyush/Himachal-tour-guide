document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // Background Slideshow
  // ======================
  const images = document.querySelectorAll('.bg-slideshow img');
  if (images.length > 0) {
    let currentImage = 0;
    
    // Initialize - remove all active, add to first only
    images.forEach(img => img.classList.remove('active'));
    images[0].classList.add('active');
    
    function changeBackgroundImage() {
      images[currentImage].classList.remove('active');
      currentImage = (currentImage + 1) % images.length;
      images[currentImage].classList.add('active');
    }
    
    setInterval(changeBackgroundImage, 5000);
  }
  
  // ======================
  // Form Input Effects
  // ======================
  const inputContainers = document.querySelectorAll('.input-container');
  
  inputContainers.forEach(container => {
    const input = container.querySelector('input');
    const label = container.querySelector('.input-label');
    const underline = container.querySelector('.input-underline');
    
    if (!input || !label || !underline) return;
    
    // Initialize if input has value
    if (input.value) {
      label.style.transform = 'translateY(-24px) scale(0.85)';
      label.style.color = '#1a73e8';
      underline.style.width = 'calc(100% - 28px)';
    }
    
    // Add event listeners
    input.addEventListener('focus', () => {
      label.style.transform = 'translateY(-24px) scale(0.85)';
      label.style.color = '#1a73e8';
      underline.style.width = 'calc(100% - 28px)';
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        label.style.transform = 'translateY(0) scale(1)';
        label.style.color = '#aaa';
        underline.style.width = '0';
      }
    });
    
    input.addEventListener('input', () => {
      if (input.value) {
        label.style.transform = 'translateY(-24px) scale(0.85)';
        label.style.color = '#1a73e8';
      }
    });
  });
  
  // ======================
  // Button Effects
  // ======================
  const buttons = document.querySelectorAll('.button, .button-primary');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
      button.style.boxShadow = '';
    });
    
    button.addEventListener('mousedown', () => {
      button.style.transform = 'translateY(1px)';
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = 'translateY(-2px)';
    });
  });
  
  // ======================
  // Form Submission
  // ======================
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const inputs = this.querySelectorAll('input');
      let isValid = false;
      
      inputs.forEach(input => {
        input.style.borderColor = '';
        if (input.value.trim() !== '') {
          isValid = true;
        }
      });
    });
  }


  // ======================
  // Learn More Button
  // ======================
  const learnMoreBtn = document.querySelector('.button');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function(e) {
      if (e.target.tagName === 'BUTTON' && e.target.type !== 'submit') {
        // Create modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        
        modal.innerHTML = `
        <div style="background: #121212; padding: 30px; border-radius: 16px; max-width: 500px; max-height: 80vh; overflow-y: auto;">
        <h2 style="color: #0095ff; margin-top: 0;">Discover Himachal Pradesh</h2>
        <p>Himachal Pradesh offers breathtaking landscapes, adventure sports, and serene retreats. Key attractions include:</p>
        <ul>
        <li>Shimla - The Queen of Hills</li>
        <li>Manali - Adventure sports and snow-capped mountains</li>
        <li>Dharamshala - Home of the Dalai Lama</li>
        <li>Spiti Valley - Desert mountain valley</li>
        </ul>
        <button id="closeModal" style="margin-top: 20px; padding: 10px 20px; background: #e6600d; color: white; border: none; border-radius: 8px; cursor: pointer;">Close</button>
        </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        document.getElementById('closeModal').addEventListener('click', function() {
          document.body.removeChild(modal);
        });
      }
    });
  }
});