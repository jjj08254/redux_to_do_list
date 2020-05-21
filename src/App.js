import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import InputSection from './components/InputSection';
import DisplayTodoList from './components/DisplayTodoList';
import base from './base';
import { resetItemAction, syncItemAction } from './actions/listActions';
import { pageRefreshAction } from './actions/listPickerAction';

class App extends React.Component {
  // state = {
  //   listItems: {},
  // };

  componentDidMount() {
    const action = this.props.pageRefreshAction(this.props.match.params.listId);
    const itemsFromLocal = JSON.parse(localStorage.getItem(action.payload));
    if (itemsFromLocal) {
      this.props.syncItemAction(itemsFromLocal);
    } else {
      this.props.syncItemAction([]);
    }

    // this.ref = base.syncState(`${action.payload}/list`, {
    //   context: this,
    //   state: 'listItems',
    // });

    // this.setState({ listItems: this.props.listItems });
    // this.props.syncItemAction(this.state.listItems);
  }

  componentDidUpdate() {
    // this.setState({ listItems: this.props.listItems });
    localStorage.setItem(
      `${this.props.listName}`,
      JSON.stringify(this.props.listItems)
    );
  }

  componentWillUnmount() {
    // base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <br />
        <InputSection />
        <br />
        <DisplayTodoList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems,
    listName: state.listName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { pageRefreshAction, resetItemAction, syncItemAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
