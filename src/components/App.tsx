import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Main from './Main'

const root = ReactDOMClient.createRoot(document.body);
root.render(<Main />);