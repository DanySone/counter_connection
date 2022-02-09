const session = require('expression-session');
  app.use(
    session({
      secret: 'secret string',
      resave: false,
      saveUninitialized: false, 
      cookie: { /k can add cookie related info here */ }
    })
   );
