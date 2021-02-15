import React from 'react'
import { Router,Switch,Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// style 
import './styles/style.css'

// components imports
import HeaderNav from './components/header/HeaderNav'
import HeaderMobile from './components/header/HeaderMobile'
import Footer from './components/header/Footer'
import FooterMobile from './components/header/FooterMobile'

// pages imports
import Landing from './pages/Landing'
import About from './pages/About'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Users/Dashboard'
import Profile from './pages/Users/Profile'
import EditProfile from './pages/Users/EditProfile'
import Products from './pages/Users/Products'
import Forgot from './pages/Auth/Forgot'
import Verify from './pages/Auth/Verify'
import Contact from './pages/Contact'




 const App = ()=>{
     const history = createBrowserHistory()
return (
        <div className="">
            {/* <HeaderNav/>
            <HeaderMobile/> */}

            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/editProfile" component={EditProfile}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/forgotPassword" component={Forgot}/>
                    <Route path="/verifyEmail" component={Verify}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Router>

            <Footer/>
            <FooterMobile/>
        </div>
    )
}

export default App
