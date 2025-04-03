// RECUPERO ELEMENTI DAL DOM
const mailList = document.getElementById("mail-list");

// DEFINIZIONE VARIABILI
// creo un array vuoto dove inserire le email generate
let mailArray = [];
// definisco il numero di mail da generare
const mailNumber = 10;
// contatore per la stampa in console e il render in pagina
let counter = 0;

// CORPO DEL PROGRAMMA
// ciclo n volte la chiamata AJAX per n=mailNumber
for (let i = 0; i < mailNumber; i++) {
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(res => {
    // creo una stringa dentro l'array per ogni chiamata
    mailArray[i] = res.data.response;
    // aumento il contatore
    counter++;
    // quando il contatore arriva a mailNumber 
    if (counter === mailNumber) {
      console.log("mailArray è", mailArray);
      // creo un li per ogni stringa dell'array ottenuto contenente la stringa stessa e lo appendo a mailList
      mailArray.forEach(mail => {
        const listItem = document.createElement("li");
        listItem.textContent = mail;
        mailList.appendChild(listItem);      
      });
      mailList.style.backgroundImage = "url(../img/rows.jpg)"
    }
  });
};