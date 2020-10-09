require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
    //   session = require('express-session'),
    //   authCtrl = require('./controllers/authController'),
    //   mainCtrl = require('./controllers/mainController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
// }));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//auth endpoints


//post endpoints


//user endpoints


app.listen(port, () => console.log(`Server running on port ${port}`));