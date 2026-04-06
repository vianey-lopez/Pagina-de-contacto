















































































































































function validateTelefono(value) {
  var errorEl = document.getElementById('error-telefono');
  var inputEl = document.getElementById('telefono');
  var digits = value.replace(/\D/g, '');

  if (value === '') {
    showError(inputEl, errorEl, 'El teléfono es obligatorio.');
    return false;
  }
  if (!/^[\d\s()+-]+$/.test(value)) {
    showError(inputEl, errorEl, 'El teléfono solo puede contener números, espacios, paréntesis y guiones.');
    return false;
  }
  if (digits.length < 10) {
    showError(inputEl, errorEl, 'El teléfono debe tener al menos 10 dígitos.');
    return false;
  }
  return true;
}