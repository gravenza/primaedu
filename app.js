const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const db = require('./config/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const eduRoutes = require('./routes/edu');
const errorsController = require('./controllers/errors');

db.execute('SELECT * FROM product')
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(eduRoutes);
app.use(errorsController.page404);

//const server = http.createServer(app);

//server.listen(3000);
app.listen(8000);
