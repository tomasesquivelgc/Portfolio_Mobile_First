function validateForm() {
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  // Reset the error message
  errorMessage.innerHTML = '';

  // Check if name is empty
  if (!nameInput.value) {
    errorMessage.innerHTML = 'Please enter your name.';
    return false;
  }

  // Check if email is empty
  if (!emailInput.value) {
    errorMessage.innerHTML = 'Please enter your email address.';
    return false;
  }

  // Check if email is in lowercase
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    errorMessage.innerHTML = 'Please enter your email address in lowercase.';
    return false;
  }

  // Form is valid
  return true;
}
