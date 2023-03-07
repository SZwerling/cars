import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
   <Provider store={store}>
      <App />
   </Provider>
);

// State: car name(string input), car cost(number input),
// search term(string input),
// Cars(array of objects{id: , name: , cost: })
// DERIVED STATE -- total cost(number), Match between input and car already in state
