import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { addItemAction } from '../actions/listActions';

class InputSection extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItemAction(e.currentTarget.text.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Form
        style={{ display: 'flex' }}
        inline
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <FormGroup
          style={{ flex: '10', display: 'flex' }}
          className="mb-2 mr-sm-2 mb-sm-0"
        >
          <Input
            style={{ fontSize: '20px', flexBasis: '100%' }}
            type="text"
            name="text"
            id="examplePassword"
            placeholder="Input Add Item"
            required
          />
        </FormGroup>
        <Button style={{ flex: '1' }} type="submit" name="addItemBtn">
          Add +
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItemAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSection);
