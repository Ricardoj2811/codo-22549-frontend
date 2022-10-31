function comprarTickects() {
    obtenerValoresInner("principal", '');
    obtenerValoresInner("oradores", '');
    obtenerValoresInner("orador", '');
    obtenerValoresInner("bsAs", '');

    const html = `
    <div class="row justify-content-center p-0 m-0 mt-5">
        <div class="border border-primary col-sm-4 col-12 m-1 pt-2 descuentos text-center">
            <h5><b>Estudiante</b></h5>
            <p>Tienen un descuento</p>
            <p><b>80%</b></p>
            <p>* presentar documentación</p>
        </div>
        <div class="border border-success col-sm-4 col-12 m-1 pt-2 descuentos text-center">
            <h5><b>Trainee</b></h5>
            <p>Tienen un descuento</p>
            <p><b>50%</b></p>
            <p>* presentar documentación</p>
        </div>
        <div class="border border-warning col-sm-4 col-12 m-1 pt-2 descuentos text-center">
            <h5><b>Junior</b></h5>
            <p>Tienen un descuento</p>
            <p><b>15%</b></p>
            <p>* presentar documentación</p>
        </div>
    </div>
    <form class="formulario container-fluid" id="formCompra">
        <div class="mb-3 text-center">
            <label for="exampleInputEmail1" class="form-label">Venta</label>
            <h2>VALOR DE TICKET $200</h2>
            <div class="d-flex">
                <input type="text" class="form-control me-2" id="nombre" aria-describedby="emailHelp"
                    placeholder="Nombre">
                <input type="text" class="form-control" id="apellido" aria-describedby="emailHelp"
                    placeholder="Apellido">
            </div>
        </div>
        <div class="mb-3">
            <input type="email" class="form-control" id="correo" placeholder="Correo"></input>
        </div>
        <div class="mb-3 d-flex justify-content-center mx-1">
            <div class="col-6 me-2">
                <label for="cantidad" class="ms-1 mb-2">Cantidad</label>
                <input type="number" class="form-control me-5" id="cantidad" aria-describedby="emailHelp"
                    placeholder="Cantidad">
            </div>
            <div class="col-6">
                <label for="lista" class="form-label my-0 py-0 ms-1 mb-2">Categoría</label>
                <select id="lista" class="form-select">
                    <option>Estudiante</option>
                    <option>Trainee</option>
                    <option>Junior</option>
                </select>
            </div>
        </div>
        <div>
            <p id="totalAPagar" class="totalAPagar pt-2 ps-3">Total a Pagar: $ </p>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success w-100 mb-3 me-2" onclick="limpiar()">Borrar</button>
            <button type="button"
                class="btn btn-success w-100 mb-3" onclick="resumen()">Resumen</button>
        </div>
        <div class="d-flex justify-content-center">
        <a href="./index.html" class="btn btn-success w-100 mb-3 me-2" onclick="limpiar()">Regresar</a>
        </div>
    </form>
    `
    obtenerValoresInner("comprarTickets", html);
}


function obtenerValoresInput(id) {
    const valor = document.getElementById(id).value;
    return valor;
}

function obtenerValoresInner(id, component) {
    document.getElementById(id).innerHTML = component;
}

function limpiar() {
    document.getElementById("formCompra").reset();
}

function resumen() {
    const nombre = obtenerValoresInput("nombre");
    const apellido = obtenerValoresInput("apellido");
    const correo = obtenerValoresInput("correo");
    const cantidad = obtenerValoresInput("cantidad");
    const categoria = obtenerValoresInput("lista");
    const valorTicket = 200;
    let totalAPagar = 0;

    if (categoria.toLowerCase() === "estudiante" && cantidad !== "" && cantidad > 0 && nombre !== "" && apellido !== "" && correo !== "" && !isNaN(cantidad)) {
        let valor = valorTicket * 0.2
        totalAPagar = valor * cantidad
        alert(`
        Nombre: ${nombre}
        Apellido: ${apellido}
        Correo: ${correo}
        Cantidad: ${cantidad}
        Categoria: ${categoria}
        Total a Pagar = ${totalAPagar}
        `)
    }
    else if (categoria.toLowerCase() === "trainee" && cantidad !== "" && cantidad > 0 && nombre !== "" && apellido !== "" && correo !== "" && !isNaN(cantidad)) {
        let valor = valorTicket * 0.5
        totalAPagar = valor * cantidad
        alert(`
        Nombre: ${nombre}
        Apellido: ${apellido}
        Correo: ${correo}
        Cantidad: ${cantidad}
        Categoria: ${categoria}
        Total a Pagar = ${totalAPagar}
        `)
    }
    else if (categoria.toLowerCase() === "junior" && cantidad !== "" && cantidad > 0 && nombre !== "" && apellido !== "" && correo !== "" && !isNaN(cantidad)) {
        let valor = valorTicket * 0.85
        totalAPagar = valor * cantidad
        alert(`
        Nombre: ${nombre}
        Apellido: ${apellido}
        Correo: ${correo}
        Cantidad: ${cantidad}
        Categoria: ${categoria}
        Total a Pagar = ${totalAPagar}
        `)
    } else {
        alert("Debe introducir todos los datos")
    }

    obtenerValoresInner("totalAPagar", `Total a Pagar: $ ${totalAPagar}`);

    return totalAPagar;
}

