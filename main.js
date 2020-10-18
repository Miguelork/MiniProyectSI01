document.getElementById("enviar").onclick = function(){

    /*Estoy seguro de que esta validación hay otra forma de hacerla, pero me faltan cosas 
    del miniproyecto aun, asi que esta validación bonita, se las debo, sorry*/

    if(document.getElementById("nombre").value !="" && document.getElementById("nombre").value !=null &&
        document.getElementById("email").value != "" && document.getElementById("email").value != null &&
        document.getElementById("mensaje").value!="" && document.getElementById("mensaje").value!=null &&
        document.getElementById("celular").value!="" && document.getElementById("celular").value!=null) {

        console.log("Su nombre es: " + document.getElementById("nombre").value);
        console.log("Su telefono es: " + document.getElementById("celular").value);
        console.log("Su email es: " + document.getElementById("email").value);
        console.log("Su mensaje es: " + document.getElementById("mensaje").value);
        alert("Se ha enviado su mensaje, pronto le respondere")
    } else{
        alert("Por favor rellene todos los cambios")
    }
}

    var skill=[
        {"nombre":"HTML","nivel":"90%"},
        {"nombre":"CSS","nivel":"30%"},
        {"nombre":"Bootstrap","nivel":"99%"},
        {"nombre":"JavaScript", "nivel":"70%"},
        {"nombre":"Java", "nivel":"60%"},
        {"nombre":"Assembler", "nivel":"10%"}
    ];

    window.addEventListener("load",function(e){
        document.getElementById("bar1").style.width =skill[0].nivel;
        document.getElementById("bar2").style.width =skill[1].nivel;
        document.getElementById("bar3").style.width =skill[2].nivel;
        document.getElementById("bar4").style.width =skill[3].nivel;
        document.getElementById("bar5").style.width =skill[4].nivel;
        document.getElementById("bar6").style.width =skill[5].nivel;
    });

