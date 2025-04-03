const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs');
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'productos.json');

// Ruta de prueba
app.use(express.static(path.join(__dirname, "public")))

//CRUD

//Leer Productos
app.get('/api/productos', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    res.json(data);
});

//Crear productos
app.post('/api/productos', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));;
    const nuevoProducto = { id: Date.now(), ...req.body };
    data.push(nuevoProducto);

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json(nuevoProducto);
});

//Editar productos
app.put('api/productos/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const productoId = parseInt(req.params.id);

    data = data.map(prod => prod.id === productoId ? { ...prod, ...req.body } : prod);

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ mensaje: "Producto actualizado" });
});

//Borrar Producto
app.delete('/items/:id', (req, res) => {
app.delete('api/productos')
let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const productoId = parseInt(req.params.id);

data = data.map(prod => prod.id === productoId ? { ...prod, ...req.body } : prod);

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
res.json({ mensaje: "Producto actualizado" });
});

app.get("/api/productos", (req, res) => {
    if (fs.existsSync(archivoProductos)) {
        const data = fs.readFileSync(archivoProductos, "utf-8");
        const productos = JSON.parse(data);
        res.json(productos);
    } else {
        res.json([]);
    }
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});