import Home from 'components/Home';
import React from 'react';
import { BrowserRouter,Router, Route, Link, Switch} from 'react-router-dom'
import MyHome from './components/Home'
import MyBox from './components/Box'
function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <div>
          <Link to="/home">家</Link>
          <Link to="/box">盒子</Link>
          <Switch>
            <Route path="/home" component={MyHome}></Route>
            <Route path="/box" component={ MyBox }></Route>
          </Switch>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
