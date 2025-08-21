const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    
    if (req.url === '/api') {

        const data = {
            nome: "Usuario2",
            stack: "Node.js",
            aprendizado: "Servidor com http nativo"
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Acesse /api para acessar os dados JSON');
    }

})

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})