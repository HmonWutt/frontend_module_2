document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('my-form');
  const submitButton = document.getElementById('form-button');
  submitButton.disabled = true;
  const firstname = document.getElementById('fname');
  const lastname = document.getElementById('lname');
  const email = document.getElementById('email');
  const checkBox = document.getElementById('consent');
  const fields = myForm.querySelectorAll('input, textarea');
  fields.forEach((field) => {
    field.addEventListener('change', function (e) {
      if (isFormValid()) {
        submitButton.disabled = false;
      }
    });
  });
  myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('From submitted');
    myForm.submit();
  });
  function isFormValid() {
    const isFirstnameInvalid = containsNumber(firstname.value);
    const isLastnameInvalid = containsNumber(lastname.value);
    return !isFirstnameInvalid && !isFirstnameInvalid;
  }
  function containsNumber(name) {
    const regex = /\d/;
    return regex.test(name);
  }
});
