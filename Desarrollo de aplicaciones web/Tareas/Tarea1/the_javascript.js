function informarMascotas(){
    const x = document.getElementById("informar");
    const y = document.getElementById("listado");
    const z = document.getElementById("estadistica");
    if (x.style.display==='block'){
        x.style.display="none";
    } else {
        x.style.display='block';
        y.style.display='none';
        z.style.display='none';
    }
}

function mostrarListado(){
    let x = document.getElementById("listado");
    const y = document.getElementById("informar");
    const z = document.getElementById("estadistica");
    if (x.style.display==='block'){
        x.style.display="none";
    } else {
        x.style.display='block';
        y.style.display='none';
        z.style.display='none';
    }
}


function mostrarEstadistica(){
    let x = document.getElementById("estadistica");
    const y = document.getElementById("listado");
    const z = document.getElementById("informar");
    if (x.style.display==='block'){
        x.style.display="none";
    } else {
        x.style.display='block';
        y.style.display='none';
        z.style.display='none'
    }
}
