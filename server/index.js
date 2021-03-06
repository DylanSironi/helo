require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      Ctrl = require('./controller'),
      session = require('express-session'),

      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//auth endpoints
app.post('/api/register', Ctrl.register);
app.post('/api/login', Ctrl.login);
app.post('/api/logout', Ctrl.logout);

//post endpoints


//user endpoints


app.listen(port, () => console.log(`Server running on port ${port}`));