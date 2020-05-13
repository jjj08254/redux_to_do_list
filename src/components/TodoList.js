import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItemAction } from '../actions/actions';

class TodoList extends Component {
  createTodoListItem = () => {
    return this.props.items.map((item) => (
      <li key={item.id} onClick={() => this.props.addItemAction()}>
        {item.title}
      </li>
    ));
  };

  render() {
    return <ul>{this.createTodoListItem()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItemAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
