function createElement(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "Text_element",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom =
    element.type === "Text_element"
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((name) => (dom[name] = element.props[name]));

  element.props.children.forEach((child) => render(child, dom));

  container.append(dom);
}

const React = {
  createElement,
};

export const ReactDOM = {
  render,
};

export default React;
