import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { addCategoriesStorage, fetchCategoriesList } from './lib/helpers';

import Header from './components/Header';
import Overview from './components/Overview';
import CategoriesList from './components/CategoriesList';
import TransactionsList from './components/TransactionsList';

//START Add mocked categories, if none were found in localStorage
fetchCategoriesList.then(result => {
  if (!result) {
    addCategoriesStorage();
  }
});
//END Add mocked categories, if none were found in localStorage

const routes = [
  {
    path: '/transactions',
    main: () => <TransactionsList></TransactionsList>
  },
  {
    path: '/categories',
    main: () => <CategoriesList></CategoriesList>
  },
  {
    path: '/overview',
    main: () => <Overview></Overview>
  }
]


class App extends Component {

  // New React 16 Error Catch method.
  componentDidCatch(error, info) {
    document.write(error,
      'Most likely, mocked data has just added to localStorage. Please click <a href="https://haosik.github.io/spendtest/">https://haosik.github.io/spendtest/</a>')
  }

  render() {
    return (

      <Router>
        <div style={{}}>
          <Header></Header>
          <div className="container">
            <div style={{ flex: 1, padding: '10px' }}>
              {/* <Route exact path="/" render={() => <Redirect to="/transactions" />} /> */}
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
