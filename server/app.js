var session = require('express-session');

const HOST = '127.0.0.1';
const PORT = 4000

var app = require('express')();


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/get_count', function(req, res){
  if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
    req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
  req.session.pageCountByCurrentUserOrAnyNameYouWant++;
  console.log(req.session.pageCountByCurrentUserOrAnyNameYouWant)
  res.send({ 
    pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}/get_count`);