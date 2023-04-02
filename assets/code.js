var botAdd = document.querySelector(".botAñadir");
var inputLista = document.querySelector(".inputLista");
var main = document.querySelector(".main");
var listas = document.createElement("ul");
var nuevodiv = document.createElement("div")

var applist=[];
main.appendChild(nuevodiv)
nuevodiv.appendChild(listas);
nuevodiv.className="listasout"


botAdd.addEventListener("click", function () {
   
   var itemslist = document.createElement("ol")
   var butonCompletado = document.createElement("button")
   var butonEliminar = document.createElement("button")
   butonCompletado.className = "botComplet";
   butonEliminar.className = "botEliminar";
   butonCompletado.textContent = "Completado"
   butonEliminar.textContent = "Eliminar"
   itemslist.textContent = inputLista.value;
   inputLista.value=null;
   listas.appendChild(itemslist)    
   itemslist.appendChild(butonCompletado)
   itemslist.appendChild(butonEliminar)

   butonCompletado.addEventListener('click',function(){
    itemslist.style.color="green"
});

   butonEliminar.addEventListener('click',function(){
      itemslist.style.display="none"
      butonCompletado.style.display="none"
      butonEliminar.style.display="none"
})

})
