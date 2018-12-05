import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Link, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Auth from './components/Auth';
// import Home from './components/Home';
// import history from './history';
import * as serviceWorker from './serviceWorker';
// require('dotenv').config()

// ReactDOM.render(
//   <Router history={history}>
//     <div>
//       <App>
//         {/* <Route path="/auth" component={Auth} /> */}
//       </App>
//       <ul>
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/auth">Authentication</Link></li>
//       </ul>
//       <Route exact path="/home" component={Home} />
//     </div>
//   </Router>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// const path = '/list/';
// this.props.history.push(path);