import React from 'react';
import ReactDOM from 'react-dom';

export default class RenderHelper {

  renderComponent(element, parent) {
    if (parent) {
      ReactDOM.render(React.createElement(element), parent);
    } else {
      const div = document.createElement('div');
      document.body.appendChild(div);
      ReactDOM.render(React.createElement(element), div);
    }
  }
}
