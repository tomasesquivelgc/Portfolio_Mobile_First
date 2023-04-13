const form = document.getElementById('form-element');
function validateForm(event) {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = 'Please use only lowercase';
  }
}

form.addEventListener('submit', validateForm);
