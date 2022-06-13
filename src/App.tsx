import React from 'react';
import { BrowserRouter,Router, Route, Link, Switch, Redirect} from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Money, 333
              </Link>
              </li>
            <li>
              <Link to="/tags">
                Tags
              </Link>
            </li>
            <li>
              <Link to="/statistics">
                Statistics
              </Link>

            </li>
          </ul>
        </nav>
          <Switch>
            <Route path="/home" component={ Money }></Route>
            <Route path="/tags" component={ Tags }></Route>
            <Route path="/statistics" component={ Statistics }></Route>
            <Redirect exact path="/" to="/tags" ></Redirect>
            <Route path="*" component={Error}></Route>
          </Switch>
      </BrowserRouter>
  );
}
function Error () {
  return (
    <div>
      你呀输错了知道吗
    </div>
  )
}
function Money() {
  return (
    <div>
      Money
    </div>
  )
}
function Tags() {
  return (
    <div>
      Tags
    </div>
  )
}
function Statistics() {
  return (
    <div>
      Statistics
    </div>
  )
}
export default App;
