function informarMascotas(){
    const x = document.getElementById("informar");
    const y = document.getElementById("listado");
    if (x.style.display==='block'){
        x.style.display="none";
    } else {
        x.style.display='block';
        y.style.display='none'
    }
}

function mostrarListado(){
    let x = document.getElementById("listado");
    const y = document.getElementById("informar");
    if (x.style.display==='block'){
        x.style.display="none";
    } else {
        x.style.display='block';
        y.style.display='none'
    }
}
