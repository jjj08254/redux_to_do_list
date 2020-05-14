import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pickListAction } from '../actions/listPickerAction';

export class TodoListPicker extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const listName = e.currentTarget.listName.value;
    this.props.pickListAction(e.currentTarget.listName.value);
    this.props.history.push(`./jojojack/${listName}`);
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            autoComplete="off"
            type="text"
            name="listName"
            placeholder="Enter a List Name"
            defaultValue="JOJO-Jack"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listName: state.listName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ pickListAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPicker);
