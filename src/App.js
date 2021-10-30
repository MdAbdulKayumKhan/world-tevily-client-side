import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import NotFound from './components/Home/NotFound/NotFound';
import AuthProvider from './components/contexts/AuthProvider';
import Header from './components/Shared/Header/Header';
import Services from './components/Home/Services/Services';
import ServicesDetails from './components/Home/ServicesDetails/ServicesDetails';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import AddService from './components/Home/AddService/AddService';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/services">
          <Services></Services>
         </Route>
         <PrivateRoute path="/servicesDetails/:serviceId">
         <ServicesDetails></ServicesDetails>
         </PrivateRoute>
         <PrivateRoute path="/addService">
            <AddService></AddService>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
