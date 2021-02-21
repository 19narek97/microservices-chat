import React, {Suspense, lazy} from 'react'
import { Switch} from 'react-router-dom'
import {Router} from "./Router/index"
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

/* Layouts components */
const UserLayout = lazy(() => import('./components/Layouts/UserLayout'))
const BaseLayout = lazy(() => import('./components/Layouts/BaseLayout'))

/* main components */
const Home = lazy(() => import('./pages/Home/index'))
const SignIn = lazy(() => import('./pages/LoginAndRegister/SignIn'))
// const SignUp = lazy(() => import('./pages/LoginAndRegister/SignUp'))




const AppRoutes = () => {


    return(
        <Suspense fallback={<div className={"main-loader"}><Loader type="Triangle" color="#0057ff" height={100} width={100}/></div>}>
            <Switch>
                {/* routes */}  
                <Router path="/" exact={true} component={Home} layout={UserLayout}/>
                <Router path="/login" exact={true} component={SignIn} layout={BaseLayout}/>
                {/* <Route path="/registration" exact={true} component={SignUp}/> */} */}
            </Switch>
        </Suspense>
    )

}

export default AppRoutes;