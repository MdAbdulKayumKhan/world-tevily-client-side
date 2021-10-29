import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import NotFound from './components/Home/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
