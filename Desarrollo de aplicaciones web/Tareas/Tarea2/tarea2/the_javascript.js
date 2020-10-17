function informarMascotas(){
    const x = document.getElementById("informar");
    const y = document.getElementById("listado");
    const z = document.getElementById("estadistica");
    let escondido = document.getElementById("esconder-mascota");
    if (x.style.display==='block'){
        x.style.display="none";
    } else {
        x.style.display='block';
        y.style.display='none';
        z.style.display='none';
        escondido.style.display='none';
        x.scrollIntoView(true);
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
        x.scrollIntoView(true);
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
        x.scrollIntoView(true);
    }
}




var RegionesYcomunas = {

    "regiones": [{
        "NombreRegion": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
        {
            "NombreRegion": "Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            "NombreRegion": "Antofagasta",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            "NombreRegion": "Atacama",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            "NombreRegion": "Coquimbo",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            "NombreRegion": "Valparaíso",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
            "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
            "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            "NombreRegion": "Región del Maule",
            "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            "NombreRegion": "Región del Biobío",
            "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
        },
        {
            "NombreRegion": "Región de la Araucanía",
            "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
        },
        {
            "NombreRegion": "Región de Los Ríos",
            "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            "NombreRegion": "Región de Los Lagos",
            "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            "NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
            "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            "NombreRegion": "Región de Magallanes y de la AntárVca Chilena",
            "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
            "NombreRegion": "Región Metropolitana de Santiago",
            "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
}


jQuery(document).ready(function () {

    var iRegion = 0;
    var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="sin-region">--</option>';
    var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';

    jQuery.each(RegionesYcomunas.regiones, function () {
        htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
        iRegion++;
    });

    jQuery('#regiones').html(htmlRegion);
    jQuery('#comunas').html(htmlComunas);

    jQuery('#regiones').change(function () {
        var iRegiones = 0;
        var valorRegion = jQuery(this).val();
        var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
        jQuery.each(RegionesYcomunas.regiones, function () {
            if (RegionesYcomunas.regiones[iRegiones].NombreRegion === valorRegion) {
                var iComunas = 0;
                jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
                    htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
                    iComunas++;
                });
            }
            iRegiones++;
        });
        jQuery('#comunas').html(htmlComuna);
    });
    jQuery('#comunas').change(function () {
        if (jQuery(this).val() === 'sin-region') {
            alert('selecciones Región');
        } else if (jQuery(this).val() === 'sin-comuna') {
            alert('selecciones Comuna');
        }
    });
    jQuery('#regiones').change(function () {
        if (jQuery(this).val() === 'sin-region') {
            alert('selecciones Región');
        }
    });

});





var RegionesYcomunas2 = {

    "regiones": [{
        "NombreRegion": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
        {
            "NombreRegion": "Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            "NombreRegion": "Antofagasta",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            "NombreRegion": "Atacama",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            "NombreRegion": "Coquimbo",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            "NombreRegion": "Valparaíso",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
            "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
            "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            "NombreRegion": "Región del Maule",
            "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            "NombreRegion": "Región del Biobío",
            "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
        },
        {
            "NombreRegion": "Región de la Araucanía",
            "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
        },
        {
            "NombreRegion": "Región de Los Ríos",
            "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            "NombreRegion": "Región de Los Lagos",
            "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            "NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
            "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            "NombreRegion": "Región de Magallanes y de la AntárVca Chilena",
            "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
            "NombreRegion": "Región Metropolitana de Santiago",
            "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
}


jQuery(document).ready(function () {

    var iRegion = 0;
    var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="sin-region">--</option>';
    var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';

    jQuery.each(RegionesYcomunas2.regiones, function () {
        htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas2.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas2.regiones[iRegion].NombreRegion + '</option>';
        iRegion++;
    });

    jQuery('#regiones2').html(htmlRegion);
    jQuery('#comunas2').html(htmlComunas);

    jQuery('#regiones2').change(function () {
        var iRegiones = 0;
        var valorRegion = jQuery(this).val();
        var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
        jQuery.each(RegionesYcomunas2.regiones, function () {
            if (RegionesYcomunas2.regiones[iRegiones].NombreRegion === valorRegion) {
                var iComunas = 0;
                jQuery.each(RegionesYcomunas2.regiones[iRegiones].comunas, function () {
                    htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas2.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas2.regiones[iRegiones].comunas[iComunas] + '</option>';
                    iComunas++;
                });
            }
            iRegiones++;
        });
        jQuery('#comunas2').html(htmlComuna);
    });
    jQuery('#comunas2').change(function () {
        if (jQuery(this).val() === 'sin-region') {
            alert('selecciones Región');
        } else if (jQuery(this).val() === 'sin-comuna') {
            alert('selecciones Comuna');
        }
    });
    jQuery('#regiones2').change(function () {
        if (jQuery(this).val() === 'sin-region') {
            alert('selecciones Región');
        }
    });

});



function otherPet(select){
    let x = document.getElementById("esconder-mascota");
    if (select.value===1){
        x.style.display="block";
    } else {
        x.style.display = 'none';
    }
}

function otherPet2(select){
    let x = document.getElementById("esconder-mascota1");
    if (select.value===1){
        x.style.display="block";
    } else {
        x.style.display = 'none';
    }
}



let contadorFotos1=1;

function agregarfoto1(){
    let divfoto=document.getElementById('div-foto-mascotas')
    if (contadorFotos1 < 5) {
        divfoto.innerHTML = divfoto.innerHTML + `
        <div class="foto-div" id="foto-div${contadorFotos1 + 1}">
        <input type="file" accept="image/*" required="required"/>
        </div>`;
    } if (contadorFotos1 === 4){
        document.getElementById('agregar1').style.display='none'
    }
    contadorFotos1 +=1
}

let contadorFotos2=1;
function agregarfoto2(){
    let divfoto=document.getElementById('div-foto-mascotas2')
    if (contadorFotos2 < 5) {
        divfoto.innerHTML = divfoto.innerHTML + `
        <div class="foto-div" id="foto-div${contadorFotos1 + 1}2">
        <input type="file" accept="image/*" required="required"/>
        </div>`;
    } if (contadorFotos2 === 4){
        document.getElementById('agregar11').style.display='none'
    }
    contadorFotos2 +=1
}


function createForm(){
    document.getElementById("hidden_form").style.display='block';
    document.getElementById("esconder-mascota1").style.display='none';
}

function revealHidden(){
    document.getElementById("modal").style.display='block'
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display='none';
    }
}


function mostrarError(msg) {

    let contenedor = document.getElementById('error');

    contenedor.innerHTML = msg;
    contenedor.style.display = 'block';
    contenedor.style.fontWeight = '300';

}

function validateForm() {
    document.getElementById('modal').style.display='none';

    var region = document.forms["the_form"]["region"].value;
    var comuna = document.forms["the_form"]["comuna"].value;
    var calle = document.forms["the_form"]["calle"].value;
    var numero = document.forms["the_form"]["numero"].value;
    let sector = document.forms["the_form"]["sector"].value;

    var nombre = document.forms["the_form"]["nombre"].value;
    var email = document.forms["the_form"]["email"].value;
    var celular = document.forms["the_form"]["celular"].value;

    var tipomascota = document.forms["the_form"]["tipo-mascota"].value;
    var escondermascota = document.forms["the_form"]["esconder-mascota"].value;
    var edadmascota = document.forms["the_form"]["edad-mascota"].value;
    var colormascota = document.forms["the_form"]["color-mascota"].value;
    var razamascota = document.forms["the_form"]["raza-mascota"].value;
    var estirilizadomascota = document.forms["the_form"]["esterilizado-mascota"].value;
    var vacunasmascota = document.forms["the_form"]["vacunas-mascotas"].value;
    var fotomascota = document.forms["the_form"]["foto-mascota11"].value;

    var istrue = true
    let message="ERROR: Complete los siguientes campos correctamente <span onclick=\"document.getElementById('error').style.display='none';" +
        "\" class=\"close\" id='errorclose' >&times;</span><br>Primer Formulario: ";

    if (region ==='sin-region'){
        message=message+"Region, "
        istrue=false
    }
    if (comuna ==='sin-comuna'){
        message=message+"Comuna, "
        istrue=false
    }

    if (calle === "" || calle.length > 250 || !/^[a-zA-Z ]+$/.test(calle)) {
        message=message+"Calle, "
        istrue = false;
    }
    if (numero.length > 20 || !/^[0-9]+$/.test(numero)) {
        message=message+"Número, <br>"
        istrue = false;
    }

    if (sector.length > 100 || !/^[a-zA-Z ]+$/.test(sector)) {
        message=message+"Sector, "
        istrue = false;
    }
    if (nombre.length > 200 || !/^[a-zA-Z ]+$/.test(nombre)) {
        message=message+"Nombre, "
        istrue = false;
    }

    let emailregex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if (!emailregex.test(email)) {
        message=message+"Email, "
        istrue = false;
    }

    if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(celular)) {
        message=message+"Celular, "
        istrue = false;
    }

    if (tipomascota === "-1"){
        message=message+"Tipo de mascota, "
        istrue=false
    }
    if (tipomascota ==='1'){ if (escondermascota.length > 40 || !/^[a-zA-Z ]+$/.test(escondermascota)) {
        message=message+"Recuadro de mascota, "
        istrue=false;
    }}

    if (!/^[0-9]+$/.test(edadmascota)){
        message=message+"Edad de mascota, "
        istrue=false;
    }


    if (!/^[a-zA-Z ]+$/.test(colormascota) || colormascota.length>30){
        message=message+"Color, "
        istrue=false;
    }
    if (!/^[a-zA-Z ]+$/.test(razamascota) || razamascota.length >30){istrue=false;}
    if (estirilizadomascota==='-1'){
        message=message+"Opción de estirilización, "
        istrue=false
    }
    if (vacunasmascota==='-1'){
        message=message+"Opción de vacunado, "
        istrue=false
    }
    if (!/\.(jpe?g|png|gif|bmp)$/i.test(fotomascota) || contadorFotos1>4){
        message=message+"Imagen, "
        istrue=false
    }

    if (document.getElementById("hidden_form").style.display==='block') {
        var region2 = document.forms["the_form"]["region2"].value;
        var comuna2 = document.forms["the_form"]["comuna2"].value;
        var calle2 = document.forms["the_form"]["calle2"].value;
        var numero2 = document.forms["the_form"]["numero2"].value;
        let sector2 = document.forms["the_form"]["sector2"].value;

        var nombre2 = document.forms["the_form"]["nombre2"].value;
        var email2 = document.forms["the_form"]["email2"].value;
        var celular2 = document.forms["the_form"]["celular2"].value;

        var tipomascota2 = document.forms["the_form"]["tipo-mascota2"].value;
        var escondermascota2 = document.forms["the_form"]["esconder-mascota2"].value;
        var edadmascota2 = document.forms["the_form"]["edad-mascota2"].value;
        var colormascota2 = document.forms["the_form"]["color-mascota2"].value;
        var razamascota2 = document.forms["the_form"]["raza-mascota2"].value;
        var estirilizadomascota2 = document.forms["the_form"]["esterilizado-mascota2"].value;
        var vacunasmascota2 = document.forms["the_form"]["vacunas-mascotas2"].value;
        var fotomascota2 = document.forms["the_form"]["foto-mascota12"].value;

        message=message+"<br>Segundo Formulario: "

        if (region2 ==='sin-region'){
            message=message+"Region, "
            istrue=false
        }
        if (comuna2 ==='sin-comuna'){
            message=message+"Comuna, "
            istrue=false
        }

        if (calle2 === "" || calle2.length > 250 || !/^[a-zA-Z ]+$/.test(calle2)) {
            message=message+"Calle, "
            istrue = false;
        }
        if (numero2.length > 20 || !/^[0-9]+$/.test(numero2)) {
            message=message+"Número, <br>"
            istrue = false;
        }

        if (sector2.length > 100 || !/^[a-zA-Z ]+$/.test(sector2)) {
            message=message+"Sector, "
            istrue = false;
        }
        if (nombre2.length > 200 || !/^[a-zA-Z ]+$/.test(nombre2)) {
            message=message+"Nombre, "
            istrue = false;
        }

        let emailregex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (!emailregex.test(email2)) {
            message=message+"Email, "
            istrue = false;
        }

        if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(celular2)) {
            message=message+"Celular, "
            istrue = false;
        }

        if (tipomascota2 === "-1"){
            message=message+"Tipo de mascota, "
            istrue=false
        }
        if (tipomascota2 ==='1'){ if (escondermascota2.length > 40 || !/^[a-zA-Z ]+$/.test(escondermascota2)) {
            message=message+"Recuadro de mascota, "
            istrue=false;
        }}

        if (!/^[0-9]+$/.test(edadmascota2)){
            message=message+"Edad de mascota, "
            istrue=false;
        }


        if (!/^[a-zA-Z ]+$/.test(colormascota2) || colormascota2.length>30){
            message=message+"Color, "
            istrue=false;
        }
        if (!/^[a-zA-Z ]+$/.test(razamascota2) || razamascota2.length >30){istrue=false;}
        if (estirilizadomascota2==='-1'){
            message=message+"Opción de estirilización, "
            istrue=false
        }
        if (vacunasmascota2==='-1'){
            message=message+"Opción de vacunado, "
            istrue=false
        }
        if (!/\.(jpe?g|png|gif|bmp)$/i.test(fotomascota2) || contadorFotos2>4){
            message=message+"Imagen, "
            istrue=false
        }
    }
    if (istrue){
        window.location.replace("./extra/acepta.html");
        return true;
    }
    else {
        document.getElementById('modal').style.display='none';
        mostrarError(message.substring(0, message.length - 2));
        return false;
    }
}




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.getElementById("informar").style.display='none';
    document.getElementById("listado").style.display='none';
    document.getElementById("estadistica").style.display='none';
}


function cambiartmno(imagen){
    if (imagen.width=='800'){
        imagen.style.width='320px';
        imagen.style.height='240px';
    }
    else{
        imagen.style.width='800px';
        imagen.style.height='600px';
        document.getElementById('top-left').style.display='block';
    }
}

