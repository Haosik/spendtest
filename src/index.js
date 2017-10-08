import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import WebFont from 'webfontloader';
WebFont.load({
	google: {
	  families: ['Open Sans:400,600', 'sans-serif']
	}
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
