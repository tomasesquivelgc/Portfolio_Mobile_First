let formelements = document.getElementById('form-element');

function setLocalStorageData(key, value) {
    localStorage.setItem(key, value);
};

form.oninput = function() {
    let userName = formelements[0].innerHTML;
    let userEmail = formelements[1].innerHTML;
    let userText = formelements[2].innerHTML;
    setLocalStorageData("name", userName);
    console.log(localStorage.getItem('name'));
    formelements[2].innerHTML = localStorage.getItem("name");
};