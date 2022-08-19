//declaramos los objetos
const auto1 = {
    src: '../images/audi-s7.png',
    nombre: 'Audi S7 QUATTRO',
    tipo: 'Sportback',
    pasajeros: 5,
    transmission: 'Manual',
    puertas: 5,
    aire: true,
    estanque: 'Estanque lleno',
    sucursal: 'Aeropuerto Internacional Arturo Merino Benítez',
    precio: 25990
}
const auto2 = {
    src: '../images/audi-a5.png',
    nombre: 'Audi A5',
    tipo: 'Coupé',
    pasajeros: 2,
    transmission: 'Automático',
    puertas: 2,
    aire: true,
    estanque: 'Estanque lleno',
    sucursal: 'Aeropuerto Internacional Arturo Merino Benítez',
    precio: 35990
}
const auto3 = {
    src: '../images/bmw-128.png',
    nombre: 'BMW 128ti',
    tipo: 'Sportback',
    pasajeros: 5,
    transmission: 'Automático',
    puertas: 5,
    aire: true,
    estanque: 'Estanque lleno',
    sucursal: 'Aeropuerto Internacional Arturo Merino Benítez',
    precio: 32990
}

//creamos un array d eobjetos

const autos = [auto1, auto2, auto3];


//llamamos la galeria del DOM
let galeria = document.getElementById("galeria");


//creamos la funcion para poder ver la galeria de productos
function mostrarProductos(){
    for (const auto of autos) {
        let producto = document.createElement("div");
        producto.className = "producto";
        

        producto.innerHTML = `
        
        <div class="info">
            <div class="imagen">
                <img src="${auto.src}" alt="${auto.nombre}" width="160px">
            </div>
            <div class="detalle">
                <div class="titulo">
                    <h3>${auto.nombre}</h3>
                    <h6>${auto.tipo}</h6>
                </div>
                <div class="car">
                    <p><img src="images/user.svg" alt="pasajeros">${auto.pasajeros}</p>
                    <p><img src="images/transmission.svg" alt="pasajeros">${auto.transmission}</p>
                    <p class="precio">$${auto.precio}<span>/dia</span></p>
                </div>
            </div>
        </div>    
        `;
        galeria.appendChild(producto);
    }
    
};


//mostramos la funcion para ver la galeria de productos

mostrarProductos();


//en construccion
function detalleDelProducto(){

    


    for (const auto of autos) {
        let producto = document.createElement("div");
        producto.className = "producto";
        

        producto.innerHTML = `
        
        <div class="producto">
                    <div class="info">
                        <div class="imagen">
                            <img src="images/audi-a5.png" alt="${auto.nombre}" width="160px">
                        </div>
                        <div class="detalle">
                            <div class="titulo">
                                <h3>${auto.nombre}</h3>
                                <h6>${auto.tipo}</h6>
                            </div>
                            <div class="car">
                                <h5>Información Técnica</h5>
                                <div class="car-int">
                                    <p><img src="images/user.svg" alt="pasajeros">${auto.pasajeros}</p>
                                    <p><img src="images/transmission.svg" alt="pasajeros">${auto.transmission}</p>
                                    <p><img src="images/transmission.svg" alt="pasajeros">${auto.transmission}</p>
                                    <p><img src="images/transmission.svg" alt="pasajeros">${auto.transmission}</p>
                                    <p><img src="images/transmission.svg" alt="pasajeros">${auto.transmission}</p>
                            </div>
                            </div>
                            <div class="precio-total">
                                <div class="dias">
                                    <label for="name">Cuantos días lo necesitas?</label><input type="text">
                                </div>
                                <div class="total">
                                    <p class="precio">$${auto.precio}<span>/dia</span></p>
                                    <button>Arrendar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>    
        `;
        galeria.appendChild(producto);
    }
    
};
