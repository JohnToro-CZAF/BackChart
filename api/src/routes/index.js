const indexRouter =  require('./home')
const userRouter = require('./users');
const stockRouter = require('./stock');
const loginRouter = require('./Account/login');
const registerRouter = require('./Account/register');
function route(app){
  app.use('/user',userRouter);
  app.use('/stock-history', stockRouter);
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);
  app.use('/', indexRouter);
}

module.exports = route;



