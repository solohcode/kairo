import React from 'react'
import { Router,Switch,Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// style 
import './styles/style.css'
import './styles/bannerStyle.css'


// // components imports
import HeaderNav from './components/header/HeaderNav'
// import HeaderNav from './components/Header/HeaderNav'
import Footer from './components/Footer/Footer'

// pages imports
import Landing from './pages/Landing'
import About from './pages/About'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Reset from './pages/Auth/Reset'
import Dashboard from './pages/Users/Dashboard'
import Profile from './pages/Users/Profile'
import EditProfile from './pages/Users/EditProfile'
import Products from './pages/Users/Products'
import CreateBusiness from './pages/Users/CreateBusiness'
import Forgot from './pages/Auth/Forgot'
import Verify from './pages/Auth/Verify'
import Contact from './pages/Contact'


export const history = createBrowserHistory()


 const App = ()=>{
return (
        <div className="">

            <Router history={history}>
                <HeaderNav/>

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
                    <Route path={`/verify_email/:id`} component={Verify}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/createBusiness" component={CreateBusiness}/>
                    <Route path={`/verify-password/:token`} component={Reset} />
                </Switch>

            <Footer/>
            </Router>

            
        </div>
    )
}

export default App
