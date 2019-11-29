const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webpack from 'webpack';

// Settings
app.set('port', 8080);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
    
    // Router
    app.use(require('./router/router.js'));
    
    // Static
    app.use(express.static(path.join(__dirname, './dist')));
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
    })); 


    app.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`);
      });
      