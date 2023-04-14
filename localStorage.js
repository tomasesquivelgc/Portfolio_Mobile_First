const formelement = document.getElementById('form-element');
const userName = formelement[0];
const userEmail = formelement[1];
const userText = formelement[2];

formelement.oninput = function saveData () {
  const data = {
    saveName: userName.value,
    saveEmail: userEmail.value,
    saveText: userText.value,
  };
  localStorage.setItem('formdata', JSON.stringify(data));
};

function loadData() {
  const dataForm = JSON.parse(localStorage.getItem('formdata'));
  userName.value = dataForm.saveName;
  userEmail.value = dataForm.saveEmail;
  userText.value = dataForm.saveText;
}
loadData();