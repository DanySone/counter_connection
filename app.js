var session = require('express-session');

const port = 4000

var app = require('express')();


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', function(req, res){
  if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
    req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
  req.session.pageCountByCurrentUserOrAnyNameYouWant++;
  console.log(req.session.pageCountByCurrentUserOrAnyNameYouWant)
  res.send({ 
    pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
