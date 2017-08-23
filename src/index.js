import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';



import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


window.jQuery = require('jquery');
//import 'jquery/dist/jquery.min.js';
//import 'jquery';

var bootstrap = require('bootstrap/dist/js/bootstrap.min.js');
//import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
