const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/.env`});

const morgan = require('morgan');
const express = require('express')
const mongoose = require('mongoose');

const routes = require('./Routers');
const {PORT} = require('./Config')

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const setup = [];
setup.push(mongoose.connect(process.env.DbUrl))

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1',routes)

Promise.all(setup).then(() => {
    app.listen(process.env.port || PORT, () => {
        console.log("Running ...",process.env.port || PORT)
    })
}).catch(console.log)


module.exports = app
