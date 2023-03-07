import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);


root.render(<App />);



// State: car name(string input), car cost(number input), 
// search term(string input), 
// Cars(array of objects{id: , name: , cost: })
// DERIVED STATE -- total cost(number), Match between input and car already in state 