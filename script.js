
function showError(inputEl, errorEl, message) {
  inputEl.classList.add('input-error');
  errorEl.textContent = message;
}

function clearErrors() {
  var errorMsgs = document.querySelectorAll('.error-msg');
  var inputs = document.querySelectorAll('.form-group input, .form-group textarea');

  for (var i = 0; i < errorMsgs.length; i++) {
    errorMsgs[i].textContent = '';
  }
  for (var j = 0; j < inputs.length; j++) {
    inputs[j].classList.remove('input-error');
  }
}
