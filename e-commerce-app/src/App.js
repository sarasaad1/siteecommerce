import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import ListeProduits from './pages/ListeProduits';
import Panier from './pages/Panier';
import Login from './pages/Login';
import Produit from './pages/Produit';
import Register from './pages/Register';


function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/produits/:category" component={ListeProduits}/>
        <Route exact path="/produit/:id" component={Produit}/>
        <Route path="/panier" component={Panier}/>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
      </Switch>
    </Router>
  );
  
}  

export default App;

//  <Route path="/success">
//    <Success />
//  </Route>
        
        