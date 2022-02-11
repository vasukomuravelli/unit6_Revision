import React from "../React/Index";

const c1 = React.createElement("div", {}, "child1");
const c2 = React.createElement("div", {}, "child2");
const c3 = React.createElement("div", {}, "child3");

export default React.createElement("div", {}, c1, c2, c3);
