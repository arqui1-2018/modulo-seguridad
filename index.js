var express require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Respuesta del servidor...');
});

app.listen(8000, function() {
	console.log('Ejemplo app escuchando en el puerto 8000');
});