import React, { Component } from 'react';

class InputSection extends Component {
  render() {
    return (
      <form>
        <input name="addItem" placeholder="Add Item" />
        <button type="submit">Add +</button>
      </form>
    );
  }
}

export default InputSection;
