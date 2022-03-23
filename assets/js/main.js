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

//                                                  PART 2

//chiedi all'utente il suo nome
const userName2 = prompt('BETTER PSW: What is your Name?');
console.log(userName);

//chiedi all'utente il suo cognome
const userSurname2 = prompt('BETTER PSW: What is your Surname?');
console.log(userSurname);

//chiedi all'utente il colore preferito
const userColor2 = prompt('BETTER PSW: What is your favourite color?');
console.log(userColor);

//risultato finale
const userPassword2 = 'òA0^' + userName2 + '5548' + userSurname2 + '<^.^>' + userColor2 + 22;
console.log(userPassword);
document.getElementById('psw2').innerHTML = userPassword2;
