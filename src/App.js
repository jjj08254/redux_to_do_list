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
  state = {
    listItems: {},
  };

  pageLoadFinished = false;

  componentDidMount() {
    const action = this.props.pageRefreshAction(this.props.match.params.listId);

    this.ref = base.syncState(`${action.payload}/listItems`, {
      context: this,
      state: 'listItems',
    });

    base.fetch(action.payload, { context: this }).then((storeData) => {
      if (!storeData.listItems) {
        this.props.syncItemAction([]);
        this.pageLoadFinished = true;
        return;
      }
      if (storeData.listItems.length) {
        const newStore = this.props.syncItemAction(storeData.listItems);
        this.setState({ listItems: newStore.payload });
        this.pageLoadFinished = true;
      }
    });

    //   const itemsFromLocal = JSON.parse(localStorage.getItem(action.payload));
    //   if (itemsFromLocal) {
    //     this.props.syncItemAction(itemsFromLocal);
    //   } else {
    //     this.props.syncItemAction([]);
    //   }

    // this.props.syncItemAction(this.state.listItems);
  }

  componentDidUpdate() {
    if (this.pageLoadFinished) {
      // let prevState = ;
      // let newState;
      // if ()
      // const prevState = [...this.state.listItems];
      // this.props.syncItemAction(prevState);

      this.setState({ listItems: this.props.listItems });
      // console.log('update');
    }

    // localStorage.setItem(
    //   `${this.props.listName}`,
    //   JSON.stringify(this.props.listItems)
    // );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
