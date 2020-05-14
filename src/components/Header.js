import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Todo List</h1>
        <h5>{this.props.listName}</h5>
        <Link
          style={{ color: 'darkblue', fontWeight: 'bold' }}
          to={`/jojojack/${this.props.listName}`}
        >
          Home
        </Link>{' '}
        |{' '}
        <Link style={{ color: 'darkblue', fontWeight: 'bold' }} to="/about">
          About
        </Link>
      </header>
    );
  }
}

const headerStyle = {
  color: 'white',
  fontWeight: '100',
  letterSpacing: '2px',
  textDecoration: 'none',
  background: 'rgba(0, 0, 0, 0.4)',
  padding: '20px 5px',
  display: 'inline-block',
  width: '100%',
  textAlign: 'center',
};

const mapStateToProps = (state) => {
  return {
    listName: state.listName,
  };
};

export default connect(mapStateToProps)(Header);
