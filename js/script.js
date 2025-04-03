// RECUPERO ELEMENTI DAL DOM
// ul
const mailList = document.getElementById("mail-list");

// DEFINIZIONE VARIABILI
// creo un array vuoto dove inserire le email generate
const mailArray = [];
// definisco il numero di mail da generare
const mailNumber = 10;

// FUNZIONI
// funzione per ciclare la chiamata ajax per n volte e assegnare le risposte ottenute come elementi di un array
let genMailArray = () =>{
  for(let i=0; i<mailNumber; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(res => {
      if(i < mailNumber - 1){
        mailArray.push(res.data.response);
      }
      else if(i == mailNumber - 1){
        mailArray.push(res.data.response);
        console.log("L'array ottenuto da genMailList è",mailArray);
      }
    })
  }
  return mailArray;
}

// CORPO DEL PROGRAMMA    
// chiamo genMailArray
genMailArray();

