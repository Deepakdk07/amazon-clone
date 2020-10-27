import React, { useEffect }  from 'react';
import './App.css';
import Header from './Header'
import Checkout from './Checkout'
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(' THE USER IS >>> ', authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user just logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    <Router>
    <div className="app">
    
    <Switch>
      <Route exact path ='/login'>   
        <Login />
      </Route>
      <Route exact path ='/checkout'> 
        <Header />  
        <Checkout />
      </Route>
      <Route exact path ='/payment'> 
        <Header />  
        <Payment />
        
      </Route>
      
      <Route exact path ='/'>
        <Header />  
        <Home />
      </Route>
      
    </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
