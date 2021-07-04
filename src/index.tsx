import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"

type NullableHTMLElement = HTMLElement | null;

const root : NullableHTMLElement = document.getElementById('root');

ReactDOM.render(<h1>Helloworld React!</h1>, root);