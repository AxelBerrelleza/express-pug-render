const express = require('express');
const cors = require('cors');

const port = 4000;
const app = express();

app.use(cors());

app.use('/static', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/urlparam', (req, res) => {
  res.send(req.query);
});

app.post('/urljson', (req, res) => {
  res.send(req.body);
} );

app.post( '/pdf', ( req, res ) => {
  res.render( 'template.pug', { ...req.body } ); // Se muestra la plantilla hello.pug
} );

app.listen( port, () => console.log(`Servidor iniciado en el puerto ${port}`) );