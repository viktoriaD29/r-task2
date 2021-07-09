import React from 'react';
import ReactDOM from 'react-dom';

class GoodButton extends React.Component {
  handelClick(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handelClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
