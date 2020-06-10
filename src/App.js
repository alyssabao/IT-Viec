import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./page/Jobs"
import Login from "./page/Login"
import Details from "./page/Details"
import FourOhFour from "./page/FourOhFour"
import { useSelector } from "react-redux";


function App() {
  let user = useSelector((state) => state.user);
  // let [user, setUser] = useState({ isAuthenticated: false });
  const ProtectedRoute = (props) => {
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props) => <Details {...props}/>}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
        <Route path="*" component={FourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
