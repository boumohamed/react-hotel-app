import React, { useState } from 'react';
import { AuthProvider } from "./contexts/AuthContext"
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import "./style/App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { useAuth } from "./contexts/AuthContext"

import About from './Components/About';
import HomePage from './Components/HomePage';
import NavBar from "./Components/NavBar";
import Notfound from './Components/Notfound';
import ReservationDetails from './Components/ReservationDetails';
import Reserve from './Components/Reserve';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import AdminDashbord from './Components/AdminDashbord';
import AdminReservationDetails from './Components/AdminReservationDetails';
import Myaccount from './Components/Myaccount';
import Home from './Components/Home';
import SearchList from './Components/SearchList';
import PrivateRoute from './Components/PrivateRoute'
import UserReservationDetails from './Components/UserReservationDetails';
import Messages from './Components/Messages';
import MessageDetails from './Components/MessageDetails';


function App() {
  const  currentUser = useAuth()
  const [admin, setAdmin] = useState(false)
  if(currentUser && currentUser.email === 'mb.bouzri@gmail.com')
    setAdmin(true)
  console.log(admin , currentUser && currentUser.email)
    
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <main >    
          <NavBar/>
         
              <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/home" component={Home} exact/>
                <Route path="/searche" component={SearchList} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/hotel/:id" component={ReservationDetails} exact/>
                <Route path="/hotel/:id/reserve" component={Reserve} exact/>
                <Route path="/signin" component={Signin} exact/>
                <Route path="/signup" component={Signup} exact/>
                <PrivateRoute path="/user/reservation/:id" component={UserReservationDetails} exact/>
                <PrivateRoute path="/myaccount" component={Myaccount} exact/>  
                <PrivateRoute path="/admin" component={AdminDashbord} exact/>
                <PrivateRoute path="/admin/reservation/:id" component={AdminReservationDetails} exact/>
                <PrivateRoute path="/messages" component={Messages} exact/>
                <PrivateRoute path="/admin/message/:id" component={MessageDetails} exact/>
                <Route path="/**" component={Notfound} exact/> 
               

              </Switch>     
        </main>
        </BrowserRouter>  
      </AuthProvider>
    </>
  );
}
export default App;
