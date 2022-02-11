// Webpacks

// React

// Babel

// JSX

import React, { ReactDOM } from "./React/Index";

import List from "./components/List";

import Navbar from "./components/Navbar";

const elem = React.createElement("div", {}, Navbar, List);

const root = document.getElementById("root");

ReactDOM.render(elem, root);

console.log(<div>Hello</div>);
