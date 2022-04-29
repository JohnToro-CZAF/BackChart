const indexRouter =  require('./home')
const userRouter = require('./users');
const stockRouter = require('./stock');
const loginRouter = require('./login');
function route(app){
  app.use('/user',userRouter);
  app.use('/stock-history', stockRouter);
  app.use('/login', loginRouter);
  app.use('/', indexRouter);
}

module.exports = route;



