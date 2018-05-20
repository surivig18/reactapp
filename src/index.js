import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery'
$('#getstarted').click(function(e){
    ReactDOM.render(<App />, document.getElementById('root'),function(){
    document.getElementById('root').style.display = ' block';
    document.getElementById('homescreen').style.display = 'none';
    
    });
    e.preventDefault();
        registerServiceWorker();
});
