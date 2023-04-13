function setLocalStorageData(key, value) {
    localStorage.setItem(key, value);
    console.log(`Stored ${value} with key ${key} in LocalStorage.`);
};
setLocalStorageData("name", "John Doe");

