//chiedi all'utente il suo nome
const userName = prompt('What is your Name?');
console.log(userName);

//chiedi all'utente il suo cognome
const userSurname = prompt('What is your Surname?');
console.log(userSurname);

//chiedi all'utente il colore preferito
const userColor = prompt('What is your favourite color?');
console.log(userColor);

//risultato finale
const userPassword = userName + userSurname + userColor + 22;
console.log(userPassword);
document.getElementById('psw').innerHTML = userPassword;




