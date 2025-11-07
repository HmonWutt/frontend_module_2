document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('my-form');
  const submitButton = document.getElementById('form-button');
  submitButton.disabled = true;
  const firstname = document.getElementById('fname');
  const lastname = document.getElementById('lname');
  const email = document.getElementById('email');
  const radioButton = [...document.querySelectorAll('input[name="type"]')];
  const consent = document.getElementById('consent');
  const textarea = myForm.querySelector('textarea');
  const inputs = [firstname, lastname, email, ...radioButton, consent, textarea];
  inputs.forEach((input) => {
    input.addEventListener('input', function (e) {
      if (isFormValid()) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
  });
  myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('From submitted');
    myForm.submit();
  });
  function isFormValid() {
    const isRadioButtonChecked = radioButton.some((radio) => radio.checked);
    const consentGiven = consent.checked;
    const isFirstnameValid = containsNoNumber(firstname.value.trim());
    const isLastnameValid = containsNoNumber(lastname.value.trim());
    const isTextAreaFilled = textarea.value.trim();
    const isEmailFilled = isEmailValid(email.value.trim());
    return (
      isFirstnameValid && isFirstnameValid && isEmailFilled && consentGiven && isTextAreaFilled
    );
  }
  function containsNoNumber(name) {
    const regex = /\d+/;
    return !regex.test(name);
  }
  function isEmailValid(email) {
    const emailPattern = /^[^.\s@(),:;<>[\]][^\s@(),:;<>[\]]+@[a-zA-Z0-9-.]+[a-zA-Z]{2}$/;
    return emailPattern.test(email);
  }
});
