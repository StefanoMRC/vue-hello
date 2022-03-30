// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
      el: '#root',
      data:{
          messaggio:"Ciao questa è una prova Vue",
          classiTesto: ['txt_center','txt_grande','color_blu'],
          classiFoto:['width'],
          foto: 'https://images.unsplash.com/photo-1648630595843-9a96d9a16a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'

        } 
        

       
    }
)