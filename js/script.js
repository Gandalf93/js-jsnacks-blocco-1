//  1-L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.Se uguale lunghezza dire sono uguali e stamparle entrambe.

var parola1 = prompt('scrivi la parola1');
var parola2 = prompt('scrivi la parola2');

var lung1 = parola1.length;
var lung2 = parola2.length;

if (lung1 < lung2){
document.getElementById("primacorta").innerHTML = parola1 + ' - ' + parola2;
}else if (lung1 > lung2){
document.getElementById("secondacorta").innerHTML = parola2 + ' - ' + parola1;
}else{
document.getElementById("uguali").innerHTML = 'le lunghezze sono uguali:' + ' ' + parola1 + ' - ' + parola2;
}




//  2-Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.Variante: stampare solo i numeri pari.



 somma = 0
 for (var i = 0; i < 5; i++ ){
 num = parseInt(prompt('inserisci il numero'));
 console.log(num);
 somma += num;
 }

 document.getElementById("sum").innerHTML = 'somma numeri' + '  ' + somma;
 console.log(somma);

 i = 0;
 somma = 0
 while(i < 5){
     num = parseInt(prompt('inserisci il numero'));
     somma += num
     i++;
 }
 document.getElementById("sum").innerHTML = 'somma numeri' + '  ' + somma;

 for (var i = 0; i < 5; i++){
     num = parseInt(prompt('inserisci il numero'));
     if ( num % 2 === 0){
     console.log(num);
     }
 }



// 3-Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

 var dispari = [];

 for(i = 0; i < 6; i++){
     num = parseInt(prompt('inserisci un numero'));
     if ( num % 2 != 0){
         dispari.push(num);
     }
 }
 console.log(dispari);
        

// 4-In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var listaInvitati = ['Daisy', 'Ugo', 'Ivo', 'Sauron', 'Saruman'];

var nome = prompt('inserisci il tuo nome');

i = 0;
var found = 'false'; 
while (i < listaInvitati.length){
    if ( nome == listaInvitati[i]){
        found = 'true';
    }
    i++;
}
    
if (found == 'true'){
    console.log('Benvenuto' + ' ' + nome);
    document.getElementById("yes").innerHTML = 'Benvenuto' + ' ' + nome;
}  else{
    console.log('Mi dispiace' + ' ' + nome + ' ' + ',non sei nella lista');
    document.getElementById("not").innerHTML = 'Mi dispiace' + ' ' + nome +  ', non sei nella lista';
}      
   
