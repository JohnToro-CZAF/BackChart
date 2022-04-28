const indexRouter =  require('./home')
const userRouter = require('./users');
const stockRouter = require('./stock');
function route(app){
  app.use('/', indexRouter);
  app.use('/user',userRouter);
  app.use('/stock-history', stockRouter);
}

module.exports = route;



