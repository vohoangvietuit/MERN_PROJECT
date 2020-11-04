import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '../node_modules/react-toastify/dist/ReactToastify.min.css';
import '../node_modules/react-image-crop/dist/ReactCrop.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
