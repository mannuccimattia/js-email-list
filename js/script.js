// RECUPERO ELEMENTI DAL DOM
// ul
const mailList = document.getElementById("mail-list");

// DEFINIZIONE VARIABILI
// creo un array vuoto dove inserire le email generate
let mailArray = [];
// definisco il numero di mail da generare
const mailNumber = 10;


for (let i = 0; i < mailNumber; i++) {
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(res => {
    if (i < mailNumber - 1) {
      mailArray.push(res.data.response);
    }
    else if (i == mailNumber - 1) {
      mailArray.push(res.data.response);
      console.log("mailArray è", mailArray);

      for(let j=0; j<mailNumber; j++){
        const listItem = document.createElement("li");
        const itemContent = document.createTextNode(mailArray[j]);
        listItem.appendChild(itemContent);
        mailList.appendChild(listItem);
      }
      // const listItemsArray = mailArray.map(mail => `<li>${mail}</li>`);
      // console.log("listItemsArray è", listItemsArray);

      // for(let j=0; j<mailNumber; j++){
      //   mailList.innerText = listItemsArray[j];
      // }
    }
  });
}
