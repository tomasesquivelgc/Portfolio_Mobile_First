let formelement = document.getElementById('form-element');
let userName = formelement[0];
let userEmail = formelement[1];
let userText = formelement[2];

form.oninput = function() {
    const data = {
        saveName : userName.value,
        saveEmail : userEmail.value,
        saveText : userText.value,
    };
    localStorage.setItem("formdata", JSON.stringify(data))
};

function loadData() {
   // userName.value = "JSON.parse(localStorage.getItem(.saveName))";
}
loadData();