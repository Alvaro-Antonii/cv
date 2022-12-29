
let array = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  
  "educacion":{
    "secu" :"Escuel Pascual Segura - Nº167bs- City Gwenborough",
    "Univ" : " Escuela Marketing and Web - Universidad de León 06/2009", 
    "Master" : "Máster en Publicidad Digital/Estrategias de Venta 09/2008 Universidad de León",
    "Inv" : "Grado en Marketing e Investigación de Mercados-León"
  },
  "cursos":{
    "Manager": "Curso de Community Manager y RRSS - Escuela Ergón, 2018",
     "Neu"   :  "Curso de Neuromarketing - Deusto Formación, 2016",
      "sup"  : "Curso Superior de Copywriting -MasterD, 2015",
      "ingles": "Curso A-1 Instituto open-english"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegar@gmail.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}];
const per = JSON.parse(JSON.stringify(array));

document.getElementById("nom").innerHTML = "Nombre y Apellido: "+per[0].name;
document.getElementById("tel").innerHTML = "Teléfono: "+per[0].phone;
document.getElementById("email").innerHTML = "Correo: "+per[0].website;
document.getElementById("dire").innerHTML = "Dirección: Calle "+per[0].address.street+ " número "+per[0].address.suite+" de la ciudad de "+per[0].address.city;

//Educaciòn

document.getElementById("secu").innerHTML = "Secundaria: "+per[0].educacion.secu;
document.getElementById("uni").innerHTML = "Universitarios: "+per[0].educacion.Univ;
document.getElementById("mast").innerHTML = "Master: "+per[0].educacion.Master;
document.getElementById("inv").innerHTML = "Investigación: "+per[0].educacion.Inv;

//Capacitaciones
document.getElementById("rh").innerHTML = per[0].cursos.Manager;
document.getElementById("mk").innerHTML = per[0].cursos.Neu;
document.getElementById("cw").innerHTML = per[0].cursos.sup;
document.getElementById("ing").innerHTML = per[0].cursos.ingles;

document.getElementById("tit").innerHTML = "<br/>Lic. Recursos Humanos <br/>"+per[0].name;

//Eventos
document.getElementById("fre").addEventListener("mouseenter",function(){
  this.style.background = "#d6a4a4";
})
document.getElementById("fre").addEventListener("mouseout",function(){
  this.style.background = "#eccbcb";
})

document.getElementById("fac").addEventListener("click",function(){
  this.style.background = "red";
})
document.getElementById("twi").addEventListener("click",function(){
  this.style.color = "blue";
})
document.getElementById("goo").addEventListener("click",function(){
  this.style.color = "yellow";
})
document.getElementById("ins").addEventListener("click",function(){
  this.style.fontSize = "30px";
  this.style.background = "pink";
})
document.getElementById("git").addEventListener("click",function(){
  this.style.border = "null";
  this.style.background = "green";
})







