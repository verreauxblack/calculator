import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS } from  './utils/storage';


const Index = () => {
    setToLS('all-themes', themes.default);
    setToLS('theme', themes.data.theme1);
    return (
        <App />
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
