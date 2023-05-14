
var listaPersonagem = []
    
function rhino() {
   

       var rhinoVar = {
       nome: "Rhino",
       hp: "150",
       att: "70",
       def: "90",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/rhino.jpg">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`

   listaPersonagem.push(rhinoVar)
   window.location.href = "cenario.html";
   } else {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/rhino.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(rhinoVar)

   }

   }
}
rhinoVar.personagem();


}

function abutre() {
   
   var abutreVar = {
   nome: "Abutre",
   hp: "90",
   att: "60",
   def: "30",
   personagem: function (){
   var nome = this.nome; 
   var hp = this.hp; 
   var att = this.att; 
   var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/abutreCards.png">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`

   listaPersonagem.push(abutreVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/abutreCards.png">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(abutreVar)
   }
   }

   
   
}       
abutreVar.personagem();

}

   function scorpion() {
       
       var scorpionVar = {
       nome: "Scorpion",
       hp: "120",
       att: "70",
       def: "50",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/scorpion.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(scorpionVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/scorpion.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   
   listaPersonagem.push(scorpionVar)
   }
   }
}       
scorpionVar.personagem();
}
       
   function electro() {
               
       var electroVar = {
       nome: "Electro",
       hp: "100",
       att: "70",
       def: "40",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/electro.webp ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(electroVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {  
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/electro.webp">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(electroVar)
   }

   }
}       
electroVar.personagem();     

}
       
function shocker() {
   
   
   var shockerVar = {
   nome: "Shocker",
   hp: "110",
   att: "60",
   def: "40",
   personagem: function (){
   var nome = this.nome; 
   var hp = this.hp; 
   var att = this.att; 
   var def = this.def; 
   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/shocker.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(shockerVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else 
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/shocker.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(shockerVar)
   
   }
}       
shockerVar.personagem();
}

   function mistery() {
       
       
       var misterio = {
       nome: "Misterio",
       hp: "80",
       att: "50",
       def: "90",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/misterio.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(misterio)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {     
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/misterio.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(misterio)
   }

   }
}       
misterio.personagem();
}

      function lagarto() {
       
      var lagartoVar = {
      nome: "Lagarto",
      hp: "130",
      att: "90",
      def: "80",
      personagem: function (){
      var nome = this.nome; 
      var hp = this.hp; 
      var att = this.att; 
      var def = this.def; 

  if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/lagarto.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(lagartoVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/lagarto.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(lagartoVar)
}
      
   }
   
}       
lagartoVar.personagem();
}          
function duende() {
   
       var duendeVerde = {
       nome: "Duende Verde",
       hp: "130",
       att: "80",
       def: "80",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

if (listaPersonagem.length -1 == 4) {
 
div_nome.innerHTML = `${nome}`
div_imagem.innerHTML = `<img src="../imagens/duende verde.jpg  ">`
div_hp.innerHTML = `${hp}`
div_att.innerHTML = `${att}`
div_def.innerHTML = `${def}`
listaPersonagem.push(duendeVerde)
window.location.href = "cenario.html";
console.log('foi')
} else {
   
div_nome.innerHTML = `${nome}`
div_imagem.innerHTML = `<img src="../imagens/duende verde.jpg  ">`
div_hp.innerHTML = `${hp}`
div_att.innerHTML = `${att}`
div_def.innerHTML = `${def}`
listaPersonagem.push(duendeVerde)
}

   }
}       
duendeVerde.personagem();

}

function macabro() {
   
       var duendeMacabro = {
       nome: "Duende Macabro",
       hp: "120",
       att: "70",
       def: "90",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 


   if (listaPersonagem.length -1 == 4) {
   

   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/duende macabro.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(duendeMacabro)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {

   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/duende macabro.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(duendeMacabro)
   }
   }
}       
duendeMacabro.personagem();

}
       
   function venom() {
       
       var venomVar = {
       nome: "Venom",
       hp: "130",
       att: "100",
       def: "100",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

       
   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/VenomCards\ 1.png">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(venomVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/VenomCards\ 1.png">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(venomVar)
   }
       
   }
}       
venomVar.personagem();


}    

       function carnificina() {
           
       var carnage = {
       nome: "Carnage",
       hp: "120",
       att: "110",
       def: "110",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   

     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/carnage.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(carnage)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/carnage.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(carnage)
   }

   }
}       
carnage.personagem();
}    

    
   function silver() {
       
       var silverSable = {
       nome: "Silver Sable",
       hp: "70",
       att: "40",
       def: "60",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/silver sable.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(silverSable)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {

     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/silver sable.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(silverSable)
   }

   }
}       
silverSable.personagem();

}

    
     function rei() {
       
       var reiDoCrime = {
       nome: "Rei do Crime",
       hp: "60",
       att: "70",
       def: "80",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/rei do crime.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(reiDoCrime)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/rei do crime.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(reiDoCrime)
   }

   }
}       
reiDoCrime.personagem();
}

    function martelo() {
       
        
       var cabecaDeMartelo = {
       nome: "Cabeça de Martelo",
       hp: "90",
       att: "80",
       def: "80",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/cabeça de Martelo.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(cabecaDeMartelo)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/cabeça de Martelo.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(cabecaDeMartelo)
   }
       
   }
}       
cabecaDeMartelo.personagem();

}

    
function gata() {
   
   
   var gataNegra = {
       nome: "Gata Negra",
       hp: "60",
       att: "40",
       def: "70",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/gata negra.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(gataNegra)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {

     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/gata negra.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(gataNegra)
   }

   }
}       
gataNegra.personagem();
}


       function morbius() {
                
       var morbiusVar = {
       nome: "Morbius",
       hp: "110",
       att: "80",
       def: "100",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/morbius.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(morbiusVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/morbius.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(morbiusVar)
   }
       
   }
}       
morbiusVar.personagem();

}

      function morlun() {
       
       var morlunVar = {
       nome: "Morlun",
       hp: "100",
       att: "80",
       def: "90",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/morlun.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(morbiusVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/morlun.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(morbiusVar)
   }

   }
}       
morlunVar.personagem();
}  

    function kraven() {
       
        
       var kravenVar = {
       nome: "Kraven",
       hp: "120",
       att: "90",
       def: "80",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/kraven.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(kravenVar)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/kraven.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(kravenVar)
   }

   }
}       
kravenVar.personagem();

}

   function octopus(){
       
       var drOctopus = {
       nome: "Dr. Octopus",
       hp: "130",
       att: "120",
       def: "90",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/dr octopus.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(drOctopus)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/dr octopus.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(drOctopus)
   }

   }
}       
drOctopus.personagem();

}
    
       function negativo() {
           
       var srNegativo = {
       nome: "Sr. Negativo",
       hp: "90",
       att: "80",
       def: "60",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/sr Negativo.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(srNegativo)
   window.location.href = "cenario.html";
   console.log('foi')
   } else {
     div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/sr Negativo.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(srNegativo)
   }
   }   
}       
   srNegativo.personagem();
}

    
function areia() {
   
   
   var homemAreia = {
       nome: "Homem Areia",
       hp: "120",
       att: "80",
       def: "120",
       personagem: function (){
       var nome = this.nome; 
       var hp = this.hp; 
       var att = this.att; 
       var def = this.def; 

   if (listaPersonagem.length -1 == 4) {
   
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/homem areia.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaPersonagem.push(homemAreia)
   window.location.href = "cenario.html";
   console.log('foi')
   
   } else {
   div_nome.innerHTML = `${nome}`
   div_imagem.innerHTML = `<img src="../imagens/homem areia.jpg  ">`
   div_hp.innerHTML = `${hp}`
   div_att.innerHTML = `${att}`
   div_def.innerHTML = `${def}`
   listaViloes.push(homemAreia)
   }
   
}
}       
homemAreia.personagem();
}
