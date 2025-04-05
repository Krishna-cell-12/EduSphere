   // Toggle between settings sections
   document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links and sections
      document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active');
      });
      document.querySelectorAll('.settings-section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Add active class to clicked link and corresponding section
      this.classList.add('active');
      const sectionId = this.getAttribute('data-section') + '-section';
      document.getElementById(sectionId).classList.add('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Apply dark mode if previously enabled, regardless of a toggle element
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    // Sync toggle with stored preference
    darkModeToggle.checked = localStorage.getItem('darkMode') === 'true';
    darkModeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', this.checked ? 'true' : 'false');
      showToast('Theme updated successfully!', 'success');
    });
  }  
  }); 
  
  // Theme color options
  document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.color-option').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
      const color = this.getAttribute('data-color');
      // Implementation for changing theme color would go here
      showToast('Theme color updated!', 'success');
    });
  });
  
  // Font size slider
  const fontSizeSlider = document.getElementById('font-size-slider');
  const textSizeValue = document.getElementById('text-size-value');
  const sizeLevels = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
  
  fontSizeSlider.addEventListener('input', function() {
    const level = parseInt(this.value);
    textSizeValue.textContent = sizeLevels[level - 1];
    // Implementation for changing font size would go here
  });
  
  // Show toast message
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
      <span>${message}</span>
    `;
    
    document.querySelector('.toast-container').appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  
  // Save account settings
  document.getElementById('save-account').addEventListener('click', function() {
    // Implementation for saving account settings would go here
    showToast('Account settings saved successfully!', 'success');
  });
  
  // Delete account confirmation
  document.getElementById('delete-account').addEventListener('click', function() {
    document.getElementById('delete-account-modal').classList.add('active');
  });
  
  // Close modal
  document.querySelector('.modal-close').addEventListener('click', function() {
    document.getElementById('delete-account-modal').classList.remove('active');
  });
  
  document.querySelector('.modal-cancel').addEventListener('click', function() {
    document.getElementById('delete-account-modal').classList.remove('active');
  });
  
  // Enable/disable delete button based on confirmation text
  document.getElementById('delete-confirmation').addEventListener('input', function() {
    document.getElementById('confirm-delete').disabled = this.value !== 'DELETE';
  });
  
  // Confirm account deletion
  document.getElementById('confirm-delete').addEventListener('click', function() {
    // Implementation for account deletion would go here
    document.getElementById('delete-account-modal').classList.remove('active');
    showToast('Your account has been deleted.', 'error');
    setTimeout(() => {
      window.location.href = 'index.html';  // Redirect to login page
    }, 3000);
  });
  
  // Profile image upload
  document.getElementById('avatar-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('profile-image').src = e.target.result;
        showToast('Profile image updated!', 'success');
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Other section save buttons
  document.getElementById('save-profile').addEventListener('click', function() {
    showToast('Profile settings saved!', 'success');
  });
  
  document.getElementById('save-appearance').addEventListener('click', function() {
    showToast('Appearance settings saved!', 'success');
  });
  
  document.getElementById('save-notifications').addEventListener('click', function() {
    showToast('Notification preferences saved!', 'success');
  });
  
  document.getElementById('save-privacy').addEventListener('click', function() {
    showToast('Privacy settings saved!', 'success');
  });
  
  document.getElementById('save-accessibility').addEventListener('click', function() {
    showToast('Accessibility settings saved!', 'success');
  });
  
  document.getElementById('save-language').addEventListener('click', function() {
    showToast('Language settings saved!', 'success');
  });
  
  document.getElementById('save-data').addEventListener('click', function() {
    showToast('Data settings saved!', 'success');
  });
  
  document.getElementById('save-integrations').addEventListener('click', function() {
    showToast('Integration settings saved!', 'success');
  });
  
  document.getElementById('send-feedback').addEventListener('click', function() {
    showToast('Thank you for your feedback!', 'success');
    document.getElementById('feedback').value = '';
  });
  
  // Sign out all devices
  document.getElementById('sign-out-all').addEventListener('click', function() {
    showToast('Signed out from all devices!', 'success');
  });
  
  // Mute all notifications
  document.getElementById('mute-all').addEventListener('click', function() {
    document.querySelectorAll('#notifications-section input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    showToast('All notifications muted!', 'success');
  });
  
  // Reset appearance settings
  document.getElementById('reset-appearance').addEventListener('click', function() {
    darkModeToggle.checked = false;
    document.body.classList.remove('dark-mode');
    document.querySelectorAll('.color-option').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelector('.color-blue').classList.add('active');
    fontSizeSlider.value = 3;
    textSizeValue.textContent = 'Medium';
    document.querySelector('input[name="layout-density"][value="normal"]').checked = true;
    showToast('Appearance reset to defaults!', 'success');
  });
  
  // Simulate logout functionality
  function logout() {
    // Implementation for logout would go here
    showToast('Logging out...', 'success');
  }