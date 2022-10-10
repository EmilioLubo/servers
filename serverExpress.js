const moment = require('moment');
const express = require('express');
const Contenedor = require('./index');
const productos = new Contenedor('./Productos.txt');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.error(`Error en el servidor. ${error}`));
let count = 0;
app.get('/', (req, res) => {
    count ++
    res.send('<h1 style="color: blue;" >Bienvenidos</h1><a href="http://localhost:8080/productos">Productos</a><br><a href="http://localhost:8080/productoRandom">Random</a><br><h3> Visitas: ' + count + '</h3>');
});

app.get('/productos', async (req, res) => {
    const products = await productos.getAll();
    res.send('<h2>' + JSON.stringify(products) + '</h2><a href="http://localhost:8080/">Inicio</a>')
});

const random = async () => {
    const products = await productos.getAll();
    const n = Math.ceil(Math.random() * products.length)
    return n;
}

app.get('/productoRandom', async(req, res) => {
    const n = await productos.getById(await random())
    res.send('<h2>' + JSON.stringify(n) + '</h2><a href="http://localhost:8080/">Inicio</a>')
})
