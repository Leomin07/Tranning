import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';
import CounterRedux from './components/CounterRedux';
import QuoteXml from './components/Quote/QuoteXml';
import QuoteFetch from './components/Quote/QuoteFetch';
import Todo from './components/Todo/TodoComponents';

const App = () => {
  return (
    <Router>
      <ul className="text-center bg-blue-400">
        <li className="inline-block px-8 py-4">
          <Link to="/">Counter Class</Link>
        </li>
        <li className="inline-block px-8 py-4">
          <Link to="/counter-hook">Counter Hook</Link>
        </li>
        <li className="inline-block px-8 py-4">
          <Link to="/counter-redux">Counter Redux</Link>
        </li>
        <li className="inline-block px-8 py-4">
          <Link to="/todo">Todo</Link>
        </li>
        <li className="inline-block px-8 py-4">
          <Link to="/quote-fetch">Quote With Fetch Api</Link>
        </li>
        <li className="inline-block px-8 py-4">
          <Link to="/quote-xml">Quote With Xml</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={CounterClass} exact />
        <Route path="/counter-hook" component={CounterHook} exact />
        <Route path="/counter-redux" component={CounterRedux} exact />
        <Route path="/todo" component={Todo} exact />
        <Route path="/quote-fetch" component={QuoteFetch} exact />
        <Route path="/quote-xml" component={QuoteXml} exact />
      </Switch>
    </Router>
  );
};

export default App;
