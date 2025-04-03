const btnIzq = document.querySelector(".btnIzquierda"),
    btnDer = document.querySelector(".btnDerecha"),
    sliderContenedor = document.querySelector("#sliderCarrusel"),
    sliderSection = document.querySelectorAll(".slider-section");

btnIzq.addEventListener("click", e => moveToLeft());
btnDer.addEventListener("click", e => moveToRight());

let operacion = 0;
counter = 0;
widthImg = 100 / sliderSection.length;
function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        operacion = 0;
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        counter = 0;
        sliderContenedor.style.transition = "none";
    } else {
        counter++;
        operacion = operacion + widthImg;
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        sliderContenedor.style.transition = "all ease 1.5s";
    }

}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        sliderContenedor.style.transition = "none";

    } else {
        operacion = operacion - widthImg;
        sliderContenedor.style.transform = `translate(-${operacion}%)`
        sliderContenedor.style.transition = "all ease 1.5s";
    }
}

const btnAgregar = document.querySelector(".nuevoProducto");
let id = document.querySelector(".codigoProducto");
let nombre = document.querySelector(".nombreProducto");
let descripcion = document.querySelector("#descProducto");
let img = document.querySelector(".imgProducto");
let precio = document.querySelector(".precioProducto");

btnAgregar.addEventListener("click", async () => {

    const nuevoProducto = {
        id: parseInt(id.value), 
        nombre: nombre.value,
        descripcion: descripcion.value,
        imagen: img.value, 
        precio: parseFloat(precio.value)
    };

    try {
        const respuesta = await fetch("http://localhost:3000/api/productos", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoProducto) // Convertir objeto a JSON
        });

        if (respuesta.ok) {
            console.log("Producto agregado con éxito");
        } else {
            console.error("Error al agregar el producto");
        }
    } catch (error) {
        console.error("Error de conexión:", error);
    }
});




