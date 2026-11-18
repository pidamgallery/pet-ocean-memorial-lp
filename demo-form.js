const form = document.querySelector('.contact-form');
const submitButton = form.querySelector('button');
const result = document.querySelector('#form-result');
const textFields = [document.querySelector('#demo-name'), document.querySelector('#demo-message')];

function validateText(field) {
  field.setCustomValidity(field.value && !field.value.trim() ? '空白以外の文字を入力してください。' : '');
}

form.addEventListener('input', (event) => {
  if (textFields.includes(event.target)) validateText(event.target);
  result.textContent = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  textFields.forEach(validateText);
  if (form.reportValidity()) {
    result.textContent = '入力内容を確認しました。このデモでは送信されません。';
  }
});

submitButton.disabled = false;
