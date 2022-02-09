app.get('/', function(res, res){
  if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
    req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
  req.session.pageCountByCurrentUserOrAnyNameYouWant++;
  res.send({ 
    pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
  });
});
