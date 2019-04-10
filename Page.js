import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

const page = WrappedComponent => {
  class Page extends Component {

    constructor(props) {
      super(props)
      this.store = createStore(combineReducers({form: formReducer}), {}, applyMiddleware(reduxThunk));
    }
    render() {
      const { initialState, ...rest } = this.props
      return (
        <Provider store={this.store}>
          <WrappedComponent {...rest} />
        </Provider>
      )
    }
  }

  return Page
}

export default page
