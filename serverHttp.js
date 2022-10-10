const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hola gente');
});
const PORT = 8080;
const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
});