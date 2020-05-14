import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
} from 'reactstrap';

import { checkItemAction, deleteItemAction } from '../actions/listActions';

class DisplayTodoList extends Component {
  displayListItem = () => {
    return this.props.listItems.map((item) => (
      <InputGroup
        key={item.id}
        style={{
          marginBottom: '10px',
          overflowWrap: 'anywhere',
          display: 'flex',
        }}
      >
        <InputGroupAddon style={{ flex: '1' }} addonType="prepend">
          <InputGroupText>
            <Input
              addon
              checked={item.checked}
              onChange={() => this.props.checkItemAction(item)}
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </InputGroupText>
        </InputGroupAddon>

        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flex: '50',
          }}
        >
          <span
            style={{
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '35px',
                textDecoration: item.checked ? 'line-through' : 'none',
              }}
            >
              {item.title}
            </span>{' '}
            <span style={{}}>&nbsp;&nbsp;- {item.time}</span>
          </span>
          <ButtonGroup
            style={{
              position: 'relative',
            }}
            onClick={() => this.props.deleteItemAction(item)}
            size="sm"
          >
            <Button
              style={{
                borderRadius: '40%',
                verticalAlign: 'text-top',
                fontSize: '25px',
                backgroundColor: '#f4f4f4',
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              {' '}
              &times;
            </Button>
          </ButtonGroup>
        </ListGroupItem>
      </InputGroup>
    ));
  };

  render() {
    return <ListGroup>{this.displayListItem()}</ListGroup>;
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ checkItemAction, deleteItemAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodoList);
