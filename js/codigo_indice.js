let oXML = loadXMLDoc("pisos.xml");
let arrayViviendasTemp = oXML.querySelectorAll("vivienda");
let arrayViviendas = Array();
arrayViviendasTemp.forEach(vivienda => {
    arrayViviendas.push(new Vivienda(vivienda.querySelector("idvivienda").textContent,
                                    vivienda.querySelector("direccion").textContent,
                                    vivienda.querySelector("precioalquiler").textContent,
                                    vivienda.querySelector("estadodisponibilidad").textContent,
                                    vivienda.querySelector("imgprincipal").textContent,
                                    vivienda.querySelector("numhabitaciones").textContent,
                                    vivienda.querySelector("descripcion").textContent,
                                    vivienda.querySelector("exterior").textContent,
                                    vivienda.querySelector("climatizacion").textContent, null));
});

arrayViviendas.forEach(vivienda => {
    añadirVivienda(vivienda);
});

function añadirVivienda(oVivienda) {
    let divPisos = document.querySelector("#divViviendas");
    let divCard = document.createElement("DIV");
    divCard.classList.add("card");
    divCard.classList.add("col-12");
    divCard.classList.add("col-md-4");
    divCard.style.width = "18rem";
    divPisos.appendChild(divCard);
    let oImagen = document.createElement("IMG");
    oImagen.setAttribute("src", "img/pisos/"+oVivienda.imgPrincipal);
    oImagen.classList.add("card-img-top");
    oImagen.classList.add("mt-3");
    divCard.appendChild(oImagen);
    let divCardBody = document.createElement("DIV");
    divCardBody.classList.add("card-body");
    divCard.appendChild(divCardBody);
    let h5 = document.createElement("H5");
    h5.classList.add("card-title");
    h5.textContent = oVivienda.direccion;
    divCardBody.appendChild(h5);
    let parrafo = document.createElement("P");
    parrafo.classList.add("card-text");
    parrafo.textContent = oVivienda.descripcion;
    divCardBody.appendChild(parrafo);
    let boton = document.createElement("A");
    boton.classList.add("btn");
    boton.classList.add("btn-primary");
    boton.textContent = "Ver detalles";
    divCardBody.appendChild(boton);
}

function loadXMLDoc(filename) {
    let xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else { // code for IE5 and IE6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();

    return xhttp.responseXML;
}