// RECUPERO ELEMENTI DAL DOM
// ul
const mailList = document.getElementById("mail-list");

// DEFINIZIONE VARIABILI
// creo un array vuoto dove inserire le email generate
let mailArray = [];
// definisco il numero di mail da generare
const mailNumber = 10;
// contatore
let counter = 0;



for (let i = 0; i < mailNumber; i++) {
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(res => {
    mailArray[i] = res.data.response;
    counter++;

    if (counter === mailNumber) {
      console.log("mailArray è", mailArray);

      for(let j=0; j<mailNumber; j++){
        const listItem = document.createElement("li");
        const itemContent = document.createTextNode(mailArray[j]);
        listItem.appendChild(itemContent);
        mailList.appendChild(listItem);
      }
     
    }
  });
}




// SOLUZIONE PROMISE.ALL
// let promises = [];

// for(let i = 0; i < mailNumber; i++){
//   promises.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));
// }
// console.log(promises)
// Promise.all(promises)
//   .then(responses => {
//     responses.forEach(response => {
//       mailArray.push(response.data.response);
//     });
//     console.log("mailArray è", mailArray);

//     mailArray.forEach(email => {
//       const listItem = document.createElement("li");
//       listItem.textContent = email;
//       mailList.appendChild(listItem);
//     });
//   })
//   .catch(error => {
//     console.error("Errore nel recupero delle mail:", error);
//   });